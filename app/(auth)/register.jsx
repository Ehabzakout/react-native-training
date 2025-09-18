import { StyleSheet, Text, View } from "react-native";

import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import ThemedPressable from "../../components/themed-pressable";
import Spacer from "../../components/spacer";

const Register = () => {
	const handleSubmit = () => {
		console.log("Register form ");
	};
	return (
		<ThemedView style={styles.container}>
			<ThemedText title={true}>Register</ThemedText>
			<Spacer height={100} />
			<View style={{ width: "50%" }}>
				<ThemedPressable onPress={handleSubmit}>
					<Text style={{ color: "white" }}>Register</Text>
				</ThemedPressable>
			</View>
			<Spacer height={100} />
			<Link href={"/"}>
				<ThemedText title={true}>Homepage</ThemedText>
			</Link>
			<Spacer />
			<Link href={"/login"}>
				<ThemedText>Login</ThemedText>
			</Link>
		</ThemedView>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
