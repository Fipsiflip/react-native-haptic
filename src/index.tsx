import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-haptic' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Haptic = NativeModules.HapticFeedback
  ? NativeModules.HapticFeedback
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const triggerVirtualKeyFeedback = () => {
  if (Platform.OS === 'android') {
    Haptic.triggerVirtualKeyFeedback();
  } else {

  }
};
