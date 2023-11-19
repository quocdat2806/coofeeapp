import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },

  textWelcome: {
    color: '#000',
    fontSize: 24,
    fontWeight: '800',
  },
  textCategory: {
    color: '#000',
    fontSize: 24,
    fontWeight: '800',
  },
  categoryWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  specialWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  specialOffer: {
    color: '#000',
    fontSize: 22,
    fontWeight: '800',
  },
  specialText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
  },
});
export default style;
