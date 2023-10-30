import { _decorator, Component, log, native, Node } from 'cc';
const { ccclass, property } = _decorator;


export namespace RiseSdk {

    export namespace Events {

        // 初始化
        export const initializedEvent = "initializedEvent";
        //sdk初始化回调
        export const onInitialized = "onInitialized";
        //sdk拉取 remote config 成功
        export const onReceiveServerExtra = "onReceiveServerExtra";
        //支付系统事件
        export const onPaymentSystemEvent = "onPaymentSystem";
        //支付结果事件
        export const onPaymentEvent = "onPaymentEvent";
        //支付信息
        export const onPaymentData = "onPaymentData";
        //google 登陆
        export const onLoginGoogleEvent = "onLoginGoogle";

        //排行榜
        export const onLeaderBoardEvent = "onUpdateLeaderBoard";
        //成就
        export const onAchievementEvent = "onUpdateAchievement";
        //fb
        export const onFacebookUserEvent = "onFacebookUserEvent";
        //firestore
        export const onFirestoreEvent = "onFirestoreEvent";
        //广告
        export const onAdEvent = "onAdEvent";
        //事件
        export const onTrackEvent = "onTrackEvent";
        //remote config
        export const onRemoteConfig = "onRemoteConfig";
        //其它
        export const onOther = "onOther";
    }

    namespace Logger {

        let LOG_LEVEL = 4;

        export function setLogLevel(level: number) {
            this.LOG_LEVEL = level;
        }

        export function debug(param: string) {
            if (this.LOG_LEVEL >= 4) {
                console.log("debug: RiseSdk:", param);
            }
        }
        export function info(param: string) {
            if (this.LOG_LEVEL >= 3) {
                console.log("info: RiseSdk:", param);
            }
        }
        export function warn(param: string) {
            if (this.LOG_LEVEL >= 2) {
                console.log("warn: RiseSdk:", param);
            }
        }
        export function error(param: string) {
            if (this.LOG_LEVEL >= 1) {
                console.log("error: RiseSdk:", param);
            }
        }
    }


    let IsPaymentValid = false;

    export function setLogLevel(level: number) {
        Logger.setLogLevel(level);
    }

    export function init() {
        native.jsbBridgeWrapper.addNativeEventListener(Events.onInitialized, (arg) => {
            Logger.debug("sdk initialized");
            toast("native event: sdk initialized");
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onReceiveServerExtra, (arg) => {
            Logger.debug("remote config data updated");
            toast("native event: remote config updated");
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentSystemEvent, (arg) => {
            Logger.debug("payment system event");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onPaymentEvent, (arg) => {
            Logger.debug("payment events");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onLoginGoogleEvent, (arg) => {
            Logger.debug("login google");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onLeaderBoardEvent, (arg) => {
            Logger.debug("leader board");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onAchievementEvent, (arg) => {
            Logger.debug("achievement");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onFacebookUserEvent, (arg) => {
            Logger.debug("facebook user");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onFirestoreEvent, (arg) => {
            Logger.debug("firestore");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onAdEvent, (arg) => {
            Logger.debug("adEvent");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onRemoteConfig, (arg) => {
            Logger.debug("adEvent");
            toast("native event:" + JSON.stringify(arg));
        });
        native.jsbBridgeWrapper.addNativeEventListener(Events.onOther, (arg) => {
            Logger.debug("adEvent");
            toast("native event:" + JSON.stringify(arg));
        });
        sendToNativeEvent(Events.initializedEvent);
    }

    export function destroy() {
        native.jsbBridgeWrapper.removeAllListeners();
        Logger.debug("destroy RiseSdk listeners");
    }

    export function removeListener(event: string) {
        native.jsbBridgeWrapper.removeAllListenersForEvent(event);
    }

    export function sendToNativeEvent(event: string, arg?: string) {
        Logger.error("send to native:" + arg);
        native.jsbBridgeWrapper.dispatchEventToNative(event, arg);
    }


    //#region 广告

    export enum BannerAdPosition {
        POS_BANNER_LEFT_TOP = 1,
        POS_BANNER_LEFT_BOTTOM = 2,
        POS_BANNER_MIDDLE_TOP = 3,
        POS_BANNER_MIDDLE_BOTTOM = 4,
        POS_BANNER_MIDDLE_MIDDLE = 5,
        POS_BANNER_RIGHT_TOP = 6,
        POS_BANNER_RIGHT_BOTTOM = 7,
    }
    export function showFullAd(tag?: string) {
        let obj = {
            event: Events.onAdEvent,
            action: "showFullAd",
            tag: (tag === null ? "default" : tag)
        }
        sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
    }

    export function showRewardedAd(id: number, tag?: string) {
        let obj = {
            event: Events.onAdEvent,
            action: "showRewardedAd",
            id: id,
            tag: (tag === null ? "default" : tag)
        }
        sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
    }

    export function hasRewardedAd() {
        let obj = {
            event: Events.onAdEvent,
            action: "hasRewardedAd"
        }
        sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
    }

    export function showBannerAd(position: BannerAdPosition) {
        let obj = {
            event: Events.onAdEvent,
            action: "showBannerAd",
            position: position
        }
        sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
    }

    export function closeBannerAd() {
        let obj = {
            event: Events.onAdEvent,
            action: "closeBannerAd"
        }
        sendToNativeEvent(Events.onAdEvent, JSON.stringify(obj));
    }

    //#endregion

    //#region  计费
    export enum SkuType {
        INAPP = "inapp",
        SUBS = "subs"
    }

    export function IsPaymentSystemValid(): boolean { return IsPaymentValid; };

    export function pay(billId: number) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "pay",
            billId: billId
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function pay2(billId: number, payload: string) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "pay",
            billId: billId,
            payload: payload
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function query(billId: number) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "query",
            billId: billId
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function getPurchaseHistory(skuType: SkuType) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "PurchaseHistory",
            skuType: skuType
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function getPaymentDataAsyn(billId: number) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentDataAsyn",
            billId: billId
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function getPaymentData(billId: number) {
        let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentData",
            billId: billId
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    export function getPaymentDatas() {
        let obj = {
            event: Events.onPaymentEvent,
            action: "PaymentDatas"
        }
        sendToNativeEvent(Events.onPaymentEvent, JSON.stringify(obj));
    }

    //#endregion

    //#region  事件
    export function trackEvent(category: string, action: string, label: string, value: number) {
        let obj = {
            event: Events.onTrackEvent,
            type: 1,
            category: category,
            action: action,
            label: label,
            value: value,
        }
        sendToNativeEvent(Events.onTrackEvent, JSON.stringify(obj));
    }

    export function trackEvent2(event: string, data: string) {
        let obj = {
            event: Events.onTrackEvent,
            type: 2,
            eventName: event,
            data: data
        }
        sendToNativeEvent(Events.onTrackEvent, JSON.stringify(obj));
    }

    export function setUserProperty(key: string, value: string) {
        let obj = {
            event: Events.onTrackEvent,
            action: "UserProperty",
            key: key,
            value: value
        }
        sendToNativeEvent(Events.onTrackEvent, JSON.stringify(obj));
    }
    //#endregion


    //#region Google 登录
    export function silentLoginGoogle() {
        let obj = {
            event: Events.onLoginGoogleEvent,
            action: "silentLoginGoogle"
        }
        sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
    }

    export function loginGoogle() {
        let obj = {
            event: Events.onLoginGoogleEvent,
            action: "loginGoogle"
        }
        sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
    }

    export function isGoogleLogin() {
        let obj = {
            event: Events.onLoginGoogleEvent,
            action: "isGoogleLogin"
        }
        sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
    }

    export function logoutGoogle() {
        let obj = {
            event: Events.onLoginGoogleEvent,
            action: "logoutGoogle"
        }
        sendToNativeEvent(Events.onLoginGoogleEvent, JSON.stringify(obj));
    }

    //#endregion

    //#region  排行榜
    export function updateGoogleLeaderBoard(id: string, score: number) {
        let obj = {
            event: Events.onLeaderBoardEvent,
            action: "updateGoogleLeaderBoard",
            id: id,
            score: score
        }
        sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
    }

    export function ShowGoogleLeaderBoard(id: string) {
        let obj = {
            event: Events.onLeaderBoardEvent,
            action: "ShowGoogleLeaderBoard",
            id: id,
        }
        sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
    }

    export function ShowGoogleLeaderBoards() {
        let obj = {
            event: Events.onLeaderBoardEvent,
            action: "ShowGoogleLeaderBoards"
        }
        sendToNativeEvent(Events.onLeaderBoardEvent, JSON.stringify(obj));
    }
    //#endregion

    //#region  成就
    export function updateGoogleAchievement(id: string, step: number) {
        let obj = {
            event: Events.onAchievementEvent,
            action: "updateGoogleAchievement",
            id: id,
            step: step
        }
        sendToNativeEvent(Events.onAchievementEvent, JSON.stringify(obj));
    }

    export function showGoogleAchievements() {
        let obj = {
            event: Events.onAchievementEvent,
            action: "showGoogleAchievements"
        }
        sendToNativeEvent(Events.onAchievementEvent, JSON.stringify(obj));
    }
    //#endregion

    //#region  Facebook 登陆
    export function loginFacebook() {
        let obj = {
            event: Events.onFacebookUserEvent,
            action: "loginFacebook"
        }
        sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
    }

    export function logoutFacebook() {
        let obj = {
            event: Events.onFacebookUserEvent,
            action: "logoutFacebook"
        }
        sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
    }

    export function isloginFacebook() {
        let obj = {
            event: Events.onFacebookUserEvent,
            action: "isloginFacebook"
        }
        sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
    }

    export function facebookUserData() {
        let obj = {
            event: Events.onFacebookUserEvent,
            action: "facebookUserData"
        }
        sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
    }

    export function facebookFriends() {
        let obj = {
            event: Events.onFacebookUserEvent,
            action: "facebookFriends"
        }
        sendToNativeEvent(Events.onFacebookUserEvent, JSON.stringify(obj));
    }

    //#endregion


    //#region Firestore
    export enum FirestoreProvider {
        play = "play",
        anonymously = "anonymously",
        facebook = "facebook"
    }
    export function loginFirestore(provider: FirestoreProvider) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "loginFirestore",
            provider: provider
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function logoutFirestore() {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "logoutFirestore"
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function setFirestore(collection: string, data: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "setFirestore",
            collection: collection,
            data: data
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function readFirestore(collection: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "readFirestore",
            collection: collection
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function readFirestore2(collection: string, documentId: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "readFirestore",
            collection: collection,
            documentId: documentId
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function updateFirestore(collection: string, transactionId: string, data: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "updateFirestore",
            collection: collection,
            transactionId: transactionId,
            data: data
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function mergeFirestore(collection: string, data: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "mergeFirestore",
            collection: collection,
            data: data
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function snapshotFirestore(collection: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "snapshotFirestore",
            collection: collection
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function snapshotFirestore2(collection: string, documentId: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "snapshotFirestore",
            collection: collection,
            documentId: documentId
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function queryFirestore(collection: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "queryFirestore",
            collection: collection
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    export function deleteFirestore(collection: string) {
        let obj = {
            event: Events.onFirestoreEvent,
            action: "deleteFirestore",
            collection: collection
        }
        sendToNativeEvent(Events.onFirestoreEvent, JSON.stringify(obj));
    }

    //#endregion

    //#region Remote Config
    export function getRemoteConfigInt(key: string) {
        let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigInt",
            key: key
        }
        sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
    }

    export function getRemoteConfigLong(key: string) {
        let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigLong",
            key: key
        }
        sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
    }

    export function getRemoteConfigDouble(key: string) {
        let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigDouble",
            key: key
        }
        sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
    }

    export function getRemoteConfigBoolean(key: string) {
        let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigBoolean",
            key: key
        }
        sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
    }

    export function getRemoteConfigString(key: string) {
        let obj = {
            event: Events.onRemoteConfig,
            action: "RemoteConfigString",
            key: key
        }
        sendToNativeEvent(Events.onRemoteConfig, JSON.stringify(obj));
    }

    //#endregion

    //#region 其它

    export function cacheUrl(url: string) {
        let obj = {
            event: Events.onOther,
            action: "cacheurl",
            url: url
        }
        sendToNativeEvent(Events.onOther, JSON.stringify(obj));
    }

    export function share() {
        let obj = {
            event: Events.onOther,
            action: "share"
        }
        sendToNativeEvent(Events.onOther, JSON.stringify(obj));
    }

    export function rate(star?: number) {
        let obj = {
            event: Events.onOther,
            action: "rate",
            star: (star == null ? 5 : star)
        }
        sendToNativeEvent(Events.onOther, JSON.stringify(obj));
    }

    export function toast(msg: string) {
        let obj = {
            event: Events.onOther,
            action: "toast",
            msg: msg
        }
        sendToNativeEvent(Events.onOther, JSON.stringify(obj));
    }

    export function exitGame() {
        let obj = {
            event: Events.onOther,
            action: "exitGame"
        }
        sendToNativeEvent(Events.onOther, JSON.stringify(obj));
    }
    //#endregion


}