import {Platform} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const OPTIONS = {
	enableVibrateFallback: true,
	ignoreAndroidSystemSettings: false,
};

export default function withHapticVibration(Children: any) {
	return function WrappedComponent(props: any) {
		const mode = Platform.OS === 'ios' ? 'impactLight' : 'impactMedium';

		const handleVibration = () => {
			ReactNativeHapticFeedback.trigger(mode, OPTIONS);
		};
		return <Children {...props} handleVibration={handleVibration} />;
	};
}
