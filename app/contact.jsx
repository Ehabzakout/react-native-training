import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/themed-view";
import ThemedText from "../components/themed-text";
import Spacer from "../components/spacer";

const contact = () => {
	return (
		<ThemedView>
			<ThemedText title={true}>contact</ThemedText>
			<Spacer />
			<Link
				href="/"
				style={{ marginVertical: 20, color: "green", fontWeight: "600" }}
			>
				Home
			</Link>
		</ThemedView>
	);
};

export default contact;
