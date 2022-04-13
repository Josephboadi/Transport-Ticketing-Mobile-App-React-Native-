import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post/posts';
import posts from '../../assets/data/feed';
import Feed from '../../components/Feed1';
import {useSelector} from 'react-redux';

const SearchResultsScreen = props => {
  // const clients = useSelector(state => state.data.clients);
  // const {posts} = props;
  // console.log(clients);
  return (
    // <SafeAreaView>
    <>
      <Feed />
    </>
    // </SafeAreaView>
    // <View>
    //   <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    // </View>
  );
};

export default SearchResultsScreen;
