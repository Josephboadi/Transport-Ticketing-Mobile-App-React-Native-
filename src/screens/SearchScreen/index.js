import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import Feed from '../../components/Feed';
import Search from '../../components/Search';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Search />
    </SafeAreaView>
  );
};

export default SearchScreen;
