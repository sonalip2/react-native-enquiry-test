import {GET_ENQUIRIES, SET_ENQUIRY} from './actions';

export const getAllEnquiries = async () => {
  return {
    type: GET_ENQUIRIES,
    payload: new Promise((resolve, reject) => {
      try {
        const data = getAllEnquiriesApi();
        resolve(data);
      } catch (err) {
        console.log(err);
      }
    }),
  };
};

const getAllEnquiriesApi = async () => {
  const res = await fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889');
  const data = await res.json();
  return data;
};

export const setEnquiry = (item) => {
  return {
    type: SET_ENQUIRY,
    payload: item,
  };
};
