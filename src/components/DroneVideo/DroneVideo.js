import React, {useState,useRef,useEffect} from 'react'
import DroneVid from '../../assets/Drone-video/droneVideo.mp4'


const DroneDetail = () => {
const videoRef = useRef(null);
    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.play();
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <>
        <div className="w-[100%] h-[42rem] mb-16 relative p-0">
              <video ref={videoRef} controls loop controlsList = "nodownload nofullscreen noremoteplayback"
                className="h-[100%] w-[100%] object-cover"
                src={DroneVid}  height="42rem" />
                <div className='absolute w-[100%] lg:px-32 px-4 py-12 bottom-10 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 '>
                    <div>
                      <div className='capitalize text-lg lg:text-2xl lg:font-semibold'>Unbox the benefits of</div>
                      <div className='lg:text-6xl text-2xl font-bold uppercase'>Agricopter A365</div>
                    </div>
                    <button
                      className="lg:px-4 lg:py-2 px-3 py-1 rounded-3xl bg-white w-32 flex justify-center items-center gap-1">
                        <div className='text-[#216F9B]'>Buy Now</div>
                        <svg className="w-6 h-6 pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12"
                           height="12" fill="none" viewBox="0 0 24 24">
                            <path stroke="#2169FB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                d="M19 12H5m14 0-4 4m4-4-4-4"/>
                      </svg>
                    </button>
                </div>
            </div>
        </>
    )
}    
export default DroneDetail    