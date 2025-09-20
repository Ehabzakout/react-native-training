import { StyleSheet, Text, View, Pressable } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedPressable = ({ style, ...props }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
			{...props}
		/>
	);
};

export default ThemedPressable;

const styles = StyleSheet.create({
	btn: {
		padding: 15,
		color: "#ffff",
		alignItems: "center",
		backgroundColor: COLORS.primary,
		borderRadius: 20,
	},
	pressed: {
		opacity: 0.8,
	},
});
