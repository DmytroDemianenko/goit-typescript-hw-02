import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
const SearchBar = ({ handleSubmit }) => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const query = form.elements.query.value;
    if (form.elements.query.value.trim() === "") {
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
