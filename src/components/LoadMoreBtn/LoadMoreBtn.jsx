import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ increasePage }) => {
  return (
    <div>
      <button className={s.btn} type="button" onClick={increasePage}>
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
