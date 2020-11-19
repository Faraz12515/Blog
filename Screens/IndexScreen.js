import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';

// yehi tha code han aik min mein dekh leta hun video open kerun
export default function IndexScreen() {
	const { data, addBlogPost } = useContext(BlogContext);
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Index Screen</Text>
			<Button title='Add Post' onPress={addBlogPost} />
			<FlatList
				data={data}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}
			/>
		</View>
	);
}
