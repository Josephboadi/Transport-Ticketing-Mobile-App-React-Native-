import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {Dimensions, FlatList, View} from 'react-native';
// import userImage3 from '../../assets/users/user-3.jpg';

const Messages = ({message}) => {
  // console.log(message.user.pic);
  return (
    <View
      style={{
        borderBottomColor: '#C3CFDD',
        borderBottomWidth: 1,
        width: Dimensions.get('window').width,
      }}>
      <Header
        imageUri={message.user.pic}
        name={message.name}
        text={message.comment}
        createdAt={message.createdAt}
      />

      {/* <FlatList
        data={post.images}
        keyExtractor={({id}) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Body imageUri={item} />}
      /> */}

      {/* <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        postedAt={post.postedAt}
        caption={post.caption}
        id={post.id}
      /> */}
    </View>
  );
};

export default Messages;
