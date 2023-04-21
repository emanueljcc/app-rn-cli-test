import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps {
	title: string;
}
const PrimaryButton = (props: IProps): JSX.Element => {
	return (
		<TouchableOpacity
			testID="primary-button"
			activeOpacity={0.7}
			className="h-[50px] bg-blueCompany rounded-[10px] justify-center items-center"
			{...props}>
			<Text className="font-avenirBlack text-white text-base">
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
