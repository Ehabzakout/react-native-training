import { View, StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = true, ...props }) => {
	const colorScheme = useColorScheme();
	const insets = useSafeAreaInsets();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	if (!safe)
		return (
			<View
				style={[
					{
						backgroundColor: theme.background,
						flex: 1,
					},
					style,
				]}
				{...props}
			/>
		);
	return (
		<View
			style={[
				{
					backgroundColor: theme.background,
					flex: 1,
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
				},
				style,
			]}
			{...props}
		/>
	);
};

export default ThemedView;
