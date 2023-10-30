import { _decorator, Button, Component, Label, log, native, Node } from 'cc';
const { ccclass, property } = _decorator;

import { RiseSdk } from './riseSdk/RiseSdk'


@ccclass("Demo")
export class Demo extends Component {

    protected onLoad(): void {
        console.log("on demo load");
        RiseSdk.init();
    }

    protected start(): void {

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
        this.node.getChildByName("isGoogleLogin").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.isGoogleLogin();
        }, this);
        this.node.getChildByName("logoutGoogle").getComponent(Button).node.on(Button.EventType.CLICK, () => {
            RiseSdk.logoutGoogle();
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

    protected onDestroy(): void {
        RiseSdk.destroy();
    }

}