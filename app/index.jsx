import { StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";
import background from "../assets/images/background.png";
import ThemedText from "../components/themed-text";
import ThemedView from "../components/themed-view";
import Spacer from "../components/spacer";

export default function Home() {
	return (
		<ThemedView>
			<Image
				source={background}
				style={{ height: "50%", position: "relative", objectFit: "contain" }}
			/>

			<View style={{ position: "absolute", top: "50%" }}>
				<Link href="/about">
					<ThemedText title={true}>About page</ThemedText>
				</Link>
				<Spacer />
				<Link href="/contact">
					<ThemedText title={true}>contact page</ThemedText>
				</Link>
				<Spacer />
				<Link href="/login">
					<ThemedText style={{ fontWeight: "bold", fontSize: 18 }}>
						Login
					</ThemedText>
				</Link>
			</View>
		</ThemedView>
	);
}
