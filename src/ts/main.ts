import "./../css/style.css";
import {searchAuthor} from "./services/authorService";

document
  .getElementById("searchForm")
  ?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const searchText = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;

    const author = await searchAuthor(searchText);

    return author;
  });
