import {
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	Text,
	ActivityIndicator,
} from "react-native";

import ThemedView from "../../components/themed-view";
import ThemedText from "../../components/themed-text";
import { useState } from "react";
import ThemedInput from "../../components/themed-input";
import Spacer from "../../components/spacer";

import ThemedPressable from "../../components/themed-pressable";
import useBooks from "../../hooks/use-books";
import { useRouter } from "expo-router";
import GeneralError from "./../../components/global-error";

const Create = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { createBook } = useBooks();
	const router = useRouter();
	const handleSubmit = async () => {
		setLoading(true);
		setError(null);
		try {
			if (
				title.trim() === "" ||
				author.trim() === "" ||
				description.trim() === ""
			)
				throw new Error("Empty input fields");
			await createBook({ title, author, description });

			router.replace("/books");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView style={styles.form}>
				<ThemedText title={true}>Create Book</ThemedText>
				<Spacer />
				<ThemedInput
					style={{ width: "100%", marginVertical: 10 }}
					placeholder="Title"
					value={title}
					onChangeText={setTitle}
				/>
				<ThemedInput
					style={{ width: "100%", marginVertical: 10 }}
					placeholder="Author"
					value={author}
					onChangeText={setAuthor}
				/>
				<ThemedInput
					style={styles.multiline}
					placeholder="description"
					value={description}
					onChangeText={setDescription}
					multiline={true}
				/>
				<Spacer />

				{error && <GeneralError>{error}</GeneralError>}
				<ThemedPressable
					disabled={loading}
					style={{ width: "100%" }}
					onPress={handleSubmit}
				>
					<Text style={{ color: "#f2f2f2" }}>
						{loading ? (
							<ActivityIndicator size="small" color="#f2f2f2" />
						) : (
							"Create book"
						)}
					</Text>
				</ThemedPressable>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
};

export default Create;

const styles = StyleSheet.create({
	form: {
		width: "80%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: "auto",
	},
	multiline: {
		width: "100%",
		marginVertical: 10,
		height: 150,
		textAlignVertical: "top",
	},
});
