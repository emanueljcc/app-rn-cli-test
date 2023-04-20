import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './navigations/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = (): JSX.Element => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<StackNavigation />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;
