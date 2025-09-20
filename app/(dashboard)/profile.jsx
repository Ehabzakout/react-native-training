import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import Spacer from "../../components/spacer";
import ThemedPressable from "../../components/themed-pressable";
import useUser from "../../hooks/use-user";
import { Link } from "expo-router";

const Profile = () => {
	const { logout, user } = useUser();
	return (
		<ThemedView style={{ alignItems: "center", justifyContent: "center" }}>
			<ThemedText>Profile</ThemedText>
			<Spacer />
			{user && (
				<View style={{ width: "80%", alignItems: "center" }}>
					<ThemedText>{user.email}</ThemedText>
					<Spacer />
					<ThemedPressable onPress={logout} style={{ width: "100%" }}>
						<Text>Logout</Text>
					</ThemedPressable>
				</View>
			)}
			<Spacer />
			<Link href="/">{<ThemedText>Home</ThemedText>}</Link>
		</ThemedView>
	);
};

export default Profile;

const styles = StyleSheet.create({});
