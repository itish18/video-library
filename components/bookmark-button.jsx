import { Bookmark } from "lucide-react";

export const BookmarkButton = ({ bookmarked, onToggle }) => {
  return (
    <button
      onClick={(e) => {
        onToggle();
        e.stopPropagation();
      }}
    >
      <Bookmark fill={bookmarked ? "black" : "transparent"} />
    </button>
  );
};
