import {useEffect} from 'react';
import {Text, View, ScrollView, Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import ImageBlurLoading from 'react-native-image-blur-loading';
import {styled} from 'nativewind';

import {StackNavigationParams} from '../navigations/StackNavigation';
import {PrimaryButton, ImgDefaultSVG, PurpleBG} from '../components';
import {formatDate, formatNumber} from '../utils';
import {styles} from '../theme/globalStyles';
import {useAnimation} from '../hooks';

const ImageLoader = styled(ImageBlurLoading);

interface IProps
	extends StackScreenProps<StackNavigationParams, 'PageDetailScreen'> {}

const PageDetailScreen = ({navigation, route}: IProps): JSX.Element => {
	const {
		params: {item},
	} = route;

	const {fadeIn, opacity} = useAnimation();

	/* It's calling the `fadeIn` function with a duration of 500ms. */
	useEffect(() => fadeIn(600), [fadeIn]);

	// show the header of the screen when the component mounts
	useEffect(() => {
		(() =>
			navigation.setOptions?.({
				headerShown: true,
				// eslint-disable-next-line react/no-unstable-nested-components
				headerBackground: () => <PurpleBG title={item.product} />,
			}))();
	}, [item.product, navigation]);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Animated.View style={{opacity}}>
				<View
					className="mt-40 bg-white h-[350px] rounded-[10px] mx-6 justify-center items-center"
					style={styles.shadow}>
					{item.image ? (
						<ImageLoader
							thumbnailSource={{uri: 'https://picsum.photos/id/1/50/50'}}
							source={{uri: item.image}}
							className="flex-1 w-full h-[200px] rounded-xl"
						/>
					) : (
						<ImgDefaultSVG />
					)}
				</View>

				<View className="mx-6 mb-16">
					<Text className="font-avenirBlack text-sm text-gray-100 mt-9">
						Detalles del producto:
					</Text>

					<Text className="font-avenirBlack text-base text-black mt-6">
						Comprado el {formatDate(item.createdAt)}
					</Text>

					<Text className="font-avenirBlack text-sm text-gray-100 mt-6">
						Con esta compra acumulaste:
					</Text>

					<Text className="font-avenirBlack text-2xl text-black mt-10 mb-12">
						{formatNumber(item.points)} puntos
					</Text>

					<PrimaryButton title="Aceptar" onPress={() => navigation.goBack()} />
				</View>
			</Animated.View>
		</ScrollView>
	);
};

export default PageDetailScreen;
