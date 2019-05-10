package com.bragel.bragel;

import android.content.Context;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import static com.facebook.FacebookSdk.getApplicationContext;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Bragel";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this); // here
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
        Context context = getApplicationContext();
        sharedI18nUtilInstance.allowRTL(context, false);
    }
}
