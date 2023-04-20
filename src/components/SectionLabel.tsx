import {View, Text} from 'react-native';

type TProps = {
	title: string;
};

const SectionLabel = ({title}: TProps): JSX.Element => {
	return (
		<View className="mt-2 mb-7">
			<Text className="font-avenirBlack uppercase color-gray-100 text-sm">
				{title}
			</Text>
		</View>
	);
};

export default SectionLabel;
