"use client";

import { useState } from "react";

import { FilterBar } from "@/components/filter-bar";
import { VideoList } from "@/components/video-list";
import { VideoPlayer } from "@/components/video-player";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleBookmark = (id) => {
    const updatedVideos = videos.map((video) =>
      video.id === id ? { ...video, bookmarked: !video.bookmarked } : video
    );
    setVideos(updatedVideos);
  };

  const openVideoPlayer = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  const filteredVideos = bookmarkedOnly
    ? videos.filter((video) => video.bookmarked)
    : videos;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const newVideo = {
      id: videos.length + 1,
      title: file.name,
      url: URL.createObjectURL(file),
      bookmarked: false,
    };
    setVideos((prevVideos) => [...prevVideos, newVideo]);

    e.target.value = "";
  };

  return (
    <>
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={closeVideoPlayer} />
      )}
      <div className="max-w-[70%] mx-auto pt-20 h-full space-y-8">
        <h1 className="text-center font-bold text-4xl">Video Library</h1>
        <div className="flex items-center justify-between">
          <input type="file" accept="video/*" onChange={handleFileChange} />
          <FilterBar
            bookmarkedOnly={bookmarkedOnly}
            onToggle={() => setBookmarkedOnly(!bookmarkedOnly)}
          />
        </div>
        <VideoList
          videos={filteredVideos}
          onBookmarkToggle={toggleBookmark}
          onVideoSelect={openVideoPlayer}
        />
      </div>
    </>
  );
}
