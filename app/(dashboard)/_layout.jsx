import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const DashboardLayout = () => {
	const colorScheme = useColorScheme();
	const theme = COLORS[colorScheme] ?? COLORS.light;
	return (
		<>
			<StatusBar style="auto" />
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: theme.navBackground,
						paddingTop: 15,
						height: 100,
						borderTopWidth: 0,
					},
					tabBarInactiveTintColor: theme.text,
					tabBarActiveTintColor: COLORS.primary,
					tabBarLabelStyle: { fontSize: 16, fontWeight: 600, marginTop: 10 },
				}}
			>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name={focused ? "person" : "person-outline"}
								size={24}
								color={focused ? COLORS.primary : theme.text}
							></Ionicons>
						),
					}}
				/>
				<Tabs.Screen
					name="books"
					options={{
						title: "Books",
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name={focused ? "book" : "book-outline"}
								size={24}
								color={focused ? COLORS.primary : theme.text}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name={focused ? "create" : "create-outline"}
								size={24}
								color={focused ? COLORS.primary : theme.text}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default DashboardLayout;
