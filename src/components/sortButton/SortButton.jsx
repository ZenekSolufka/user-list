import './SortButton.css'

const SortButton = ({ handleSort }) => {
  return (
    <button
      onClick={handleSort}
      className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
    >
      Sortuj według imienia
    </button>
  );
};

export default SortButton;