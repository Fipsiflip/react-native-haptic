package com.haptic

import android.view.HapticFeedbackConstants
import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class HapticFeedbackModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "HapticFeedback"
    }

    @ReactMethod
    fun triggerVirtualKeyFeedback() {
        val view: View? = currentActivity?.window?.decorView?.rootView
        view?.performHapticFeedback(HapticFeedbackConstants.VIRTUAL_KEY)
    }
}
