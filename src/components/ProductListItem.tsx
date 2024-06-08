import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '../types';

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
  padding: number;
  gap: number;
  numColumns: number;
};

const ProductListItem = ({
  product,
  padding,
  gap,
  numColumns,
}: ProductListItemProps) => {
  const WIDTH = Dimensions.get('window').width;

  return (
    <View
      style={[
        styles.container,
        {
          maxWidth: (WIDTH - padding * 2 - gap) / numColumns,
        },
      ]}
    >
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
