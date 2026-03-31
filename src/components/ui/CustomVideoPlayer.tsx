"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface CustomVideoPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
}

export function CustomVideoPlayer({ src, poster, autoPlay = false }: CustomVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const currentProgress = (video.currentTime / video.duration) * 100;
            setProgress(currentProgress);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(100);
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleEnded);

        if (autoPlay) {
            video.play().catch(() => setIsPlaying(false)); // Catch autoplay blocks
        }

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("ended", handleEnded);
        };
    }, [autoPlay]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        
        videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
        setProgress(percentage);
    };

    return (
        <div className="relative w-full h-full group bg-black overflow-hidden rounded-inherit">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-contain cursor-pointer"
                onClick={togglePlay}
                playsInline
                disablePictureInPicture
            />

            {/* Overlay Play Button (Solo visible cuando está pausado) */}
            {!isPlaying && (
                <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer pointer-events-none transition-all duration-300"
                >
                    <div className="size-16 md:size-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/40 shadow-[0_0_20px_rgba(127,255,212,0.4)]">
                        <Play className="text-primary w-8 h-8 md:w-10 md:h-10 ml-1 fill-primary" />
                    </div>
                </div>
            )}

            {/* Controles Custom (Progreso y Play/Pause en barra inferior - SIEMPRE VISIBLE) */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end px-4 pb-3">
                
                {/* Botón y Barra de progreso en la misma línea */}
                <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="text-white hover:text-primary transition-colors focus:outline-none">
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>
                    
                    {/* Progress Bar Container */}
                    <div 
                        className="flex-1 h-3 bg-white/20 rounded-full cursor-pointer relative overflow-hidden group/bar"
                        onClick={handleSeek}
                    >
                        {/* Neon Progress Fill */}
                        <div 
                            className="absolute top-0 left-0 h-full bg-primary rounded-full tracking-wider shadow-[0_0_10px_#7FFFD4]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
