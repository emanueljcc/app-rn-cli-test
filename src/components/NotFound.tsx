import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import Lottie from 'lottie-react-native';
import {styled} from 'nativewind';

const StyledLottie = styled(Lottie);

const NotFound = () => {
	const animationRef = useRef<Lottie>(null);
	return (
		<View className="flex-1 justify-center items-center">
			<StyledLottie
				testID="not-found-animation"
				ref={animationRef}
				source={require('../assets/animations/not-found.json')}
				autoPlay
				loop
				className="w-40 h-40 -ml-1"
			/>
			<Text className="text-center font-avenirBlack">No hay resultados</Text>
		</View>
	);
};

export default NotFound;
