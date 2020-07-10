import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EnquiryList from '../scenes/EnquiryList';
import EnquiryDetail from '../scenes/EnquiryDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EnquiryList"
        component={EnquiryList}
        options={{title: 'Enquiries'}}
      />
      <Stack.Screen
        name="EnquiryDetail"
        component={EnquiryDetail}
        options={{title: 'Enquiry Detail'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
