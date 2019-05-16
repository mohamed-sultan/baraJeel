package com.barajeel.barajeel;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.reactlibrary.RNPaypalPackage;
import com.airbnb.android.react.maps.MapsPackage;
import px.fluidicslider.RNFluidicSliderPackage;
// import com.reactlibrary.RNPaypalPackage;
import com.airbnb.android.react.maps.MapsPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import com.microsoft.codepush.react.CodePush;



import java.util.Arrays;
import java.util.List;

import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;

public class MainApplication extends Application implements ReactApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected String getJSBundleFile() {
    return CodePush.getJSBundleFile();
    }


    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new RNSoundPackage(),
            new ReactNativeAudioPackage(),
  new CodePush("llz2JY0z9A2uesaZlqbbxkVcuETz1b96e02b-7ad5-4b16-a6ad-830f6ae26b7a", MainApplication.this, BuildConfig.DEBUG),
      new RNFusedLocationPackage(),
            new MapsPackage(),
            new PickerPackage(),
            new RNPaypalPackage(),
            //new MapsPackage(),
             new RNFluidicSliderPackage(),
          // new RNPaypalPackage(),
          // new MapsPackage(),
          new SplashScreenReactPackage(),
           new FBSDKPackage(mCallbackManager),
            new ReactNativeLocalizationPackage(),

          new VectorIconsPackage());
    }

    @Override
    protected String getJSMainModuleName() {
    

      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
    sharedI18nUtilInstance.forceRTL(getApplicationContext(), false);
    SoLoader.init(this, /* native exopackage */ false);
  }
}