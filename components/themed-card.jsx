import { StyleSheet, useColorScheme, View } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedCard = ({ style, ...props }) => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	return (
		<View
			style={[
				{
					backgroundColor: theme.input,
					color: theme.text,
					borderLeftColor: COLORS.primary,
					borderLeftWidth: 5,
					borderRadius: 10,
					padding: 10,
					marginVertical: 10,
				},
				style,
			]}
			{...props}
		/>
	);
};

export default ThemedCard;

const styles = StyleSheet.create({});
