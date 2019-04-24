package com.trust.trust;

import android.app.Application;

import com.facebook.react.ReactApplication;
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
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new RNPaypalPackage(),
            //new MapsPackage(),
            new RNFluidicSliderPackage(),
          // new RNPaypalPackage(),
           new MapsPackage(),
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
