import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  handleSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit }) => {
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;

    if (query.trim() === "") {
      toast.error("You need enter something");
      return;
    }
    handleSubmit(query);
    form.reset();
  };

  return (
    <div className={s.header}>
      <form onSubmit={handelSubmit}>
        <div>
          <button className={s.btn} type="submit">
            <BiSearch className={s.svg} />
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="on"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;