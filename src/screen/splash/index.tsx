import React, {useState, useCallback} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import PagerView from 'react-native-pager-view';
import {pages} from './constants';
import AppText from '../../component/text';
import AppButton from '../../component/button';
import DotIndicator from './components/dotIndication';
const SplashScreen = ({navigation}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  function openMainPage() {
    navigation.navigate('Main');
  }
  return (
    <PagerView
      onPageSelected={e => {
        setCurrentPage(e.nativeEvent.position);
      }}
      style={styles.pagerView}
      initialPage={0}>
      {pages.map((page, index) => {
        return (
          <ImageBackground
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'relative',
            }}
            key={index}
            source={{
              uri: page.image,
            }}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                position: 'absolute',
                right: 0,
                left: 0,
                bottom: 60,
              }}>
              {page.title.map(it => {
                return <AppText style={styles.textTitle} title={it} />;
              })}

              <AppText style={styles.textDesc} title={page.description} />
              <View
                style={{
                  marginTop: 10,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                {pages.map((page, index) => {
                  return <DotIndicator isActive={currentPage === index} />;
                })}
              </View>
              <View style={{marginTop: 20}}>
                <AppButton
                  onPress={openMainPage}
                  textStyle={styles.textButton}
                  padding={20}
                  marginHorizontal={30}
                  borderRadius={40}
                  backgroundColor="#846046"
                  title="Get started"
                />
              </View>
            </View>
          </ImageBackground>
        );
      })}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },

  textTitle: {
    color: '#dddddd',
    textAlign: 'center',
    fontSize: 28,
  },
  textDesc: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  textButton: {
    color: 'white',
    fontSize: 24,

    textAlign: 'center',
    fontWeight: '700',
  },
});

export default SplashScreen;
