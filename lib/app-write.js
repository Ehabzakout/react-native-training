import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
	.setEndpoint("https://fra.cloud.appwrite.io/v1")
	.setProject("68cac38c002442db010c")
	.setPlatform("dev.training.ehab");

export const account = new Account(client);
export const avatar = new Avatars(client);
export const dataBase = new Databases(client);
