import {useCallback, useEffect, useMemo, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  Animated,
  RefreshControl,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {StackNavigationParams} from '../navigations/StackNavigation';
import {CardPoints, HeaderTitle, SectionLabel, CardList} from '../components';
import PrimaryButton from '../components/PrimaryButton';
import {useGetDataQuery} from '../services/apiSlice';
import {withHapticVibration} from '../HOC';
import {useAnimation} from '../hooks';
import {MockResponse} from '../interfaces';
import SearchSVG from '../components/SVG/SearchSVG';
import RemoveSVG from '../components/SVG/RemoveSVG';
import {TextInput} from 'react-native';
import {useDebounce} from '../hooks';

interface IProps extends StackScreenProps<StackNavigationParams, 'HomeScreen'> {
  item: MockResponse;
  handleVibration: () => void;
}

const HomeScreen = (props: IProps): JSX.Element => {
  const {fadeIn, opacity} = useAnimation();

  const {data = [], isLoading, refetch} = useGetDataQuery();

  const [dataList, setDataList] = useState<MockResponse[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [allButtons, setAllButtons] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const lastValue = useDebounce(valueInput, 300);

  useEffect(() => {
    const tmp = data.filter((el: MockResponse) =>
      el.product.toLowerCase().includes(lastValue.toLowerCase()),
    );

    setDataList(tmp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastValue]);

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
    props?.handleVibration();
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

  const handleShowSearch = () => setShowSearch(prev => !prev);

  const handleClean = () => {
    setDataList(data);
    setValueInput('');
    setShowSearch(false);
  };

  const handleChangeInput = (val: string) => setValueInput(val);

  return (
    <SafeAreaView className="mx-6 flex-1">
      <ScrollView
        testID="refresh-control"
        className={Platform.OS === 'ios' ? 'mb-20' : 'mb-28'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <KeyboardAvoidingView
          className="flex-1"
          keyboardVerticalOffset={20}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Animated.View style={{opacity}}>
            <HeaderTitle />

            <SectionLabel title="Tus puntos" />
            <CardPoints total={totalPoints} />

            <View className="flex-1 flex-row justify-between">
              <SectionLabel title="Tus movimientos" />
              <TouchableOpacity
                activeOpacity={0.2}
                className="mt-2"
                onPress={!showSearch ? handleShowSearch : handleClean}>
                {showSearch ? <RemoveSVG /> : <SearchSVG />}
              </TouchableOpacity>
            </View>

            {showSearch && (
              <TextInput
                className="rounded-md border-[1px] h-10 p-2 border-[#ced4da] bg-white mb-4"
                onChangeText={handleChangeInput}
                value={valueInput}
                placeholder="Ingrese una palabra"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}

            <CardList
              data={dataList}
              isLoading={isLoading}
              onPress={handlePress}
            />
          </Animated.View>
        </KeyboardAvoidingView>
      </ScrollView>

      <Animated.View
        style={{opacity}}
        className="w-full absolute bottom-10 flex-row justify-center items-center px-1">
        {allButtons ? (
          <>
            <PrimaryButton
              testID="item-button"
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
