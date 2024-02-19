import React from "react";
import { useRef, useEffect } from "react";

interface Video {
  stream: MediaStream | null;
  muted: boolean;
}

export default function Video({ stream, muted }: Video) {
  const videoEl = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoEl.current;
    if (video&&stream instanceof MediaStream) {
      video.srcObject = stream;

    //   for certain browsers, the video needs to be played to start the stream
      video.onloadedmetadata = () => {
        video.play();
      };
    }
    
  }, [stream]);

  return (
    <div>
      <video
        ref={videoEl}
        height="95%"
        width="95%"
        playsInline
        muted={muted}
        autoPlay
      />
    </div>
  );
}
