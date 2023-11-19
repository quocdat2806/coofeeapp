import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../component/text';
import style from './style';
import Header from './components/Header';
import Search from './components/Search';
import {categories} from '../../constants';
import AppButton from '../../component/button';
import AddSvg from '../../assets/img/add.svg';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {productSlice} from '../../redux/product/productSlice';
const HomeScreen = ({navigation}): JSX.Element => {
  const [categoriesTab, setCategoriesTab] = useState(0);
  function handleChangTabCategory(index) {
    setCategoriesTab(index);
  }
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);
  const search = useAppSelector(state => state.filter.search);
  const filterProduct =
    products &&
    products.filter(
      pr =>
        pr.name.includes(search) &&
        pr.category === categories[categoriesTab].category,
    );
  useEffect(() => {
    filterProduct &&
      fetch('https://6555745a84b36e3a431dc45f.mockapi.io/api/v1/products')
        .then(res => res.json())
        .then(data => {
          dispatch(productSlice.actions.setData(data));
        });
  }, []);
  function navigateDetailProduct(product) {
    navigation.navigate('DetailProduct', {...product});
  }
  const {
    container,
    textWelcome,
    textCategory,
    categoryWrapper,
    specialOffer,
    specialWrapper,
    specialText,
  } = style;

  return (
    <View style={container}>
      <Header />
      <AppText style={textWelcome} title="Good morning, Dityo" />
      <Search />
      <AppText style={textCategory} title="Categories" />
      <View style={categoryWrapper}>
        {categories.map((ct, index) => {
          const Icon = ct.icon;
          return (
            <AppButton
              index={index}
              key={index}
              borderRadius={30}
              isActive={categoriesTab === index}
              onPress={handleChangTabCategory}
              marginHorizontal={4}
              title={ct.name}>
              <Icon width={20} height={20} />
            </AppButton>
          );
        })}
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={filterProduct}
          renderItem={({item}) => (
            <RenderProductItem product={item} onPress={navigateDetailProduct} />
          )}
        />
      </View>
      <Text style={specialOffer}>Special Offer</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={specialWrapper}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 0.4,
            }}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{objectFit: 'cover', borderRadius: 20}}
              source={{
                width: '100%',
                height: 120,
                uri: 'https://verocoffee.vn/uploads/news/2014_09/2.jpg',
              }}
            />
          </View>
          <View style={{flex: 0.5}}>
            <Text style={specialText}>
              Buy 1 get 1 free if you buy with Gopay
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

function RenderProductItem({product, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <View style={styleRenderProductItem.container}>
        <View>
          <Image
            style={styleRenderProductItem.imageWrapper}
            source={{
              uri: `${product.image}`,
            }}
          />
        </View>
        <View style={styleRenderProductItem.contentWrapper}>
          <View>
            <Text
              style={[
                styleRenderProductItem.text,
                styleRenderProductItem.textName,
              ]}>
              {product.name}
            </Text>
            <Text style={styleRenderProductItem.text}>
              {product.description}
            </Text>
            <Text
              style={[
                styleRenderProductItem.text,
                styleRenderProductItem.textPrice,
              ]}>
              {product.price + 'K'}
            </Text>
          </View>
          <View style={styleRenderProductItem.addIcon}>
            <AddSvg width={20} height={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styleRenderProductItem = StyleSheet.create({
  container: {
    minWidth: 180,
    marginHorizontal: 10,
    borderRadius: 30,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  imageWrapper: {
    borderRadius: 20,
    aspectRatio: 1.4,
    width: '100%',
    objectFit: 'cover',
  },
  contentWrapper: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
  },
  textName: {
    fontSize: 18,
  },
  textPrice: {
    fontWeight: '700',
  },
  addIcon: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#846046',
  },
});

export default HomeScreen;
