'use client'
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme, useStreamVideoClient } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import MeetingSetup from "./MeetingSetup";
import MeetingRoom from "./MeetingRoom";
import useGetCallById from "@/hooks/useGetCallById";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";

export default function Meeting({ params }: { params: { id: string } }) {
  const { user, isLoaded } = useUser()

  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, loading } = useGetCallById(params.id)
  const client = useStreamVideoClient()
 
  useEffect(() => {
    if (!isLoaded || loading) return;

    console.log(call, user, isLoaded)
  }, [])
  if (!isLoaded || loading) return <Loader />

  return <>

    <main className="h-screen w-full">
      <StreamCall call={call}>



        <StreamTheme>

          {!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}

        </StreamTheme>
      </StreamCall>

    </main>




  </>

}
