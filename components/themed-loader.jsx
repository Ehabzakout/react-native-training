import { ActivityIndicator, useColorScheme, View } from "react-native";
import { COLORS } from "../constants/colors";
import ThemedView from "./themed-view";

const ThemedLoader = ({ children, status = false }) => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	return (
		<>
			{status ? (
				<ThemedView
					style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
				>
					<ActivityIndicator size="large" color={theme.text} />
				</ThemedView>
			) : (
				children
			)}
		</>
	);
};

export default ThemedLoader;
