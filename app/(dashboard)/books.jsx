import { StyleSheet, FlatList, Pressable } from "react-native";

import ThemedView from "../../components/themed-view";
import useBooks from "../../hooks/use-books";
import ThemedCard from "../../components/themed-card";
import ThemedText from "../../components/themed-text";
import { Link, useRouter } from "expo-router";

const Books = () => {
	const { books } = useBooks();
	const router = useRouter();
	return (
		<ThemedView>
			<FlatList
				data={books}
				keyExtractor={(item) => item.$id}
				contentContainerStyle={{ marginVertical: 20 }}
				renderItem={({ item }) => (
					<Pressable onPress={() => router.push(`/book/${item.$id}`)}>
						<ThemedCard style={styles.card}>
							<ThemedText
								title={true}
								style={{ marginBottom: 10, textTransform: "capitalize" }}
							>
								{item.title}
							</ThemedText>
							<ThemedText style={{ textTransform: "capitalize" }}>
								{item.author}
							</ThemedText>
							<ThemedText>{item.description}</ThemedText>
						</ThemedCard>
					</Pressable>
				)}
			/>
		</ThemedView>
	);
};

export default Books;

const styles = StyleSheet.create({
	card: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		width: "80%",
		paddingLeft: 20,
		marginLeft: 20,
		gap: 5,
	},
});
