import {View, Text} from 'react-native';

const CardPoints = (): JSX.Element => {
	return (
		<View className="bg-blueCompany h-[143px] rounded-[20px] mx-9 mb-5 pt-5 px-6">
			<Text className="text-white font-avenirBlack text-base">Diciembre</Text>
			<Text className="text-white font-avenirBlack text-3xl text-center mt-3">
				10,00.00 pts
			</Text>
		</View>
	);
};

export default CardPoints;
