import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  pagerViewWrapper: {
    flex: 1,
  },
  dotWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonWrapper: {
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: 20,
  },
});
export default style;
