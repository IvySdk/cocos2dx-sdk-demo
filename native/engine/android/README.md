# RiseSDK for CocosCreator

# 前言
**状态值为bool类型时， True 使用 0 代替， false 使用 1 代替**

## 1, Add dependencies 添加引用
完全复制Plugins文件夹到你的Unity工程Assets目录下
Copy the folder named Plugins into your Unity3D project Assets folder
![Copy](assets/risesdk-unity-8c095.png)

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
});
```

结果示例：

```js
{
    "event": "onAdEvent",
    "action": "showFullAd",
    "tag": "default",
    "id": 1,
    "value":""
}
```
event： 对应事件key
action：对应操作的标签，用于区分不同操作的返回值
tag:    广告标签，用于区分广告， 默认为 default
id：    使用激励视频时用于标记奖励
value:  
a. 判断类action, ex: `RiseSdk.hasRewardedAd()`，则返回 0       （true）、1（false）
b. 广告事件：AdShown、AdShowFails、AdClicked、AdClosed、AdReward

- 插屏
  `RiseSdk.showFullAd(tag?: string)`
- 激励视频
  `RiseSdk.showRewardedAd(id: number, tag?: string)`
  `RiseSdk.hasRewardedAd()`
- Banner
  `RiseSdk.showBannerAd(position: BannerAdPosition)`
  `RiseSdk.closeBannerAd()`
  支持的Banner Position

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
结果 示例：
```js
{
    "event": "onRemoteConfig",
    "action": "RemoteConfigInt",
    "key": key,
    "value": 1
}
```


## 6, In-App billing 应用中内付费
* 计费相关回调
```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentEvent, (arg) => {
    //billing 事件回调
=});

```
```js
//检测计费系统可用性
RiseSdk.IsPaymentSystemValid();

//检测计费点可用性，如billId为-1，则消耗所有未发货订单
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
* 退出登录
  `RiseSdk.isGoogleLogin();`

* 静默登录
  `RiseSdk.silentLoginGoogle();`

* 正常登陆
  `RiseSdk.loginGoogle();`


* 排行榜事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onLeaderBoardEvent, (arg) => {
});
```
* 更新排行榜
  `RiseSdk.updateGoogleLeaderBoard(id: string, score: number);`
* 展示指定排行榜
  `RiseSdk.ShowGoogleLeaderBoard(id: string);`
* 展示所有排行榜
  `RiseSdk.ShowGoogleLeaderBoards();`


* 成就事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onAchievementEvent, (arg) => {
});
```
* 更新成就进度
  `RiseSdk.updateGoogleAchievement(id: string, step: number)`
* 展示成就列表
  `RiseSdk.showGoogleAchievements()`

## 7, SNS facebook相关操作接口
* facebook相关事件监听

```js
native.jsbBridgeWrapper.addNativeEventListener(Events.onFacebookUserEvent, (arg) => {
});
```
* 登录
  `RiseSdk.loginFacebook()`
* 登出
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

* 退出游戏
  `RiseSdk.exitGame();`
* 缓存 url
  `RiseSdk.cacheUrl(url: string);`
* 跳转评价
  `RiseSdk.rate();`
* 原生 toast
  `RiseSdk.toast(msg:string);`



