import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './Screens/IndexScreen';
// import BlogProvider from './context/BlogContext';

const Stack = createStackNavigator();

//kia? yar ye kam nhi ker raha Blog Provider kuen k us ne kaha tha hum ab createDataContext mein se provider and Context use keren gy

function App() {
	return (
		<NavigationContainer>
			{/* <BlogProvider> */}
			<Stack.Navigator headerMode='none' initialRouteName={'IndexScreen'}>
				<Stack.Screen name='IndexScreen' component={IndexScreen} />
			</Stack.Navigator>
			{/* </BlogProvider> */}
		</NavigationContainer>
	);
}

export default App;
