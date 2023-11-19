import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import AppText from '../../../component/text';

interface SubPageSplashProps {
  pathImage: string;
  listTitle: string[];
  description: string;
}
const SubPageSplash: React.FC<SubPageSplashProps> = ({
  pathImage,
  listTitle,
  description,
}): JSX.Element => {
  return (
    <ImageBackground source={{uri: pathImage}} style={style.imageWrapper}>
      <View style={style.contentWrapper}>
        {listTitle.map((title: string, index: number) => {
          return <AppText style={style.textTitle} key={index} title={title} />;
        })}
        <AppText style={style.textDesc} title={description} />
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    position: 'relative',
  },
  contentWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 110,
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
});

export default SubPageSplash;
