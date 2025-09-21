import { StyleSheet, Text } from "react-native";

const GeneralError = ({ style, ...props }) => {
	return <Text style={[styles.error, style]} {...props} />;
};

export default GeneralError;

const styles = StyleSheet.create({
	error: {
		color: "#f00",
		width: "100%",
		backgroundColor: "rgba(245, 225, 225, 1)",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginVertical: 10,
		textAlign: "center",
	},
});
