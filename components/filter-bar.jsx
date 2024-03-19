export const FilterBar = ({ bookmarkedOnly, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="border-2 p-2 rounded-md font-semibold shadow-md"
    >
      {bookmarkedOnly ? "Show All Videos" : "Show Bookmarked Videos Only"}
    </button>
  );
};
