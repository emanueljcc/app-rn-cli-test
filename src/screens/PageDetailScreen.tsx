import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
import {Text, Button, View, ScrollView} from 'react-native';

interface IProps extends StackScreenProps<any, any> {}

const PageDetailScreen = ({navigation}: IProps): JSX.Element => {
	// show the header of the screen when the component mounts
	useEffect(() => {
		(() => navigation.setOptions?.({headerShown: true}))();
	}, [navigation]);

	return (
		<View className="mx-6">
			<ScrollView>
				<View className="mt-40 bg-white h-[350px] rounded-[10px]">
					<Text>PageDetailScreen</Text>
					<Button title="Atras" onPress={() => navigation.goBack()} />
				</View>
			</ScrollView>
		</View>
	);
};

export default PageDetailScreen;
