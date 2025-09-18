import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";

import ThemedView from "../components/themed-view";
import Spacer from "../components/spacer";
import ThemedText from "../components/themed-text";

const About = () => {
	return (
		<ThemedView>
			<Text style={[styles.title]}>about</Text>
			<Spacer />
			<Link href="/">
				<ThemedText>Go homepage </ThemedText>
			</Link>
		</ThemedView>
	);
};

export default About;

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", justifyContent: "center" },
	title: {
		fontWeight: "bold",
		color: "#f00",
		fontSize: 20,
		marginHorizontal: "auto",
	},
});
