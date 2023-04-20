import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import StackNavigation from './navigations/StackNavigation';
import {store} from './store';

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<StackNavigation />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
