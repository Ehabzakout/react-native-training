import { useLocalSearchParams } from "expo-router";
import ThemedText from "../../../components/themed-text";
import ThemedView from "../../../components/themed-view";
import { useEffect, useState } from "react";
import useBooks from "../../../hooks/use-books";
import ThemedLoader from "../../../components/themed-loader";
import ThemedCard from "../../../components/themed-card";
import { StyleSheet } from "react-native";

const BooksDetails = () => {
	const { id } = useLocalSearchParams();
	const [book, setBook] = useState(null);
	const [loading, setLoading] = useState(true);

	const { getBookById } = useBooks();

	useEffect(() => {
		if (book == null) setLoading(true);
		async function loadBook() {
			setLoading(true);
			const payload = await getBookById(id);
			setBook(payload);
			setLoading(false);
		}

		loadBook();
	}, [id]);
	return (
		<ThemedLoader status={loading}>
			<ThemedView safe={true}>
				<ThemedCard style={styles.card}>
					<ThemedText
						title={true}
						style={{ marginBottom: 10, textTransform: "capitalize" }}
					>
						{book?.title}
					</ThemedText>
					<ThemedText style={{ textTransform: "capitalize" }}>
						{book?.author}
					</ThemedText>
					<ThemedText>{book?.description}</ThemedText>
				</ThemedCard>
			</ThemedView>
		</ThemedLoader>
	);
};

export default BooksDetails;

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
