import {
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
} from "react-native";

import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { Link } from "expo-router";
import Spacer from "../../components/spacer";
import ThemedPressable from "../../components/themed-pressable";
import ThemedInput from "../../components/themed-input";
import { useState } from "react";
import useUser from "../../hooks/use-user";
import ThemedLoader from "../../components/themed-loader";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { login } = useUser();

	const handleSubmit = async () => {
		setError(null);
		setLoading(true);

		try {
			await login(email, password);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedLoader status={loading}>
				<ThemedView style={{ alignItems: "center", justifyContent: "center" }}>
					<ThemedText title={true}>login</ThemedText>
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
					<ThemedPressable onPress={handleSubmit} style={{ width: "80%" }}>
						<Text style={{ color: "white" }}>Login</Text>
					</ThemedPressable>
					<Spacer />
					{error && <Text style={styles.error}>{error}</Text>}
					<Spacer height={100} />
					<Link href={"/register"}>
						<ThemedText>
							Don't have account?
							<Text
								style={{
									color: "blue",
									textDecorationLine: "underline",
								}}
							>
								Register
							</Text>
						</ThemedText>
					</Link>
				</ThemedView>
			</ThemedLoader>
		</TouchableWithoutFeedback>
	);
};

export default Login;

const styles = StyleSheet.create({
	error: {
		color: "#f00",
		maxWidth: "80%",
		backgroundColor: "rgba(245, 225, 225, 1)",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
});
