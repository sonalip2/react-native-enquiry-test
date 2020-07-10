import {combineReducers} from 'redux';
import enquiryReducers from './enquiry';

export default combineReducers({
  enquiries: enquiryReducers,
});
