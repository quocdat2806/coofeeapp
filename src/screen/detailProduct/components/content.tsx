import React, {useMemo, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CategoryItem from './categoryItem';
import CoffeeSvg from '../../../assets/img/coffeee.svg';
import ChocolateSvg from '../../../assets/img/chocolate.svg';
import AppButton from '../../../component/button';

interface ContentProductProps {}

const ContentProduct: React.FC<ContentProductProps> = (): JSX.Element => {
  const [sizeIndex, setSizeIndex] = useState<number>(0);

  function handleChangeSize(index: number) {
    setSizeIndex(index);
  }

  const size: string[] = useMemo(() => {
    return ['Small', 'Medium', 'Large'];
  }, []);

  return (
    <>
      <View style={style.categoryWrapper}>
        <CategoryItem title="Coffee" hasBorderRight={true} icon={CoffeeSvg} />
        <CategoryItem
          title="Chocolate"
          hasBorderRight={true}
          icon={ChocolateSvg}
        />
        <CategoryItem title="Medium Roasted" hasBorderRight={false} />
      </View>
      <Text style={style.textCoffeeSize}>Coffee Size</Text>
      <View style={style.sizeWrapper}>
        {size.map((s, index) => {
          return (
            <View
              key={index}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                minWidth: 100,
                marginTop: 10,
              }}>
              <AppButton
                index={index}
                hasBorder={sizeIndex !== index}
                onPress={() => handleChangeSize(index)}
                isActive={sizeIndex === index}
                borderRadius={100}
                title={s}
                padding={8}
              />
            </View>
          );
        })}
      </View>
      <View style={style.textAboutWrapper}>
        <Text style={style.textAbout}>About</Text>
        <Text style={style.textDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          architecto nisi distinctio quos deserunt velit corrupti voluptates
          expedita! Iure facilis aliquam a voluptates alias facere laborum
          recusandae velit architecto dolore.
        </Text>
      </View>
      <View style={style.addButtonWrapper}>
        <AppButton
          padding={22}
          borderRadius={40}
          marginHorizontal={16}
          title="Add To Cart"
          isActive
          style={style.addButton}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 18,
    borderRadius: 999,
    backgroundColor: '#a6a6aa36',
  },
  textCoffeeSize: {
    marginHorizontal: 20,
  },
  sizeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textAboutWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  textAbout: {
    color: '#000',
    fontSize: 22,
    fontWeight: '700',
  },
  textDesc: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  addButtonWrapper: {
    marginTop: 10,
  },
  addButton: {
    fontSize: 20,
  },
});

export default ContentProduct;
