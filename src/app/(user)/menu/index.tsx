import { FlatList } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

const numColumns = 2;
const padding = 10;
const gap = 10;

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem
          product={item}
          padding={padding}
          gap={gap}
          numColumns={numColumns}
        />
      )}
      numColumns={numColumns}
      contentContainerStyle={{ gap, padding }}
      columnWrapperStyle={{ gap }}
    />
  );
}
