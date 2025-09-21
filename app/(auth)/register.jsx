import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import ThemedPressable from "../../components/themed-pressable";
import Spacer from "../../components/spacer";
import { useState } from "react";
import ThemedInput from "../../components/themed-input";
import useUser from "../../hooks/use-user";
import ThemedLoader from "../../components/themed-loader";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { register, user } = useUser();
	const handleSubmit = async () => {
		setLoading(true);
		try {
			await register(email, password);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedLoader status={loading}>
				<ThemedView style={styles.container}>
					<ThemedText title={true}>Register</ThemedText>
					<Spacer height={100} />
					<ThemedInput
						placeholder="Email"
						keyboardType="email-address"
						style={{ width: "80%", marginBottom: 10 }}
						value={email}
						onChangeText={setEmail}
					/>
					<ThemedInput
						placeholder="Password"
						style={{ width: "80%", marginBottom: 10 }}
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
					<Spacer />
					<View style={{ width: "50%" }}>
						<ThemedPressable onPress={handleSubmit}>
							<Text style={{ color: "white" }}>Register</Text>
						</ThemedPressable>
					</View>
					<Spacer />
					{error && <Text style={styles.error}>{error}</Text>}
					<Spacer height={100} />
					<Link href={"/"}>
						<ThemedText title={true}>Homepage</ThemedText>
					</Link>
					<Spacer />
					<Link href={"/login"}>
						<ThemedText>Login</ThemedText>
					</Link>
				</ThemedView>
			</ThemedLoader>
		</TouchableWithoutFeedback>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	error: {
		color: "#f00",
		maxWidth: "80%",
		backgroundColor: "rgba(245, 225, 225, 1)",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
});
