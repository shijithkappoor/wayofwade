import {
	StyleSheet, View, Image, FlatList,
	Pressable, Text, ScrollView,
	useWindowDimensions, TouchableOpacity, ImageBackground
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {
	// const navigation = useNavigation();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.products);

	return (

		<View>
			<FlatList
				data={products}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => {
							//update selected product
							dispatch(productsSlice.actions.setSelectedProduct(item.id));
							navigation.navigate('Product Details')
						}}
						style={styles.itemContainer}>

						<Image source={{ uri: item.image }}
							style={styles.image} />
						<View style={styles.productFooter}>
							<Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
							<Text style={styles.itemPrice}>${item.price} USD</Text>
						</View>
					</Pressable>

				)}
				numColumns={2}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 20,
	},
	itemContainer: {
		width: "50%",
		padding: 10,
		borderRadius: 10,
		alignItems: 'center',
	},
	productFooter: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginBottom: 20,
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	itemName: {
		fontWeight: '600'
	},
	itemPrice: {
		fontWeight: '500',
		color: 'gray',
	}
});

export default ProductsScreen;