import React, { useContext } from "react";
import { userContext } from "../context/user-context";

function useUser() {
	const context = useContext(userContext);
	if (!context) throw new Error("User is not inside provider");
	return context;
}

export default useUser;
