import { Text, FlatList, StyleSheet, View, Pressable } from 'react-native';

import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryCharge, selectSubTotal, selectTotal } from '../store/cartSlice';

const ShoppingCartTotals = () => {
	const subtotal = useSelector(selectSubTotal);
	const deliveryCharge = useSelector(selectDeliveryCharge);
	const total = useSelector(selectTotal);
	return (
		<View style={styles.totalsContainer}>
			<View style={styles.row}>
				<Text style={styles.text}>Subtotal</Text>
				<Text style={styles.text}>{subtotal} CAD</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.text}>Delivery</Text>
				<Text style={styles.text}>{deliveryCharge} CAD</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.textBold}>Total</Text>
				<Text style={styles.textBold}>{total} CAD</Text>
			</View>
		</View>
	);
};

const ShoppingCart = () => {
	const cart = useSelector((state) => state.cart.items)
	return (
		<>
			<FlatList
				data={cart}
				renderItem={({ item }) => (<CartListItem cartItem={item} />)}
				ListFooterComponent={ShoppingCartTotals}
			/>
			<Pressable
				style={styles.button}>
				<Text style={styles.buttonText}>Checkout</Text>
			</Pressable >
		</>

	);
}
const styles = StyleSheet.create({
	totalsContainer: {
		margin: 20,
		paddingTop: 10,
		borderColor: 'gainsboro',
		borderTopWidth: 1
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 2
	},
	text: {
		fontSize: 16,
		color: 'gray'
	},
	textBold: {
		fontSize: 16,
		fontWeight: '600'
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 16
	},
	button: {
		position: 'absolute',
		backgroundColor: 'black',
		bottom: 30,
		width: '90%',
		alignSelf: 'center',
		padding: 20,
		borderRadius: 100,
		alignItems: 'center'
	},
});
export default ShoppingCart;