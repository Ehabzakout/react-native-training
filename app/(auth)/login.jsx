import { StyleSheet, Text } from "react-native";

import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import ThemedPressable from "../../components/themed-pressable";

const Login = () => {
	const handleSubmit = () => {
		console.log("Login form ");
	};
	return (
		<ThemedView>
			<ThemedText title={true}>login</ThemedText>
			<Spacer height={100} />
			<ThemedPressable onPress={handleSubmit}>
				<Text style={{ color: "white" }}>Login</Text>
			</ThemedPressable>
			<Spacer height={100} />
			<Link href={"/register"}>
				<ThemedText>Register</ThemedText>
			</Link>
		</ThemedView>
	);
};

export default Login;

const styles = StyleSheet.create({});
