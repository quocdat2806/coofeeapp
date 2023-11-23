import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    marginBottom: 20,
  },
  textDefault: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 24,
  },
  categoryWrapper: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
  specialOfferWrapper: {
    marginTop: 10,
    columnGap: 6,
  },
});
export default style;
