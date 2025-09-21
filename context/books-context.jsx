import { dataBase, client } from "../lib/app-write";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { createContext, useEffect, useState } from "react";
import useUser from "./../hooks/use-user";

export const booksContext = createContext([]);
const databaseID = "68cf331c0017fd29c137";
const collectionId = "books";
export default function BooksProvider({ children }) {
	const { user } = useUser();
	const [books, setBooks] = useState([]);
	async function getBooks() {
		try {
			const response = await dataBase.listDocuments(databaseID, collectionId, [
				Query.equal("userId", user.$id),
			]);

			setBooks(response.documents);
		} catch (error) {
			console.log(error.message);
		}
	}
	async function getBookById(id) {
		try {
			const response = await dataBase.getDocument(databaseID, collectionId, id);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error.message);
		}
	}
	async function createBook(data) {
		try {
			await dataBase.createDocument(
				databaseID,
				collectionId,
				ID.unique(),
				{ ...data, userId: user.$id },
				[
					Permission.read(Role.user(user.$id)),
					Permission.update(Role.user(user.$id)),
					Permission.delete(Role.user(user.$id)),
				]
			);
		} catch (error) {
			console.log(error.message);
		}
	}
	async function deleteBook(id) {
		try {
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		let unsubscribe;
		const channel = `databases.${databaseID}.collections.${collectionId}.documents`;

		if (user) {
			getBooks();
			unsubscribe = client.subscribe(channel, (response) => {
				const { payload, events } = response;
				if (events[0].includes("create")) {
					setBooks((prev) => [...prev, payload]);
				}
			});
		} else setBooks([]);

		return () => {
			if (unsubscribe) unsubscribe();
		};
	}, [user]);
	return (
		<booksContext.Provider
			value={{ createBook, getBookById, getBooks, deleteBook, books }}
		>
			{children}
		</booksContext.Provider>
	);
}
