import { StyleSheet, TextInput, useColorScheme } from "react-native";

import { COLORS } from "../constants/colors";

const ThemedInput = ({ style, ...props }) => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	return (
		<TextInput
			style={[
				{
					backgroundColor: theme.input,
					color: theme.text,
					borderRadius: 10,
					padding: 20,
				},
				style,
			]}
			placeholderTextColor={"#888"}
			{...props}
		/>
	);
};

export default ThemedInput;

const styles = StyleSheet.create({});
