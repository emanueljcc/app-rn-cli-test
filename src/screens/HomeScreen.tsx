import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/globalStyles';

interface IProps extends StackScreenProps<any, any> {}
const HomeScreen = ({navigation}: IProps) => {
  return (
    <View style={styles.marginGlobal}>
      <Text>HomeScreen</Text>

      <Button
        title="Ir a la page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};

export default HomeScreen;
