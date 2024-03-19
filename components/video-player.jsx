import { X } from "lucide-react";

export const VideoPlayer = ({ video, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-white p-4 rounded-md w-full max-w-[40em] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2>{video.title}</h2>
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <video controls className="w-full">
              <source src={video.url} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
