const SortButton = ({ handleSort }) => {
  return (
    <button onClick={handleSort} className="sort-button">
      Sortuj według imienia
    </button>
  );
};

export default SortButton;
