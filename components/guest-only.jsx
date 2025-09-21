import { View, Text } from "react-native";
import React, { useEffect } from "react";
import useUser from "../hooks/use-user";
import { useRouter } from "expo-router";

const GuestOnly = ({ children }) => {
	const { user } = useUser();
	const router = useRouter();
	useEffect(() => {
		if (user) return router.replace("/");
	}, [user]);
	return children;
};

export default GuestOnly;
