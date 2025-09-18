import { View, StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedView = ({ style, ...props }) => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	return (
		<View
			style={[
				{
					backgroundColor: theme.background,
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				},
				style,
			]}
			{...props}
		/>
	);
};

export default ThemedView;
