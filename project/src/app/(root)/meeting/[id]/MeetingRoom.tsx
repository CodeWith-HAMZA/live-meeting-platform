'use client'
import { useUser } from "@clerk/nextjs";
import { CallControls, PaginatedGridLayout, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

export default function MeetingRoom() {


    return <section className="relative h-screen w-full overflow-hidden pt-4">
        <div className="relative flex size-full items-center justify-center">
            <div className="flex w-full flex-col justify-center items-center">
                <PaginatedGridLayout />
                <CallControls />
            </div>

        </div>

    </section>;
}
