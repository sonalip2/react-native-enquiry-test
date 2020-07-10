import React from 'react';
import {View, Text, TouchableOpacity, Linking, Platform} from 'react-native';
import {styles} from './style.js';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';

const EnquiryItem = ({
  data: {name, categoryName, location, phoneNumber},
  colorCode,
}) => {
  const dialCall = () => {
    let dialNumber = '';

    if (Platform.OS === 'android') {
      dialNumber = `tel:${phoneNumber}`;
    } else {
      dialNumber = `telprompt:${phoneNumber}`;
    }

    Linking.openURL(dialNumber);
  };
  return (
    <View style={styles.container}>
      <View style={styles.enquiryContainer}>
        <View style={[styles.circleStyle, {backgroundColor: colorCode}]}>
          <Text style={styles.txtStyle}>{name && name.charAt(0)}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text>{categoryName}</Text>
          <Text>{location}</Text>
          <Text>At the institute</Text>
        </View>
      </View>
      <View style={styles.timing}>
        <Text>16 hours ago</Text>
        <TouchableOpacity onPress={dialCall} style={styles.dialStyle}>
          <FontAwesomeIcon name="mobile-phone" size={30} color={colorCode} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnquiryItem;
