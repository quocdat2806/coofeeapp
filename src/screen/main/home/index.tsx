import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import style from './style';
import AppText from '../../../component/text';
import Search from './components/Search';
import FireSvg from './../../../assets/svg/fire.svg';
import RenderCategoryItem from './components/RenderCategoryItem';
import RenderProductItem from './components/RenderProductItem';
import {CATEGORIES, SPECIALOFFERS} from '../../../constants/fakeData';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {productSlice} from '../../../redux/product/productSlice';
import RenderSpecialOfferItem from './components/RenderSpecialOfferItem';
import {API_HOME_PRODUCT} from '../../../api';
const HomeScreen = ({navigation}): JSX.Element => {
  const [currentCategoryTab, setCurrentCategoryTab] = useState<number>(0);
  function handleChangTabCategory(index: number) {
    setCurrentCategoryTab(index);
  }
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);
  const search = useAppSelector(state => state.filter.search);
  const filterProduct =
    products &&
    products.filter(
      product =>
        product.name.includes(search) &&
        product.category === CATEGORIES[currentCategoryTab].category,
    );
  useEffect(() => {
    fetch(API_HOME_PRODUCT)
      .then(res => res.json())
      .then(data => {
        dispatch(productSlice.actions.setData(data));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function navigateDetailProduct(product: any) {
    navigation.navigate('DetailProduct', {...product});
  }
  const {container, categoryWrapper, specialOfferWrapper} = style;

  return (
    <ScrollView>
      <View style={container}>
        <Header />
        <AppText
          lineHeight={20}
          fontWeight="700"
          fontSize={20}
          textAlign="left"
          title="Good morning,Dityo"
        />
        <Search />
        <AppText
          title="Categories"
          fontSize={20}
          fontWeight="700"
          lineHeight={24}
          textAlign="left"
        />
        <View style={categoryWrapper}>
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <RenderCategoryItem
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
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => navigateDetailProduct(item)}>
                <RenderProductItem product={item} key={index} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={specialOfferWrapper}>
          <AppText
            title="Special Offer"
            fontSize={20}
            textAlign="left"
            lineHeight={24}
            fontWeight="700"
          />
          <FireSvg width={20} height={20} />
        </View>
        {SPECIALOFFERS.map((special, index) => (
          <RenderSpecialOfferItem key={index} product={special} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
