import { createContext, useEffect, useState } from "react";
import { account } from "../lib/app-write";
import { ID } from "react-native-appwrite";
import { useRouter } from "expo-router";

export const userContext = createContext();

export default function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	const router = useRouter();
	const login = async (email, password) => {
		try {
			await account.createEmailPasswordSession({ email, password });
			const user = await account.get();
			setUser(user);
			router.replace("/");
		} catch (error) {
			throw new Error(error.message || "Can't login");
		}
	};
	const register = async (email, password) => {
		try {
			await account.create({ userId: ID.unique(), email, password });
			await login(email, password);
		} catch (error) {
			throw new Error(error.message || "Can't Register");
		}
	};

	const logout = async () => {
		await account.deleteSession("current");
		setUser(null);
	};

	const getInitialUser = async () => {
		try {
			const user = await account.get();
			setUser(user);
		} catch (error) {
			setUser(null);
		}
	};
	useEffect(() => {
		getInitialUser();
	}, []);
	return (
		<userContext.Provider value={{ user, login, register, logout }}>
			{children}
		</userContext.Provider>
	);
}
