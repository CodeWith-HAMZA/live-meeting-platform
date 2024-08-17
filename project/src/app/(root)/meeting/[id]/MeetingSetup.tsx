'use client'
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

export default function MeetingSetup() {
    const [isMicCamOn, setIsMicCamOn] = useState(false)
    const call = useCall()

    useEffect(() => {

        if (isMicCamOn) {
            call?.camera.disable()
            call?.microphone.disable()
        } else {

            call?.camera.enable()
            call?.microphone.enable()
        }
    }, [call?.camera, call?.microphone, isMicCamOn])
    return <>

        <div className="h-screen flex w-full flex-col items-center justify-center gap-3 ">


            <h1 className="text-3xl font-bold text-white">Setup</h1>
            <VideoPreview className="rounded-xl" />
        </div>
    </>;
}
