import React from 'react';
import createDataContext from './createDataContext';

// export const BlogContext = React.createContext();

//data kahan use kr rha hai yeh? kon sa? reducer ka? han phele simple context se ker raha tha ab reduers se access ker raha hai index Screen ko
// kia msla aa rha hai? bhai ye data Context banaya is ne file phir us mein generalize ker diya reducers ko , yeh nhin daikha tha mainay pehli baar daikh rha hun ok ye stae and actions per kam ker raha  ahi haan daikh laitay hain kia ho rha hai run krwa do project
// acha ab smjha. maihn smjh rah tah k create dataContext react ka koi componenet hai are nhis set sahi smjh aagaya lmba kaam krwa rha hai yeh han yar mgr acha hai aagay kaam ayga aby lakin versi/ons ka difference ho to yehi problems hote hain hhaanaa
//acha app.js mein dekho..... agr jo main smjh rha hun yahan wohi ho rha hai to yeh behtreen kaam hai matlub?? yaani iskay baad main wrap nhin krna hoga App.js main  acuhsa usnay krwaya thja?kiya ?wrap? are wrap to hum ne kiya hua hai us ka to direct chal raha hai set
const blogReducer = (state = ['dfsdf'], action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [...state, { title: `BlogPost #${state.length + 1}` }];
			console.log('hit');
		default:
			return state;
	}
};

const addBlogPost = () => {
	dispatch({ type: 'add_blogpost' });
};

export const { Context, Provider } = createDataContext(
	blogReducer, // yeh reducer hai pehla param
	{ addBlogPost }, // shai
	['SDFSDF'] //initialState sahi run krwaao
);

// export const BlogProvider = ({ children }) => {
// 	const [blogPosts, dispatch] = useReducer(blogReducer, []);
// const [blogPosts, setBlogPosts] = useState([]);

// const addBlogPost = () => {
// 	dispatch({ type: 'add_blogpost' });
// };

// const addBlogPost = () => {
// 	setBlogPosts([
// 		...blogPosts,
// 		{ title: `Blog Post #${blogPosts.length + 1}` },
// 	]);
// };

// 	return (
// 		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
// 			{children}
// 		</BlogContext.Provider>
// 	);
// };

// export default BlogProvider;
