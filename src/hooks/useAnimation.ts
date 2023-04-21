import {useRef} from 'react';

import {Animated} from 'react-native';

const useAnimation = () => {
	const opacity = useRef(new Animated.Value(0)).current;
	const translation = useRef(new Animated.Value(255)).current;

	const fadeIn = (duration: number = 300) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration,
			useNativeDriver: true,
		})?.start();
	};

	return {
		fadeIn,
		opacity,
		translation,
	};
};

export default useAnimation;
