import {Text, View} from 'react-native';

type TProps = {
	title: string;
};

const PurpleBG = ({title}: TProps) => (
	<View className="bg-purple-100 w-full h-[150px] flex justify-end pl-5 pb-4">
		<Text className="font-avenirBlack text-2xl text-black">{title}</Text>
	</View>
);

export default PurpleBG;
