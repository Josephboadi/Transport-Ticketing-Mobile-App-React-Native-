// import React from 'react';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import {FlatList, View} from 'react-native';
// import userImage3 from '../../assets/users/user-3.jpg';

// const Post = ({post}) => {
//   return (
//     <View style={{borderTopColor: '#C3CFDD', borderTopWidth: 1}}>
//       <Header imageUri={post.user.imageUri} name={post.user.name} />

//       {/* <FlatList
//         data={post.images}
//         keyExtractor={({id}) => id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({item}) => <Body imageUri={item} />}
//       /> */}

//       <Body imageUri={post.imageUri} />
//       <Footer
//         likesCount={post.likesCount}
//         postedAt={post.postedAt}
//         caption={post.caption}
//         id={post.id}
//       />
//     </View>
//   );
// };

// export default Post;
