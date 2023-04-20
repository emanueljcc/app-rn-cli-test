import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, View, ScrollView, Platform} from 'react-native';

import {StackNavigationParams} from '../navigations/StackNavigation';
import {CardPoints, HeaderTitle, SectionLabel, CardList} from '../components';
import PrimaryButton from '../components/PrimaryButton';
import {useGetDataQuery} from '../services/apiSlice';

type TProps = StackScreenProps<StackNavigationParams, 'HomeScreen'>;

const HomeScreen = ({navigation}: TProps): JSX.Element => {
  const {data = [], isLoading} = useGetDataQuery(undefined);

  console.log({data, isLoading});
  return (
    <SafeAreaView className="mx-6 flex-1">
      <ScrollView
        className={Platform.OS === 'ios' ? 'mb-20' : 'mb-28'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <HeaderTitle />

        <SectionLabel title="Tus puntos" />
        <CardPoints />

        <SectionLabel title="Tus movimientos" />
        <CardList />
      </ScrollView>

      <View className="w-full absolute bottom-10 flex-row justify-center items-center">
        <PrimaryButton
          className="w-full"
          title="Todos"
          onPress={() => navigation.navigate('PageDetailScreen')}
        />
        {/* <PrimaryButton
          className="w-1/2 mr-[13px]"
          title="Ganados"
          onPress={() => navigation.navigate('PageDetailScreen')}
        />
        <PrimaryButton
          className="w-1/2"
          title="Canjeados"
          onPress={() => navigation.navigate('PageDetailScreen')}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
