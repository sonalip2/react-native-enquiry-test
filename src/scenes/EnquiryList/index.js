import React, {useEffect, Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {getAllEnquiries, setEnquiry} from '../../actions/enquiryAction';
import {styles} from './style.js';
import EnquiryItem from '../../components/EnquiryItem';
import {colorCodeLetters} from '../../utils';

const EnquiryList = ({fetchAllEnquiries, handleEnquiryChange, enquiries}) => {
  useEffect(() => {
    fetchAllEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigation = useNavigation();

  const handleEnquiryClick = (item) => {
    handleEnquiryChange(item);
    navigation.navigate('EnquiryDetail');
  };

  const renderItem = ({item}) => {
    const colorCode = colorCodeLetters[item.name.charAt(0).toLowerCase()];
    return (
      <TouchableOpacity
        onPress={() => handleEnquiryClick(item)}
        key={item.enqId.toString()}>
        <EnquiryItem data={item} colorCode={colorCode} />
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <View style={styles.titleContainerStyle}>
        <Text style={styles.titleTxtStyle}>ENQUIRIES</Text>
      </View>
      <FlatList
        data={enquiries}
        renderItem={renderItem}
        keyExtractor={(item) => item.enqId.toString()}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  enquiries: state.enquiries.enquiries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllEnquiries: () => {
    dispatch(getAllEnquiries());
  },
  handleEnquiryChange: (item) => {
    dispatch(setEnquiry(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryList);
