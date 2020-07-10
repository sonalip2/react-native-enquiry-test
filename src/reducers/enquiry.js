import {GET_ENQUIRIES, SET_ENQUIRY} from '../actions/actions';

const initialState = {
  enquiries: [],
  enquiry: {},
};

export const enquiryReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENQUIRIES: {
      return {
        ...state,
        enquiries: action.payload.dataList || [],
      };
    }
    case SET_ENQUIRY: {
      return {
        ...state,
        enquiry: action.payload || [],
      };
    }
    default:
      return state;
  }
};

export default enquiryReducers;
