'use client'
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/shared/Loader';
import { streamApiKey } from '@/constants';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    TokenProvider,
    User,
} from '@stream-io/video-react-sdk';
import React from 'react';

// const userId = 'user-id';
// const token = 'authentication-token';
// const user: User = { id: userId };

// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call('default', 'my-first-call');
// call.join({ create: true });

export default function StreamClientProvider({ children }: { children: React.ReactNode }) {
    const [videoClient, setVideoClient] = React.useState<StreamVideoClient>();
    const { user, isLoaded } = useUser()


    React.useEffect(() => {

        if (!user || !isLoaded) return;

        if (!streamApiKey) throw new Error('No Stream Api Key Provided')

        const client = new StreamVideoClient({
            apiKey: streamApiKey,
            user: {
                id: user?.id,
                image: user?.imageUrl,
                name: user?.username || user?.id,
            },
            // token:"asetuh"
            tokenProvider: tokenProvider
        });
        
        setVideoClient(client)


    }, [user, isLoaded])

    if (!videoClient) {
        return <Loader />
    }
    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};