import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../theme/globalStyles';
import ImgDefaultSVG from '../components/SVG/ImgDefaultSVG';
import {PrimaryButton} from '../components';

interface IProps extends StackScreenProps<any, any> {}

const PageDetailScreen = ({navigation}: IProps): JSX.Element => {
	// show the header of the screen when the component mounts
	useEffect(() => {
		(() => navigation.setOptions?.({headerShown: true}))();
	}, [navigation]);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View
				className="mt-40 bg-white h-[350px] rounded-[10px] mx-6 justify-center items-center"
				style={styles.shadow}>
				<ImgDefaultSVG />
			</View>

			<View className="mx-6 mb-10">
				<Text className="font-avenirBlack text-sm text-gray-100 mt-9">
					Detalles del producto:
				</Text>

				<Text className="font-avenirBlack text-base text-black mt-6">
					Comprado el 26 de enero, 2019
				</Text>

				<Text className="font-avenirBlack text-sm text-gray-100 mt-6">
					Con esta compra acumulaste:
				</Text>

				<Text className="font-avenirBlack text-2xl text-black mt-10 mb-12">
					100 puntos
				</Text>

				<PrimaryButton title="Aceptar" onPress={() => navigation.goBack()} />
			</View>
		</ScrollView>
	);
};

export default PageDetailScreen;
