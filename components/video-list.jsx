import { VideoItem } from "./video-item";

export const VideoList = ({ videos, onBookmarkToggle, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onBookmarkToggle={onBookmarkToggle}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
};
