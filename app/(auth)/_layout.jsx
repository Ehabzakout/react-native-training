import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/colors";
import GuestOnly from "../../components/guest-only";

const AuthLayout = () => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS["light"];
	return (
		<GuestOnly>
			<StatusBar style="auto" />
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: theme.navBackground },
					headerTitleAlign: "center",
					headerTintColor: theme.text,
				}}
			/>
		</GuestOnly>
	);
};

export default AuthLayout;

const styles = StyleSheet.create({});
