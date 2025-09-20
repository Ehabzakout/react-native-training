import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";
import UserProvider from "../context/user-context";

const RootLayout = () => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS["light"];
	return (
		<UserProvider>
			<StatusBar style="auto" />
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: theme.navBackground },
					headerTintColor: theme.text,
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen
					name="index"
					options={{
						title: "Home",
						headerBackButtonDisplayMode: "generic",
						headerBackButtonMenuEnabled: false,
						headerBackVisible: false,
					}}
				></Stack.Screen>
				<Stack.Screen
					name="(auth)"
					options={{ headerShown: false }}
				></Stack.Screen>
				<Stack.Screen name="about" options={{ title: "About" }}></Stack.Screen>
				<Stack.Screen
					name="(dashboard)"
					options={{ headerShown: false }}
				></Stack.Screen>
			</Stack>
		</UserProvider>
	);
};

export default RootLayout;
