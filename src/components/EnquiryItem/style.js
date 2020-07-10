import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 10,
  },
  enquiryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  timing: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleStyle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  txtStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  dialStyle: {
    padding: 10,
  },
});
