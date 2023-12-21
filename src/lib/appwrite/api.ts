import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export const createUserAccount = ({name, password, email}: INewUser) => {
  try {
    return account.create(ID.unique(), email, password, name)
  } catch (error) {
    console.log(error);
  }
};