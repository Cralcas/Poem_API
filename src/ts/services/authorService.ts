import {IPoem} from "../models/IPoem";
import {get} from "./serviceBase";

export const searchAuthor = async (searchText: string): Promise<IPoem> => {
  const url = "https://poetrydb.org/author/" + searchText;

  const data = await get<IPoem>(url);
  console.log(data);

  return data;
};
