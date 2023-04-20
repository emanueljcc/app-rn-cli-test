import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

import ArrowSVG from './SVG/ArrowSVG';
import {ScrollView} from 'react-native-gesture-handler';
import SkeletonLoader from './SkeletonLoader';

const data = [
	{
		id: 1,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
	},
	{
		id: 2,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: 3,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
	{
		id: 4,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		id: 5,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo: 'https://randomuser.me/api/portraits/men/43.jpg',
	},
	{
		id: 6,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
	{
		id: 7,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
	{
		id: 8,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
	{
		id: 9,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
	{
		id: 10,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
	{
		id: 11,
		name: 'Nombre del producto',
		date: '26 de enero, 2019',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
	},
];

// TODO: TIPAR con jsx tmbn
const Item = ({item}: any): JSX.Element => {
	return (
		<View className="flex-row m-2.5">
			<Image
				source={{uri: item.photo}}
				className="w-[55px] h-[55px] rounded-xl"
			/>
			<View className="flex-1 px-3">
				<Text className="font-avenirBlack text-sm mt-1">{item.name}</Text>
				<Text className="mt-3 font-avenirLight text-xs">{item.date}</Text>
			</View>
			<Text className="mt-4 text-base font-avenirBlack mr-7">
				{/* <Text className="text-error">-</Text>100 */}
				<Text className="text-success font-avenirBlack">+</Text>100
			</Text>

			<TouchableOpacity className="justify-center items-end">
				<ArrowSVG />
			</TouchableOpacity>
		</View>
	);
};

const CardList = (): JSX.Element => {
	return (
		<View className="bg-white h-[400px] rounded-3xl py-4 px-1">
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}>
				{/* <FlatList
					className="flex-1"
					data={data}
					renderItem={({item}) => <Item item={item} />}
					keyExtractor={item => String(item.id)}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				/> */}
				<SkeletonLoader />
			</ScrollView>
		</View>
	);
};

export default CardList;
