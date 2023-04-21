import {Text, View, Image, TouchableOpacity} from 'react-native';

import ArrowSVG from './SVG/ArrowSVG';
import {MockResponse} from '../interfaces';
import {formatDate} from '../utils';

type TItemProps = {
	item: MockResponse;
	onPress: (item: MockResponse) => void;
};
const CardItem = ({item, onPress}: TItemProps): JSX.Element => {
	return (
		<TouchableOpacity className="flex-row m-2.5" onPress={() => onPress(item)}>
			<Image
				source={{uri: item.image}}
				className="w-[55px] h-[55px] rounded-xl"
			/>
			<View className="flex-1 px-3">
				<Text className="font-avenirBlack text-sm mt-0">{item.product}</Text>
				<Text
					className={`${
						item.product.length < 20 ? 'mt-3' : 'mt-1'
					} font-avenirLight text-xs`}>
					{formatDate(item.createdAt)}
				</Text>
			</View>
			<Text className="mt-4 text-base font-avenirBlack mr-7">
				{/* <Text className="text-error">-</Text>100 */}
				<Text
					className={`${
						!item.is_redemption ? 'text-success' : 'text-error'
					} font-avenirBlack`}>
					{!item.is_redemption ? '+' : '-'}
				</Text>
				{item.points}
			</Text>

			<TouchableOpacity
				className="justify-center items-end"
				onPress={() => onPress(item)}>
				<ArrowSVG />
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default CardItem;
