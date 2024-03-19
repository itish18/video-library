import { BookmarkButton } from "./bookmark-button";

export const VideoItem = ({ video, onBookmarkToggle, onVideoSelect }) => {
  return (
    <div
      className="p-2 border rounded-md max-w-md px-4 space-y-3 cursor-pointer"
      onClick={() => onVideoSelect(video)}
    >
      <div className="flex items-center justify-between">
        <h3>{video.title}</h3>
        <BookmarkButton
          bookmarked={video.bookmarked}
          onToggle={() => onBookmarkToggle(video.id)}
        />
      </div>
      <video>
        <source src={video.url} type="video/mp4" />
      </video>
    </div>
  );
};
