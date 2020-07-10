import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import EnquiryItem from '../../components/EnquiryItem';
import {colorCodeLetters} from '../../utils';
import {styles} from './style';

const EnquiryDetail = ({enquiry}) => (
  <>
    <View style={styles.titleContainerStyle}>
      <Text style={styles.titleTxtStyle}>Enquiry Detail</Text>
    </View>
    <EnquiryItem
      data={enquiry}
      colorCode={colorCodeLetters[enquiry.name.charAt(0).toLowerCase()]}
    />
  </>
);

const mapStateToProps = (state) => ({
  enquiry: state.enquiries.enquiry,
});

export default connect(mapStateToProps)(EnquiryDetail);
