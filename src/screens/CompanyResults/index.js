import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post/posts';
import posts from '../../assets/data/feed';
import Feed from '../../components/Feed';
import {useDispatch, useSelector} from 'react-redux';

const CompanyResultsScreen = props => {
  // const {posts} = props;
  // const {loading} = useSelector(state => state.data);
  // const clients = useSelector(state => state.data.clients);

  // console.log(clients);
  // console.log(loading);

  return (
    // <SafeAreaView>
    <Feed />
    // </SafeAreaView>
    // <View>
    //   <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    // </View>
  );
};

export default CompanyResultsScreen;
