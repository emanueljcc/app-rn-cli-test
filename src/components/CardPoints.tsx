import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/globalStyles';
import {formatNumber, getMonth} from '../utils';

const CardPoints = ({total}: any): JSX.Element => {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			className="bg-blueCompany h-[143px] rounded-[20px] mx-9 mb-5 pt-5"
			style={styles.shadow}>
			<Text className="text-white font-avenirBlack text-base px-6">
				{getMonth()}
			</Text>
			<Text className="text-white font-avenirBlack text-3xl text-center mt-3">
				{formatNumber(total)} pts
			</Text>
		</TouchableOpacity>
	);
};

export default CardPoints;
