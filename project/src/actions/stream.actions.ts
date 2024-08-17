'use server'

import { streamApiKey, streamApiSecret } from "@/constants"
import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from '@stream-io/node-sdk';
 


export const tokenProvider = async () => {
    const user = await currentUser()
    if (!user)
        throw new Error("User Not Logged In")
    if (!streamApiKey)
        throw new Error("Stream API Key is not found")
    if (!streamApiSecret)
        throw new Error("Stream API Secret is not found")

    const client = new StreamClient(streamApiKey, streamApiSecret);
    const currentTimeInSeconds = Date.now() / 1000
    const expirationDate = Math.round(currentTimeInSeconds) + 60 * 60
    const issuedDate = Math.floor(Date.now() / 1000) - 60



    const token = client.createToken(user.id, expirationDate, issuedDate)
    return token;
}