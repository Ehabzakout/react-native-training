import { useContext } from "react";
import { booksContext } from "../context/books-context";
export default function useBooks() {
	const context = useContext(booksContext);
	if (!context) throw new Error("no books provider");
	return context;
}
