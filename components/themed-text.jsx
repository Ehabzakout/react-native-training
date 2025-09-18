import { Text, useColorScheme, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedText = ({ style, title = false, ...props }) => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;

	const titleStyle = title ? styles.title : null;
	return <Text style={[{ color: theme.text }, titleStyle, style]} {...props} />;
};

export default ThemedText;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
