import React from 'react';
import {View, Text} from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import Button from '../../component/button';
import {useState, useCallback} from 'react';
import {useAppSelector} from '../../hooks/index';
const categoryItem = [
  {
    name: 'Capution',
    icon: 'icon',
  },
  {
    name: 'Gold Brew',
    icon: 'icon',
  },
  {
    name: 'Expresso',
    icon: 'icon',
  },
];
const HomeScreen = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabCategoryItem = useCallback(index => {
    setActiveTab(index);
  }, []);

  const search = useAppSelector(state => state.filter.search);
  console.log(search);
  return (
    <View>
      <Header />
      <Text>Good morning,Dityo</Text>
      <Search />
      <Text>Categories</Text>
      <View style={{flexDirection: 'row'}}>
        {categoryItem.map((item, index) => {
          return (
            <Button
              index={index}
              onPress={handleTabCategoryItem}
              isActive={activeTab === index}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};
export default HomeScreen;
