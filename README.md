# RiseSDK for CocosCreator

# 前言
    default.json 详细说明见最底部

## 1, Add dependencies 添加引用
1. 添加default.json到native/engine/android/app/src/main/assets目录
2. 修改native/engine/android/app/build.gradle,添加一下配置

```js
        defaultConfig {
    //...
        manifestPlaceholders = [
                ivy_debug: true,
                din: false,
                gms_games_app_id  : "933591439403",
                google_admob_application_id: 'ca-app-pub-1914768831611213~5856809174',
                facebook_appId             : '419434508669986',
                facebook_clientToken: '003925c73e83fe389581f4700b43f16c'
        ]
    }
```
**Notice**
    *ivy_debug*                   : 是否是debug模式
    *din*                          : 是否主动时配刘海屏
    *gms_games_app_id*             : google play games id
    *google_admob_application_id*  : admob app id
    *facebook_appId*               : facebook app id
    *facebook_clientToken*         : facebook 客户端token
3. 主module 引用模块 ivy-sdk-core
4. 将 CocosCreator.java、CocosCreatorEvents.java 导入主module
5. 在 AppActiviy的onCreate方法中监听并初始化
    
```js
        JsbBridgeWrapper.getInstance().addScriptEventListener(CocosCreatorEvents.initializedEvent, new JsbBridgeWrapper.OnScriptEventListener() {
            @Override
            public void onScriptEvent(String arg) {
                JsbBridgeWrapper.getInstance().removeAllListenersForEvent(CocosCreatorEvents.initializedEvent);
                CocosCreator.onCreate(AppActivity.this);
            }
        });
```
6. 在 AppActivity的onActivityResult方法调用` CocosCreator.onActivityResult(requestCode, resultCode, data);`
7. 在 AppActivity的onRequestPermissionsResult方法调用` CocosCreator.onRequestPermissionsResult(requestCode, permissions, grantResults);`
8. 在 AppActivity的onDestroy方法调用`CocosCreator.onDestroy();`


* 如果您有使用proguard来混淆Java代码，需要添加以下规则：
* if you use proguard to obfuscate your java source code, you should add these rules to your proguard rules file:
```java
-dontwarn com.unity3d.**
-keep class com.android.** {
    <methods>;
}

-keep class android.support.** {
    *;
}

-keep class com.core.async.** {
    public *;
}

-keep class com.core.common.** {
    public *;
}

-keep class com.core.network.** {
    public *;
}

-keep class com.core.view.** {
    public *;
}
```

## 2, Initialize 初始化SDK
* 在第一个场景中的一个脚本中的Awake方法中调用RiseSdk.Instance.Init()方法
Call the Init function in a gameObject's Awake function in your initialize scene
* 初始化回调相关

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onInitialized, (arg) => {
    // sdk完成初始化回调
});

native.jsbBridgeWrapper.addNativeEventListener(Events.onReceiveServerExtra, (arg) => {
    // remote config 更新
});

native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentSystemEvent, (arg) => {
    // 支付系统可用性
});
```
* 初始化
    * 合适位置调用init方法
```js
  protected onLoad(): void {
        RiseSdk.init();
    }
```

## 3, ADs 广告
- 广告事件相关回调

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onAdEvent, (arg) => {
    //...
    // 示例
   // {
   // "event": "onAdEvent",   //事件key， 用于区分不同种类事件
   // "action": "showFullAd", // 操作标签，用于区分不同接口的调用
   // "tag": "default",       // 广告标签，默认 default
   // "id": 1,                // 只在调用激励视频时存在，用于区分广告
   // "value":"AdShown"      // 广告生命周期事件，如：AdShown、AdShowFails、AdClicked、AdClosed、AdReward(仅在激励视频广告中存在)
//}
    
});
```

- 插屏
`RiseSdk.showFullAd(tag?: string)`
- 激励视频
`RiseSdk.showRewardedAd(id: number, tag?: string)`
`RiseSdk.hasRewardedAd()`
- Banner
`RiseSdk.showBannerAd(position: BannerAdPosition)`
`RiseSdk.closeBannerAd()`

**Notice** 
    1. `RiseSdk.closeBannerAd()` 无回调
    2. `RiseSdk.hasRewardedAd()` 回调中 value 值为 0(存在可用广告) 或者 1(没有广告)
    
**支持的Banner Position**

```js
enum BannerAdPosition {
        POS_BANNER_LEFT_TOP = 1,
        POS_BANNER_LEFT_BOTTOM = 2,
        POS_BANNER_MIDDLE_TOP = 3,
        POS_BANNER_MIDDLE_BOTTOM = 4,
        POS_BANNER_MIDDLE_MIDDLE = 5,
        POS_BANNER_RIGHT_TOP = 6,
        POS_BANNER_RIGHT_BOTTOM = 7,
    }
```


### 4, Firebase events 谷歌后台统计分析
* **无无调**
* 事件打点

```js
//常规打点方式
RiseSdk. trackEvent(category: string, action: string, label: string, value: number);

/**
*  @param event 事件名称
*  @param data  事件内容，用逗号分隔，ex: key1,value1,key2,value2...
*/
RiseSdk.trackEvent2(event: string, data: string);
```
* 设置用户属性
`RiseSdk.setUserProperty(key: string, value: string); `


### 5, Firebase Remote Config 读取
* 相关回调
```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onRemoteConfig, (arg) => {
   //...
   // 示例
    // {
   // "event": "onRemoteConfig",   //事件key， 用于区分不同种类事件
   // "action": "RemoteConfigInt", // 操作标签，用于区分不同接口的调用
   // "key": "default",            // 键值
   // "value":1                    // key 对应的值
   //}
});
```
* 获取对应类型值
```js
RiseSdk.getRemoteConfigInt(string key);

RiseSdk.getRemoteConfigLong(string key);

RiseSdk.getRemoteConfigDouble(string key);

RiseSdk.getRemoteConfigBoolean(string key);

RiseSdk.getRemoteConfigString(string key);
```



## 6, In-App billing 应用中内付费
* 计费相关回调
```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentEvent, (arg) => {
    //billing 事件回调

=});
```

* pay、query接口回调示例

```js

    {
    "event": "onPaymentEvent",    // 事件key， 用于区分不同种类事件
    "action": "pay",              // 操作标签，用于区分不同接口的调用， pay、query接口action保持为pay
    "billId": 1,                  // 计费点id
    "payload": "",                // 支付时携带的信息
    "orderInfo": "",              // 订单信息，详情见下
    "value": 1,                   // 支付结果，0(支付成功)、1(支付失败、关闭)
    "msg": "pay canceled"         // 仅在支付关闭时会携带
   }

    oriderInfo 携带内容：
      receipt ：需要发送给apple后台的base64校验数据
      country ： 大写国家码
      platform： 平台
      payId： 计费点id
      payload ： payload
      appid：游戏id
      transactionIdentifier：点单号
      package：包名
      name：游戏名称
      uuid：uuid
```

* getPaymentDatas()、getPaymentData(billId) 回调示例

```js
    {
    "event": "PaymentDatas",      // 事件key， 用于区分不同种类事件，
    "action": "PaymentData",      // 操作标签，用于区分不同接口的调用， PaymentData\PaymentDatas
    "value": "{}",                 // 获取失败时，默认为 {},反之，为该计费点id对应SKU详情信息，见下
   }
   
   //Sku 详情
    id:                      sku id
    type:                    计费点类型
    price：                  价格
    original_price：         配置价格，非必带
    price_amount：           支付金额
    original_price_amount：  原价金额
    currency：               地区
    title：                  标题
    desc：                   描述
    usd:      
   
```

* 可使用接口
```js
//检测计费系统可用性
RiseSdk.IsPaymentSystemValid();

//检测计费点可用性，如billId为-1，则消耗所有未发货订单,否则查询billId 对应的订单状态
RiseSdk.query(billId);


//获取配置的全部內付计费点信息，价格单位、价格、打折信息、描述
RiseSdk.getPaymentDatas();

// 获取指定计费点信息，价格单位、价格、打折信息、描述
RiseSdk.getPaymentData(billId);

//调用付费接口 Call Billing Interface
RiseSdk.pay(billId);

//调用付费接口,携带payload信息
RiseSdk.pay2(billId， payload);

```

## 8, Google 相关操作
* 相关回调监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onLoginGoogleEvent, (arg) => {
            
});
```

* 是否登录
`RiseSdk.isGoogleLogin();`

```js
//回调示例
    {
    "event": "onLoginGoogleEvent",  // 事件key， 用于区分不同种类事件，
    "action": "isGoogleLogin",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //当前登录状态，0(已登录)、 1(未登录)
   }
```
     

* 退出登录
`RiseSdk.logoutGoogle();`
```js
//回调示例
    {
    "event": "onLoginGoogleEvent",  // 事件key， 用于区分不同种类事件，
    "action": "logoutGoogle",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //退出登录结果，0(已登出)、 1(未登出)
   }
```

* 静默登录
`RiseSdk.silentLoginGoogle();`
```js
//回调示例
    {
    "event": "onLoginGoogleEvent",  // 事件key， 用于区分不同种类事件，
    "action": "silentLoginGoogle",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //登录结果，0(已登录)、 1(未登登录)
    "googleId": "",                // 登陆成功时携带，用户id
    "email": ""                    // 用户email
   }
```


* 正常登陆
`RiseSdk.loginGoogle();`

```js
//回调结果参考静登陆
```

* 排行榜事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onLeaderBoardEvent, (arg) => {
    //...
    
// 示例
   {
    "event": "onLeaderBoardEvent",  // 事件key， 用于区分不同种类事件，
    "action": "updateGoogleLeaderBoard",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //更新结果，0(已登录)、 1(未登登录)
    "id": "",                // 排行榜单id
   }
    
});
```
* 更新排行榜
`RiseSdk.updateGoogleLeaderBoard(id: string, score: number);`
* 展示指定排行榜(无回调)
`RiseSdk.ShowGoogleLeaderBoard(id: string);`
* 展示所有排行榜(无回调)
`RiseSdk.ShowGoogleLeaderBoards();`


* 成就事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onAchievementEvent, (arg) => {
    //...
// 示例
   {
    "event": "onAchievementEvent",  // 事件key， 用于区分不同种类事件，
    "action": "updateGoogleAchievement",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //更新结果，0(已登录)、 1(未登登录)
    "id": "",                // 成就榜单id
   }
});
```
* 更新成就进度
`RiseSdk.updateGoogleAchievement(id: string, step: number)`
* 展示成就列表(无回调)
`RiseSdk.showGoogleAchievements()`

## 7, SNS facebook相关操作接口
* facebook相关事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onFacebookUserEvent, (arg) => {
    //...
    //登陆回调
   {
    "event": "onFacebookUserEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFacebook",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //登陆结果，0(已登录)、 1(未登登录)
   }
  //是否登陆回调
   {
    "event": "onFacebookUserEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFacebook",     // 操作标签，用于区分不同接口的调用
    "value": 1,                    //登陆结果，0(已登录)、 1(未登登录)
   }
  //用户信息
       {
    "event": "onFacebookUserEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFacebook",     // 操作标签，用于区分不同接口的调用
    "value": ""                    //用户信息
   }
   //朋友列表
       {
    "event": "onFacebookUserEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFacebook",     // 操作标签，用于区分不同接口的调用
    "value": ""                    //朋友列表
   }
});
```
* 登录
`RiseSdk.loginFacebook()`
* 登出(无回调)
`RiseSdk.logoutFacebook()`
* 是否登陆
`RiseSdk.isloginFacebook()`
* 用户信息
`RiseSdk.facebookUserData()`
* 朋友列表
`RiseSdk.facebookFriends()`


## 8, Firestore 云存档
* 云存档相关事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onFirestoreEvent, (arg) => {
    //...
    //登陆登出
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
    "provider": "",                //登陆方式，仅在登陆回调中携带
    "value": 1,                    //登陆结果，0(已登录)、 1(未登登录)
   }
     //上传存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
     "collection": "",                //存档合集id
    "value": "",                // 上传结果，0(成功) 、1(失败)
   }
  //读取存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
    "collection": "",                //存档合集id
    "documentId": 1,                    //文档id
    "data":"{}"                      // 存档内容，根据实际情况解析，如读取失败则返回{}
   }
     //合并存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
     "collection": "",                //存档合集id
    "value": "",                // 合并结果，0(成功) 、1(失败)
   }
     //更新存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
    "collection": "",                //存档合集id
    "transactionId": 1,                    //文档id
    "value": 1                     // 更新结果，0(成功) 、1(失败)
   }
        //删除存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
     "collection": "",                //存档合集id
    "value": "",                // 删除结果，0(成功) 、1(失败)
   }
   //复制存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
    "collection": "",                //存档合集id
    "documentId": 1,                    //文档id
    "value":"{}"                      // 存档内容
   }
     //查询存档
   {
    "event": "onFirestoreEvent",  // 事件key， 用于区分不同种类事件，
    "action": "loginFirestore",     // 操作标签，用于区分不同接口的调用
    "collection": "",                //存档合集id
    "data":"{}"                      // 查询结果，根据实际情况解析，如读取失败则返回{}
   }
});
```
* 登陆
`RiseSdk.loginFirestore(provider: FirestoreProvider);`
* 登出
`RiseSdk.logoutFirestore(provider: FirestoreProvider);`
* 上传存档
`RiseSdk.setFirestore(collection: string, data: string);`

* 读取存档
`RiseSdk.readFirestore(collection: string);`

* 更新存档
`RiseSdk.updateFirestore(collection: string, transactionId: string, data: string);`

* 合并存档
`RiseSdk.mergeFirestore(collection: string, data: string);`

* 复制存档
`RiseSdk.snapshotFirestore(collection: string)`

* 查询存档
`RiseSdk.queryFirestore(collection: string)`

* 删除存档
`RiseSdk.snapshotFirestore(collection: string)`



## 9, Misc 其他
* 相关回调监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onOther, (arg) => {
});
```

* 退出游戏（无回调）
`RiseSdk.exitGame();`
* 缓存 url（无回调）
`RiseSdk.cacheUrl(url: string);`
* 跳转评价（无回调）
`RiseSdk.rate();`
* 原生 toast（无回调）
`RiseSdk.toast(msg:string);`


## default.json 各部分说明
**普通属性**
appid: 应用id
v_api: 此配置版本号
appflyers.devkey: af app id
requireFriends:是否在facebook登陆是拉取朋友列表
enableAfAdPing:是否开启自定义af广告收入统计事件
mixAdEvents：交叉推广事件是否与正式广告事件合并
api.top_user_advalue：用户分层价值事件，不需要修改
push: 自定义应用内消息推送
remoteconfig：key-value格式的预配置字段，在firebase remote config 获取失败时可使用
**广告**
广告类型包括 banner、full(大屏广告)、video(激励视频广告)
内部可配置属性：
    - provider：广告平台，此sdk仅包含Admob
    - p: 广告单元
    - placement: 广告id
**tip:每种广告类型可配置多个广告单元:**
*注：provider值中的 1x、2x 作为广告单元区分，在调用广告时区分广告对象*

```js
  "video": [
    {
      "provider": "admob_1x",
      "p": {
        "placement": "ca-app-pub-1914768831611213/5419657410"
      }
    },
    {
      "provider": "admob_2x",
      "p": {
        "placement": "ca-app-pub-1914768831611213/5419657410"
      }
    }
  ]
```
adLoadTimeout：广告加载自定义超时时间
adRefreshInterval：banner广告自动刷新间隔，单位ms
bannerLoadTimeoutSeconds： banner自定义加载超时时间
**计费**
所有计费点信息配置在 payment 字段结构中
key：用于在计费点购买后的校验支付结果，若留空，则购买后不会校验购买结果，以google billing 返回状态为最终购买结果
checkout：计费点信息列表，示例：

```js
//说明：
// billId：即每个计费点对应的序号，如 1，2；在程序中传递此序号用以支付对应计费点
// feename：google billing 后台创建的计费点名称
// repeat： 若值为 1 则为消耗型计费点；0 则为订阅型计费点
// usd：计费点价格
     "1": {
        "feename": "25coins",
        "repeat": 1,
        "usd": 1.99
      },
      "2": {
        "feename": "70coins",
        "repeat": 1,
        "usd": 4.99
      }
```

**转化事件**
gen_events、summery_events 内配置用作app转化标记事件，可不修改


**通过firebase remote config 下发配置**
1. 整体下发
    * 将default.json内容作为字段 config_grid_data_android 的值配置
2. 仅下发Banner配置
    * 将banner配置作为字段 ad_config_banner 的值配置
    示例：
    
```js
{
    "ads":[
        {
          "provider": "admob",
          "p": {
            "placement": "ca-app-pub-1914768831611213/4106575741"
          }
        }
    ],
    "adRefreshInterval": 1800
}
```
3. 仅下发大屏广告配置
    * 将大屏广告配置作为字段 ad_config_full 的值配置
    示例：
    
```js
{
    "ads":[
        {
          "provider": "admob",
          "p": {
            "placement": "ca-app-pub-1914768831611213/2402557932"
          }
        }
    ]
}
```
4. 仅下发激励视频广告配置
    * 将激励视频广告配置作为字段 ad_config_video 的值配置
    
```js
{
    "ads":[
         {
          "provider": "admob",
          "p": {
            "placement": "ca-app-pub-1914768831611213/5419657410"
          }
        }
    ]
}
```