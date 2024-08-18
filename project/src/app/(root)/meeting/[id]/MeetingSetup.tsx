'use client'
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

export default function MeetingSetup({ setIsSetupComplete }: { setIsSetupComplete: () => void }) {
    const [isMicCamOn, setIsMicCamOn] = useState(false) // got to use toggle beautiful button to turn on off mic and camera
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

        <div className="min-h-[70vh] flex w-full flex-col items-center justify-center gap-3 ">


            <h1 className="text-4xl font-bold text-white">Setup</h1>
            <VideoPreview className="rounded-xl" />
            <Button size={'lg'} onClick={() => {
                if (call) {

                    call?.join()
                    setIsSetupComplete(true)
                }

            }}>Join Meeting</Button>
        </div>
    </>;
}
