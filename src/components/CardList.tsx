import {View, FlatList, ScrollView, Text} from 'react-native';

import SkeletonLoader from './SkeletonLoader';
import {MockResponse} from '../interfaces';
import CardItem from './CardItem';

type TCardListProps = {
	data: MockResponse[];
	isLoading: boolean;
	onPress: (item: MockResponse) => void;
};

const CardList = ({
	data,
	isLoading = true,
	onPress,
}: TCardListProps): JSX.Element => {
	return (
		<View className="bg-white h-[400px] rounded-3xl py-4 px-1">
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}>
				{isLoading ? (
					<SkeletonLoader />
				) : data.length !== 0 ? (
					<FlatList
						className="flex-1"
						data={data}
						renderItem={({item}) => <CardItem item={item} onPress={onPress} />}
						keyExtractor={item => String(item.id)}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					/>
				) : (
					<Text className="text-center font-avenirBlack">
						No hay resultados
					</Text>
				)}
			</ScrollView>
		</View>
	);
};

export default CardList;
