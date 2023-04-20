import {View, Text} from 'react-native';

const HeaderTitle = (): JSX.Element => {
	return (
		<View className="my-4">
			<Text className="text-xl font-avenirBlack">Bienvenido de vuelta!</Text>
			<Text className="text-base font-light font-avenirLight">
				Ruben Rodriguez
			</Text>
		</View>
	);
};

export default HeaderTitle;
