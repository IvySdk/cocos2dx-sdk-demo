System.register("chunks:///_virtual/Demo.ts", ['cc', './RiseSdk.ts'], function (exports) {
  'use strict';

  var cclegacy, Component, Button, _decorator, RiseSdk;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Button = module.Button;
      _decorator = module._decorator;
    }, function (module) {
      RiseSdk = module.RiseSdk;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "619a9umEhpJdpOX6i/uWaLw", "Demo", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let Demo = exports('Demo', (_dec = ccclass("Demo"), _dec(_class = class Demo extends Component {
        onLoad() {
          RiseSdk.init();
        }

        start() {
          this.node.getChildByName("showFull").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.showFullAd();
          }, this);
          this.node.getChildByName("showRewardedAd").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.showRewardedAd(1);
          }, this);
          this.node.getChildByName("hasRewardedAd").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.hasRewardedAd();
          }, this);
          this.node.getChildByName("showBannerAd").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.showBannerAd(RiseSdk.BannerAdPosition.POS_BANNER_MIDDLE_BOTTOM);
          }, this);
          this.node.getChildByName("closeBannerAd").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.closeBannerAd();
          }, this);
          this.node.getChildByName("pay").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.pay(1);
          }, this);
          this.node.getChildByName("query").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.query(1);
          }, this);
          this.node.getChildByName("PurchaseHistory").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.getPurchaseHistory(RiseSdk.SkuType.INAPP);
          }, this);
          this.node.getChildByName("PaymentDataAsyn").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.getPaymentDataAsyn(1);
          }, this);
          this.node.getChildByName("PaymentData").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.getPaymentData(1);
          }, this);
          this.node.getChildByName("silentLoginGoogle").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.silentLoginGoogle();
          }, this);
          this.node.getChildByName("loginGoogle").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.loginGoogle();
          }, this);
          this.node.getChildByName("updateGoogleLeaderBoard").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.updateGoogleLeaderBoard("leaderboard", 1000);
          }, this);
          this.node.getChildByName("ShowGoogleLeaderBoards").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.ShowGoogleLeaderBoards();
          }, this);
          this.node.getChildByName("updateGoogleAchievement").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.updateGoogleAchievement("Achievement", 2);
          }, this);
          this.node.getChildByName("showGoogleAchievements").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.showGoogleAchievements();
          }, this);
          this.node.getChildByName("loginFacebook").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.loginFacebook();
          }, this);
          this.node.getChildByName("logoutFacebook").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.logoutFacebook();
          }, this);
          this.node.getChildByName("isloginFacebook").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.isloginFacebook();
          }, this);
          this.node.getChildByName("facebookUserData").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.facebookUserData();
          }, this);
          this.node.getChildByName("facebookFriends").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.facebookFriends();
          }, this);
          this.node.getChildByName("loginFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.loginFirestore(RiseSdk.FirestoreProvider.anonymously);
          }, this);
          this.node.getChildByName("logoutFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.logoutFirestore();
          }, this);
          this.node.getChildByName("setFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.setFirestore("collection", "{}");
          }, this);
          this.node.getChildByName("readFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.readFirestore("collection");
          }, this);
          this.node.getChildByName("updateFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.updateFirestore("collection", "transactionId", "{}");
          }, this);
          this.node.getChildByName("mergeFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.mergeFirestore("collection", "{}");
          }, this);
          this.node.getChildByName("snapshotFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.snapshotFirestore("collection");
          }, this);
          this.node.getChildByName("queryFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.queryFirestore("collection");
          }, this);
          this.node.getChildByName("deleteFirestore").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.deleteFirestore("collection");
          }, this);
          this.node.getChildByName("RemoteConfigInt").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.getRemoteConfigInt("key");
          }, this);
          this.node.getChildByName("rate").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.rate();
          }, this);
        }

        onBtn() {}

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Demo.ts', './RiseSdk.ts'], function () {
  'use strict';

  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RiseSdk.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, native;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
    }],
    execute: function () {
      exports('RiseSdk', void 0);

      cclegacy._RF.push({}, "b82afzf2BdDDJS3d543pRld", "RiseSdk", undefined);

      let RiseSdk;

      (function (_RiseSdk) {
        let Events;

        (function (_Events) {
          const initializedEvent = _Events.initializedEvent = "initializedEvent";
          const onInitialized = _Events.onInitialized = "onInitialized";
          const onReceiveServerExtra = _Events.onReceiveServerExtra = "onReceiveServerExtra";
          const onPaymentSystemEvent = _Events.onPaymentSystemEvent = "onPaymentSystem";
          const onPaymentEvent = _Events.onPaymentEvent = "onPaymentEvent";
          const onPaymentData = _Events.onPaymentData = "onPaymentData";
          const onLoginGoogleEvent = _Events.onLoginGoogleEvent = "onLoginGoogle";
          const onLeaderBoardEvent = _Events.onLeaderBoardEvent = "onUpdateLeaderBoard";
          const onAchievementEvent = _Events.onAchievementEvent = "onUpdateAchievement";
          const onFacebookUserEvent = _Events.onFacebookUserEvent = "onFacebookUserEvent";
          const onFirestoreEvent = _Events.onFirestoreEvent = "onFirestoreEvent";
          const onAdEvent = _Events.onAdEvent = "onAdEvent";
          const onTrackEvent = _Events.onTrackEvent = "onTrackEvent";
          const onRemoteConfig = _Events.onRemoteConfig = "onRemoteConfig";
          const onOther = _Events.onOther = "onOther";
        })(Events || (Events = _RiseSdk.Events || (_RiseSdk.Events = {})));

        let Logger;

        (function (_Logger) {
          function setLogLevel(level) {
            this.LOG_LEVEL = level;
          }

          _Logger.setLogLevel = setLogLevel;

          function debug(param) {
            if (this.LOG_LEVEL >= 4) {
              console.debug("RiseSDK:", param);
            }
          }

          _Logger.debug = debug;

          function info(param) {
            if (this.LOG_LEVEL >= 3) {
              console.info("RiseSDK:", param);
            }
          }

          _Logger.info = info;

          function warn(param) {
            if (this.LOG_LEVEL >= 2) {
              console.warn("RiseSDK:", param);
            }
          }

          _Logger.warn = warn;

          function error(param) {
            if (this.LOG_LEVEL >= 1) {
              console.error("RiseSDK:", param);
            }
          }

          _Logger.error = error;
        })(Logger || (Logger = {}));

        let IsPaymentValid = false;

        function setLogLevel(level) {
          Logger.setLogLevel(level);
        }

        _RiseSdk.setLogLevel = setLogLevel;

        function init() {
          native.jsbBridgeWrapper.addNativeEventListener(Events.onInitialized, arg => {
            Logger.debug("sdk initialized");
            toast("native event: sdk initialized");
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onReceiveServerExtra, arg => {
            Logger.debug("remote config data updated");
            toast("native event: remote config updated");
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentSystemEvent, arg => {
            Logger.debug("payment system event");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentEvent, arg => {
            Logger.debug("payment events");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onLoginGoogleEvent, arg => {
            Logger.debug("login google");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onLeaderBoardEvent, arg => {
            Logger.debug("leader board");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onAchievementEvent, arg => {
            Logger.debug("achievement");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onFacebookUserEvent, arg => {
            Logger.debug("facebook user");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onFirestoreEvent, arg => {
            Logger.debug("firestore");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.addNativeEventListener(Events.onAdEvent, arg => {
            Logger.debug("adEvent");
            toast("native event:" + JSON.stringify(arg));
          });
          native.jsbBridgeWrapper.dispatchEventToNative(Events.initializedEvent);
        }

        _RiseSdk.init = init;

        function destroy() {
          native.jsbBridgeWrapper.removeAllListeners();
          Logger.debug("destroy RiseSdk listeners");
        }

        _RiseSdk.destroy = destroy;

        function removeListener(event) {
          native.jsbBridgeWrapper.removeAllListenersForEvent(event);
        }

        _RiseSdk.removeListener = removeListener;

        function sendToNativeEvent(event, arg) {
          native.jsbBridgeWrapper.dispatchEventToNative(event, arg);
          Logger.debug("send to native:" + arg);
        }

        _RiseSdk.sendToNativeEvent = sendToNativeEvent;
        let BannerAdPosition;

        (function (BannerAdPosition) {
          BannerAdPosition[BannerAdPosition["POS_BANNER_LEFT_TOP"] = 1] = "POS_BANNER_LEFT_TOP";
          BannerAdPosition[BannerAdPosition["POS_BANNER_LEFT_BOTTOM"] = 2] = "POS_BANNER_LEFT_BOTTOM";
          BannerAdPosition[BannerAdPosition["POS_BANNER_MIDDLE_TOP"] = 3] = "POS_BANNER_MIDDLE_TOP";
          BannerAdPosition[BannerAdPosition["POS_BANNER_MIDDLE_BOTTOM"] = 4] = "POS_BANNER_MIDDLE_BOTTOM";
          BannerAdPosition[BannerAdPosition["POS_BANNER_MIDDLE_MIDDLE"] = 5] = "POS_BANNER_MIDDLE_MIDDLE";
          BannerAdPosition[BannerAdPosition["POS_BANNER_RIGHT_TOP"] = 6] = "POS_BANNER_RIGHT_TOP";
          BannerAdPosition[BannerAdPosition["POS_BANNER_RIGHT_BOTTOM"] = 7] = "POS_BANNER_RIGHT_BOTTOM";
        })(BannerAdPosition || (BannerAdPosition = {}));

        _RiseSdk.BannerAdPosition = BannerAdPosition;

        function showFullAd(tag) {
          let obj = {
            event: Events.onAdEvent,
            action: "showFullAd",
            tag: tag === null ? "default" : tag
          };
          sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
        }

        _RiseSdk.showFullAd = showFullAd;

        function showRewardedAd(id, tag) {
          let obj = {
            event: Events.onAdEvent,
            action: "showRewardedAd",
            id: id,
            tag: tag === null ? "default" : tag
          };
          sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
        }

        _RiseSdk.showRewardedAd = showRewardedAd;

        function hasRewardedAd() {
          let obj = {
            event: Events.onAdEvent,
            action: "hasRewardedAd"
          };
          sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
        }

        _RiseSdk.hasRewardedAd = hasRewardedAd;

        function showBannerAd(position) {
          let obj = {
            event: Events.onAdEvent,
            action: "showBannerAd",
            position: position
          };
          sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
        }

        _RiseSdk.showBannerAd = showBannerAd;

        function closeBannerAd() {
          let obj = {
            event: Events.onAdEvent,
            action: "closeBannerAd"
          };
          sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
        }

        _RiseSdk.closeBannerAd = closeBannerAd;
        let SkuType;

        (function (SkuType) {
          SkuType["INAPP"] = "inapp";
          SkuType["SUBS"] = "subs";
        })(SkuType || (SkuType = {}));

        _RiseSdk.SkuType = SkuType;

        function IsPaymentSystemValid() {
          return IsPaymentValid;
        }

        _RiseSdk.IsPaymentSystemValid = IsPaymentSystemValid;

        function pay(billId) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "pay",
            billId: billId
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.pay = pay;

        function pay2(billId, payload) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "pay",
            billId: billId,
            payload: payload
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.pay2 = pay2;

        function query(billId) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "query",
            billId: billId
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.query = query;

        function getPurchaseHistory(skuType) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "PurchaseHistory",
            skuType: skuType
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.getPurchaseHistory = getPurchaseHistory;

        function getPaymentDataAsyn(billId) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentDataAsyn",
            billId: billId
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.getPaymentDataAsyn = getPaymentDataAsyn;

        function getPaymentData(billId) {
          let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentData",
            billId: billId
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.getPaymentData = getPaymentData;

        function getPaymentDatas() {
          let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentDatas"
          };
          sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
        }

        _RiseSdk.getPaymentDatas = getPaymentDatas;

        function trackEvent(category, action, label, value) {
          let obj = {
            event: Events.onTrackEvent,
            type: 1,
            category: category,
            action: action,
            label: label,
            value: value
          };
          sendToNativeEvent(Events.onTrackEvent, JSON.stringify(obj));
        }

        _RiseSdk.trackEvent = trackEvent;

        function trackEvent2(event, data) {
          let obj = {
            event: Events.onTrackEvent,
            type: 2,
            eventName: event,
            data: data
          };
          sendToNativeEvent(Events.onTrackEvent, JSON.stringify(obj));
        }

        _RiseSdk.trackEvent2 = trackEvent2;

        function silentLoginGoogle() {
          let obj = {
            event: Events.onLoginGoogleEvent,
            action: "silentLoginGoogle"
          };
          sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
        }

        _RiseSdk.silentLoginGoogle = silentLoginGoogle;

        function loginGoogle() {
          let obj = {
            event: Events.onLoginGoogleEvent,
            action: "loginGoogle"
          };
          sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
        }

        _RiseSdk.loginGoogle = loginGoogle;

        function isGoogleLogin() {
          let obj = {
            event: Events.onLoginGoogleEvent,
            action: "isGoogleLogin"
          };
          sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
        }

        _RiseSdk.isGoogleLogin = isGoogleLogin;

        function logoutGoogle() {
          let obj = {
            event: Events.onLoginGoogleEvent,
            action: "logoutGoogle"
          };
          sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
        }

        _RiseSdk.logoutGoogle = logoutGoogle;

        function updateGoogleLeaderBoard(id, score) {
          let obj = {
            event: Events.onLeaderBoardEvent,
            action: "updateGoogleLeaderBoard",
            id: id,
            score: score
          };
          sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
        }

        _RiseSdk.updateGoogleLeaderBoard = updateGoogleLeaderBoard;

        function ShowGoogleLeaderBoard(id) {
          let obj = {
            event: Events.onLeaderBoardEvent,
            action: "ShowGoogleLeaderBoard",
            id: id
          };
          sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
        }

        _RiseSdk.ShowGoogleLeaderBoard = ShowGoogleLeaderBoard;

        function ShowGoogleLeaderBoards() {
          let obj = {
            event: Events.onLeaderBoardEvent,
            action: "ShowGoogleLeaderBoards"
          };
          sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
        }

        _RiseSdk.ShowGoogleLeaderBoards = ShowGoogleLeaderBoards;

        function updateGoogleAchievement(id, step) {
          let obj = {
            event: Events.onAchievementEvent,
            action: "updateGoogleAchievement",
            id: id,
            step: step
          };
          sendToNativeEvent(Events.onAchievementEvent, JSON.stringify(obj));
        }

        _RiseSdk.updateGoogleAchievement = updateGoogleAchievement;

        function showGoogleAchievements() {
          let obj = {
            event: Events.onAchievementEvent,
            action: "showGoogleAchievements"
          };
          sendToNativeEvent(Events.onAchievementEvent, JSON.stringify(obj));
        }

        _RiseSdk.showGoogleAchievements = showGoogleAchievements;

        function loginFacebook() {
          let obj = {
            event: Events.onFacebookUserEvent,
            action: "loginFacebook"
          };
          sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
        }

        _RiseSdk.loginFacebook = loginFacebook;

        function logoutFacebook() {
          let obj = {
            event: Events.onFacebookUserEvent,
            action: "logoutFacebook"
          };
          sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
        }

        _RiseSdk.logoutFacebook = logoutFacebook;

        function isloginFacebook() {
          let obj = {
            event: Events.onFacebookUserEvent,
            action: "isloginFacebook"
          };
          sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
        }

        _RiseSdk.isloginFacebook = isloginFacebook;

        function facebookUserData() {
          let obj = {
            event: Events.onFacebookUserEvent,
            action: "facebookUserData"
          };
          sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
        }

        _RiseSdk.facebookUserData = facebookUserData;

        function facebookFriends() {
          let obj = {
            event: Events.onFacebookUserEvent,
            action: "facebookFriends"
          };
          sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
        }

        _RiseSdk.facebookFriends = facebookFriends;
        let FirestoreProvider;

        (function (FirestoreProvider) {
          FirestoreProvider["play"] = "play";
          FirestoreProvider["anonymously"] = "anonymously";
          FirestoreProvider["facebook"] = "facebook";
        })(FirestoreProvider || (FirestoreProvider = {}));

        _RiseSdk.FirestoreProvider = FirestoreProvider;

        function loginFirestore(provider) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "loginFirestore",
            provider: provider
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.loginFirestore = loginFirestore;

        function logoutFirestore() {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "logoutFirestore"
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.logoutFirestore = logoutFirestore;

        function setFirestore(collection, data) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "setFirestore",
            collection: collection,
            data: data
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.setFirestore = setFirestore;

        function readFirestore(collection) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "readFirestore",
            collection: collection
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.readFirestore = readFirestore;

        function readFirestore2(collection, documentId) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "readFirestore",
            collection: collection,
            documentId: documentId
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.readFirestore2 = readFirestore2;

        function updateFirestore(collection, transactionId, data) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "updateFirestore",
            collection: collection,
            transactionId: transactionId,
            data: data
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.updateFirestore = updateFirestore;

        function mergeFirestore(collection, data) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "mergeFirestore",
            collection: collection,
            data: data
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.mergeFirestore = mergeFirestore;

        function snapshotFirestore(collection) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "snapshotFirestore",
            collection: collection
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.snapshotFirestore = snapshotFirestore;

        function snapshotFirestore2(collection, documentId) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "snapshotFirestore",
            collection: collection,
            documentId: documentId
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.snapshotFirestore2 = snapshotFirestore2;

        function queryFirestore(collection) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "queryFirestore",
            collection: collection
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.queryFirestore = queryFirestore;

        function deleteFirestore(collection) {
          let obj = {
            event: Events.onFirestoreEvent,
            action: "deleteFirestore",
            collection: collection
          };
          sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
        }

        _RiseSdk.deleteFirestore = deleteFirestore;

        function getRemoteConfigInt(key) {
          let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigInt",
            key: key
          };
          sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
        }

        _RiseSdk.getRemoteConfigInt = getRemoteConfigInt;

        function getRemoteConfigLong(key) {
          let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigLong",
            key: key
          };
          sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
        }

        _RiseSdk.getRemoteConfigLong = getRemoteConfigLong;

        function getRemoteConfigDouble(key) {
          let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigDouble",
            key: key
          };
          sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
        }

        _RiseSdk.getRemoteConfigDouble = getRemoteConfigDouble;

        function getRemoteConfigBoolean(key) {
          let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigBoolean",
            key: key
          };
          sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
        }

        _RiseSdk.getRemoteConfigBoolean = getRemoteConfigBoolean;

        function getRemoteConfigString(key) {
          let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigString",
            key: key
          };
          sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
        }

        _RiseSdk.getRemoteConfigString = getRemoteConfigString;

        function cacheUrl(url) {
          let obj = {
            event: Events.onOther,
            action: "cacheurl",
            url: url
          };
          sendToNativeEvent(Events.onOther, JSON.stringify(obj));
        }

        _RiseSdk.cacheUrl = cacheUrl;

        function share() {
          let obj = {
            event: Events.onOther,
            action: "share"
          };
          sendToNativeEvent(Events.onOther, JSON.stringify(obj));
        }

        _RiseSdk.share = share;

        function rate(star) {
          let obj = {
            event: Events.onOther,
            action: "rate",
            star: star == null ? 5 : star
          };
          sendToNativeEvent(Events.onOther, JSON.stringify(obj));
        }

        _RiseSdk.rate = rate;

        function toast(msg) {
          let obj = {
            event: Events.onOther,
            action: "toast",
            msg: msg
          };
          sendToNativeEvent(Events.onOther, JSON.stringify(obj));
        }

        _RiseSdk.toast = toast;

        function exitGame() {
          let obj = {
            event: Events.onOther,
            action: "exitGame"
          };
          sendToNativeEvent(Events.onOther, JSON.stringify(obj));
        }

        _RiseSdk.exitGame = exitGame;
      })(RiseSdk || (RiseSdk = exports('RiseSdk', {})));

      cclegacy._RF.pop();
    }
  };
});
