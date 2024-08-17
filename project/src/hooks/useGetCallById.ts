import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
















export default function useGetCallById(id: string | string[]) {
    const [call, setCall] = useState<Call>();
    const [loading, setLoading] = useState(true);

    const client = useStreamVideoClient()


    useEffect(() => {

        if (!client) return;


        const loadCall = async () => {
            try {

                const { calls } = await client?.queryCalls({ filter_conditions: { id } });

                if (calls.length > 0) setCall(calls[0]);

                setLoading(false);
            } catch (error) {
                console.log(error, ' error while fetching the call by id')
                setLoading(false);


            }
        }

        loadCall()
    }, [client, id])

    return { call, loading }
} 