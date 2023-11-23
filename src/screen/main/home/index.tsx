import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import style from './style';
import Search from './components/Search';
import FireSvg from './../../../assets/svg/fire.svg';
import CategoryItem from './components/CategoryItem';
import ProductItem from './components/ProductItem';
import { CATEGORIES, SPECIALOFFERS } from '../../../constants/dummyData';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { productSlice } from '../../../redux/product/productSlice';
import SpecialOfferItem from './components/SpecialOfferItem';
import { API_HOME_PRODUCT } from '../../../api';
import AppText from '../../../component/text';
import globalStyle from '../../../globalStyle';
const HomeScreen = ({ navigation }): JSX.Element => {
  const [currentCategoryTab, setCurrentCategoryTab] = useState<number>(0);
  function handleChangTabCategory(index: number) {
    setCurrentCategoryTab(index);
  }
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const search = useAppSelector((state) => state.filter.search);
  const filterProduct =
    products &&
    products.filter(
      (product) =>
        product.name.includes(search) &&
        product.category === CATEGORIES[currentCategoryTab].category,
    );
  useEffect(() => {
    filterProduct &&
      fetch(API_HOME_PRODUCT)
        .then((res) => res.json())
        .then((data) => {
          dispatch(productSlice.actions.setData(data));
        });
  }, []);
  function navigateDetailProduct(product: any) {
    navigation.navigate('DetailProduct', { ...product });
  }
  const { container, categoryWrapper, specialOfferWrapper, textDefault } =
    style;

  return (
    <ScrollView>
      <View style={container}>
        <Header />
        <AppText style={textDefault} title="Good morning, Dityo" />
        <Search />
        <AppText style={textDefault} title="Categories" />

        <View style={[globalStyle['d-flex'], categoryWrapper]}>
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <CategoryItem
                onPress={() => handleChangTabCategory(index)}
                isActiveCategoryTab={currentCategoryTab === index}
                key={index}
                icon={Icon}
                category={category.category}
                name={category.name}
              />
            );
          })}
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            data={filterProduct}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => navigateDetailProduct(item)}>
                <ProductItem product={item} key={index} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={[globalStyle['d-flex'], specialOfferWrapper]}>
          <AppText style={textDefault} title="Special Offer" />
          <FireSvg width={20} height={20} />
        </View>
        {SPECIALOFFERS.map((special, index) => (
          <SpecialOfferItem key={index} product={special} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
