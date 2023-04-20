import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

interface IProps extends StackScreenProps<any, any> {}

const Page2Screen = ({navigation}: IProps) => {
  return (
    <View>
      <Text>Page2Screen</Text>
      <Button title="Atras" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Page2Screen;
