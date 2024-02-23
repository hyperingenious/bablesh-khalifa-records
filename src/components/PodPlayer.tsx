import { Pause, Play } from "@phosphor-icons/react";
import styles from './PodPlayer.module.css';
import React, { useEffect, useRef, useState } from "react";

export default function PodPlayer() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [rangeValue, setRangeValue] = useState<number>(0)

    const audio = useRef(null);
    const progress = useRef(null)

    useEffect(function () {
        if (isPlaying) {
            audio.current.play()
        }
        if (!isPlaying) {
            audio.current.pause();
        }

    }, [isPlaying])

    function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRangeValue(Number(e.target.value))
        // console.log('hi')
        // console.log(audio.current.currentTime, audio.current.duration)
        // audio.current.currentTime = audio.current.duration * rangeValue / 100;
    }

    function handleTimeUpdate(e: React.SyntheticEvent<HTMLAudioElement>) {
        const duration = e.currentTarget.duration;
        const currentTime = e.currentTarget.currentTime;
        const timeInPercent = currentTime / duration * 100
        setRangeValue(timeInPercent);

    }

    function handleThumbRelease(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        setRangeValue(Number(e.currentTarget.value))
        audio.current.currentTime = audio.current.duration * rangeValue / 100;
    }

    return (
        <div className="w-[270px] rounded-md bg-[#2B254D] p-5 fixed top-5 right-5">

            <div className="flex gap-4 items-center">
                <div className="w-[80px] min-w-[80px] h-[80px] rounded-md" style={{
                    backgroundImage: 'url(https://pbs.twimg.com/profile_images/1753879956545781760/MHU_frW7_400x400.jpg)', backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'noRepeat'
                }}></div>
                <h1 className="text-lg leading-[1.2] font-normal text-white">A constructive talk on capitalism and it’s essentials...</h1>
            </div>
            <p className="mt-2 font-medium text-gray-300 text-sm">Bablesh Khalifa & Raj Bansal</p>
            <p className=" font-medium text-gray-500 text-xs">Brett Hall and I interview David Deutsch, physicist and author of The Beginning of Infinity. Also see The Deutsch Files I and The Deutsch if you know the rules you can win hello well friends I’m the skeleton  Files...</p>


            <div className="flex mt-2 items-center">

                <div className="w-7 h-7 mr-1 bg-white rounded-full flex justify-center items-center" onClick={() => setIsPlaying(playStatus => !playStatus)}>
                    {!isPlaying && <Play size={15} color="#121212" weight="fill" />}
                    {isPlaying && <Pause size={13} color="#121212" weight="fill" />}
                </div>

                <audio controls className="sr-only" ref={audio} onTimeUpdate={handleTimeUpdate} >
                    <source src="../../audio.mp3" type="audio/mp3" />
                </audio>

                <input min={0} max={100} ref={progress} onInput={handleRangeChange} value={rangeValue} type="range" name="podProgress" className={styles.podProgress} onMouseUp={handleThumbRelease} />

            </div>
        </div >
    )
}
