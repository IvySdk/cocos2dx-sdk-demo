# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in E:\developSoftware\Android\SDK/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Proguard Cocos2d-x-lite for release
-keep public class com.cocos.** { *; }
-dontwarn com.cocos.**

# Proguard Apache HTTP for release
-keep class org.apache.http.** { *; }
-dontwarn org.apache.http.**

# Proguard okhttp for release
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

-keep class okio.** { *; }
-dontwarn okio.**

# Proguard Android Webivew for release. you can comment if you are not using a webview
-keep public class android.net.http.SslError
-keep public class android.webkit.WebViewClient

-keep public class com.google.** { *; }

-dontwarn android.webkit.WebView
-dontwarn android.net.http.SslError
-dontwarn android.webkit.WebViewClient

-keepattributes Signature
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses

-keep class android.** {
    *;
}

-keep class androidx.** {
    public *;
}
-keepclassmembers class org.cocos2dx.** {
    *;
}

-keep class org.cocos2dx.** { *; }
-dontwarn org.cocos2dx.**


-keep class com.android.vending.** {
    *;
}

-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep ADCNative class members unobfuscated
-keepclassmembers class com.adcolony.sdk.ADCNative** {
    *;
}

# For removing warnings due to lack of Multi-Window support
-dontwarn android.app.Activity

-dontwarn com.applovin.**
-keep class com.applovin.** { *; }
-keep class com.google.android.gms.ads.identifier.** { *; }

# For Google Play Services
-keep public class com.google.android.gms.ads.**{
   public *;
}

# For old ads classes
-keep public class com.google.ads.**{
   public *;
}

# For mediation
-keepattributes *Annotation*

# Other required classes for Google Play Services
# Read more at http://developer.android.com/google/play-services/setup.html
-keep class * extends java.util.ListResourceBundle {
   protected Object[][] getContents();
}

-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
   public static final *** NULL;
}

-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {
   @com.google.android.gms.common.annotation.KeepName *;
}

-keepnames class * implements android.os.Parcelable {
   public static final ** CREATOR;
}

-keep public class com.ivy.IvySdk {
   public *;
}

-keepattributes Signature
-keep class com.facebook.android.*
-keep class android.webkit.WebViewClient
-keep class * extends android.webkit.WebViewClient
-keepclassmembers class * extends android.webkit.WebViewClient {
    <methods>;
}

-keep class com.chartboost.** { *; }
-dontwarn com.chartboost.**

-keep class com.google.ads.mediation.** { *; }
-dontwarn com.google.ads.mediation.**

-keep class com.ironsource.** { *; }
-dontwarn com.ironsource.**

-keep class com.vungle.** { *; }
-dontwarn com.vungle.**


-dontwarn android.support.v7.**
-keep class android.support.v7.** { *; }
-keep interface android.support.v7.** { *; }

-dontwarn android.support.v7.**
-keep class android.support.v7.** { *; }
-keep interface android.support.v7.** { *; }

-keep class com.bytedance.sdk.openadsdk.** { *; }
-keep class com.androidquery.callback.** {*;}
-keep public interface com.bytedance.sdk.openadsdk.downloadnew.** {*;}
-keep class com.ss.sys.ces.* {*;}

-keep class com.android.client.** { *; }
-keep public class com.ivy.IvySdk {
   public *;
}

-keep class **.R** {
    *;
}

-keepnames class **.R** {
    *;
}

-keepclassmembers class **.R$* {
	*;
}

-keep class **.R$* { *; }

-keep class com.unity3d.player.** { *; }


-keep class com.tencent.** { *; }

-keep class com.chartboost.** { *; }

-keep class okhttp3.** { *; }
-keep class okio.** { *; }

-keep class com.google.android.gms.** {*; }
-keep class com.android.billingclient.** {*; }

-keep class com.appsflyer.** { *; }
-keep class com.parfka.** {*;}