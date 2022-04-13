import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MatIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
// import {useNavigation} from '@react-navigation/core';
// import moment from 'moment';
// import Messages from '../../../Messages';
// import ProfilePicture from '../../../ProfilePicture';
// import Rating from '../../../Rating';

const Footer = ({
  // likesCount: likesCountProp,
  // caption,
  // postedAt,
  // id,
  // onIdPress,
  // onPreview,
  msg,
  onCapPress,
  type,
  title,
  msgLength,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [openComment, setOpenComment] = useState(false);
  const [messages, setMessages] = useState([]);

  const [isTaged, setIsUntaged] = useState(false);
  // const [likesCount, setLikesCount] = useState(0);

  // const onLikePressed = () => {
  //   const amount = isLiked ? -1 : 1;
  //   setLikesCount(likesCount + amount);
  //   setIsLiked(!isLiked);
  // };

  // const onTagPressed = () => {
  //   // const amount = isLiked ? -1 : 1;
  //   // setLikesCount(likesCount + amount);
  //   setIsUntaged(!isTaged);
  // };

  const onCommentPressed = () => {
    // const amount = isLiked ? -1 : 1;
    // setLikesCount(likesCount + amount);
    setOpenComment(true);
  };

  const onCloseCommentPressed = () => {
    // const amount = isLiked ? -1 : 1;
    // setLikesCount(likesCount + amount);
    setOpenComment(false);
  };

  // useEffect(() => {
  //   setLikesCount(likesCountProp);
  // }, []);

  // const navigation = useNavigation();
  // const onPress = () => {
  //   navigation.navigate('ImagePreview', {userId: id});
  // };

  return (
    <>
      {/* {openComment ? (
        
        
        <ScrollView
          style={{maxHeight: 500}}
          showsVerticalScrollIndicator={true}>
          <View style={styles.commentHeader}>
            <TouchableWithoutFeedback onPress={onCloseCommentPressed}>
              <Ionicons name="arrow-back" size={23} color={'#545454'} />
            </TouchableWithoutFeedback>
            <Text>Comments</Text>
            <TouchableWithoutFeedback onPress={onCloseCommentPressed}>
              <Ionicons name="close" size={23} color={'#545454'} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.bottomContainer}>
            <ProfilePicture
              uri={require('../../../../assets/users/user-3.jpg')}
              size={40}
            />
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Comment on Image"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={30}
                // color={'#ffffff'}
              />
            </View>
          </View>
          <ScrollView style={(styles.commentBody, {flex: 1})}>
            {messages.map(item => (
              <Messages
                key={item._id}
                message={item}
                // onDelete={handleDelete}
              />
            ))} */}
      {/* <FlatList
              contentContainerStyle={{flexGrow: 1}}
              style={{flex: 1}}
              data={messages}
              keyExtractor={({_id}) => _id}
              renderItem={({item}) => <Messages message={item} />}
            /> */}
      {/* </ScrollView> */}
      {/* </ScrollView> */}
      {/* ) : (  */}
      {/* // </View> */}
      {/* // </View> */}
      <View>
        {/* <Text style={styles.likes}>{likesCount} Likes</Text> */}
        <Text style={styles.caption}>{type}</Text>
        <Text style={styles.postedAt}>
          {/* {moment(postedAt.toDate()).fromNow()} */}
          {title}
        </Text>
        <View style={styles.iconsContainer}>
          <View style={styles.leftItems}>
            {/* <TouchableWithoutFeedback onPress={onCapPress}>
              <Rating
                value={1}
                // value={product.rating}
                // text={`${product.numReviews} reviews`}
                text={`${10} reviews`}
              />
            </TouchableWithoutFeedback> */}

            {/* <TouchableWithoutFeedback onPress={onLikePressed}>
              <View style={{flexDirection: 'row'}}>
                {isLiked ? (
                  <ADIcon name="heart" size={25} color={'#c30000'} />
                ) : (
                  <ADIcon name="hearto" size={25} color={'#545454'} />
                )}
                <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
                  {' '}
                  {likesCount}
                </Text>
              </View>
            </TouchableWithoutFeedback> */}

            <TouchableWithoutFeedback onPress={onCapPress}>
              <View style={{flexDirection: 'row'}}>
                <FontistoIcon name="comment" size={20} color={'#87c830'} />
                {/* <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
                  {msgLength}
                </Text> */}
                <Text
                  style={{marginLeft: 5, fontWeight: 'bold', color: 'blue'}}>
                  Comments
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {/* <IonIcon name="paper-plane-outline" size={23} color={'#545454'} /> */}
          </View>
          <View style={styles.rightItems}>
            {/* <TouchableWithoutFeedback onPress={onPreview}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="ticket" size={25} color={'#545454'} />
                <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
                  Choose Us
                </Text>
              </View>
            </TouchableWithoutFeedback> */}
            {/* <TouchableWithoutFeedback onPress={onTagPressed}>
                <Entypo name="tag" size={25} color={'#545454'} />
              </TouchableWithoutFeedback> */}
          </View>
        </View>
        {/* <View style={styles.line}></View> */}
      </View>
      {/* )} */}
    </>
  );
};

export default Footer;
