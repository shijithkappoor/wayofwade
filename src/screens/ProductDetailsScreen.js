import {
	StyleSheet, View, Image, FlatList, Text,
	useWindowDimensions,
	ScrollView,
	Pressable,
	LinearGradient,
	TouchableOpacity,
	Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cartSlice } from '../store/cartSlice';

const ProductDetailsScreen = () => {
	const product = useSelector((state) => state.products.selectedProduct);
	const dispatch = useDispatch();
	const { width } = useWindowDimensions();
	const addToCart = () => {
		dispatch(cartSlice.actions.addCartItem({ product }));
	}
	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				{/*Image Carousel*/}
				<FlatList
					data={product.images}
					renderItem={({ item }) => (
						<Image source={{ uri: item }}
							style={{ width, aspectRatio: 1 }} />
					)}
					horizontal
					// showsHorizontalScrollIndicator={false}
					pagingEnabled
				/>

				<ScrollView style={{ padding: 20 }}>
					{/* title */}
					<Text style={styles.title}>{product.name}</Text>
					{/* price */}
					<Text style={styles.price}>${product.price}</Text>
					{/* size */}
					<Text style={styles.price}>Available sizes</Text>
					<ScrollView horizontal contentContainerStyle={{ alignItems: 'flex-start' }}>{
						product.sizes.map((item) => (
							<TouchableOpacity style={styles.appButtonContainer}>
								<Text style={styles.appButtonText}>{item}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>

					{/* description */}
					<Text style={styles.description}>{product.description}</Text>
				</ScrollView>
			</ScrollView>

			{/* Add to cart */}
			<Pressable
				style={styles.button}
				onPress={addToCart}>
				<Text style={styles.buttonText}>Add to cart</Text>
			</Pressable>

			{/* Navigation icon */}

		</View >
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 34,
		fontWeight: '600',
		marginVertical: 10,
	},
	price: {
		fontWeight: '500',
		fontSize: 16
	},
	description: {
		marginVertical: 10,
		fontSize: 18,
		lineHeight: 25,
		fontWeight: '300'
	},
	button: {
		position: 'absolute',
		backgroundColor: 'black',
		bottom: 30,
		width: '90%',
		alignSelf: 'center',
		padding: 20,
		borderRadius: 100,
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16
	},
	appButtonContainer: {
		flexDirection: 'row',
		marginRight: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',

	},
	appButtonText: {
		color: "black",
		fontWeight: "bold",
		textTransform: "uppercase",
		borderWidth: 1,
		padding: 10,
		borderColor: 'gray'
	}
});

export default ProductDetailsScreen;