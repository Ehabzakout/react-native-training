import { useRouter } from "expo-router";
import useUser from "./../hooks/use-user";
import { useEffect } from "react";

const UserOnly = ({ children }) => {
	const { user } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) return router.replace("/login");
	}, [user]);
	return children;
};

export default UserOnly;
