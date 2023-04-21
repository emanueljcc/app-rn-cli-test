import {useCallback, useEffect, useMemo, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  Animated,
  RefreshControl,
} from 'react-native';

import {StackNavigationParams} from '../navigations/StackNavigation';
import {CardPoints, HeaderTitle, SectionLabel, CardList} from '../components';
import PrimaryButton from '../components/PrimaryButton';
import {useGetDataQuery} from '../services/apiSlice';
import {withHapticVibration} from '../HOC';
import {useAnimation} from '../hooks';
import {MockResponse} from '../interfaces';

interface IProps extends StackScreenProps<StackNavigationParams, 'HomeScreen'> {
  item: MockResponse;
  handleVibration: () => void;
}

const HomeScreen = (props: IProps): JSX.Element => {
  const {fadeIn, opacity} = useAnimation();

  const {data = [], isLoading, refetch} = useGetDataQuery(undefined);

  const [dataList, setDataList] = useState<MockResponse[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [allButtons, setAllButtons] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setDataList(data), [isLoading]);

  /**
   * This function handles a button press event by calling a vibration function and navigating to a
   * specific screen.
   */
  const handlePress = (item: MockResponse) => {
    props?.handleVibration();
    props.navigation.navigate('PageDetailScreen', {item} as never);
  };

  /* It's calling the `fadeIn` function with a duration of 500ms. */
  useEffect(() => fadeIn(600), [fadeIn]);

  // sum total points
  const totalPoints = useMemo(
    () =>
      data.reduce((acc: number, curr: MockResponse) => {
        if (curr.is_redemption) {
          return acc - curr.points;
        } else {
          return acc + curr.points;
        }
      }, 0),
    [data],
  );

  const handleChangeData = (arg: boolean, isAllData = false) => {
    if (isAllData) {
      setDataList(data);
    } else {
      setDataList(data.filter((el: MockResponse) => el.is_redemption === arg));
    }
    setAllButtons(prev => !prev);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className="mx-6 flex-1">
      <ScrollView
        className={Platform.OS === 'ios' ? 'mb-20' : 'mb-28'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Animated.View style={{opacity}}>
          <HeaderTitle />

          <SectionLabel title="Tus puntos" />
          <CardPoints total={totalPoints} />

          <SectionLabel title="Tus movimientos" />
          <CardList
            data={dataList}
            isLoading={isLoading}
            onPress={handlePress}
          />
        </Animated.View>
      </ScrollView>

      <Animated.View
        style={{opacity}}
        className="w-full absolute bottom-10 flex-row justify-center items-center px-1">
        {allButtons ? (
          <>
            <PrimaryButton
              className="w-1/2 mr-[13px]"
              title="Ganados"
              onPress={() => handleChangeData(false)}
            />
            <PrimaryButton
              className="w-1/2"
              title="Canjeados"
              onPress={() => handleChangeData(true)}
            />
          </>
        ) : (
          <PrimaryButton
            className="w-full"
            title="Todos"
            onPress={() => handleChangeData(true, true)}
          />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

export default withHapticVibration(HomeScreen);
