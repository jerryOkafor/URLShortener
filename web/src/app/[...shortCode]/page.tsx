'use client'

import React, {useEffect, useRef, useState} from "react";
import {getShortLink} from "@/app/actions";
import {Spinner} from "@material-tailwind/react";
import "tailwindcss-react-native/types.d";

type Params = {
    params: {
        shortCode: string;
    };
};

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');

}
export default function Links({params}: Params) {
    const handledRedirect = useRef(false);
    const [isFetching, setFetching] = useState(true);
    const [isError, setIsError] = useState("")

    const fetchData = () => {
        setFetching(true);
        getShortLink(params.shortCode).then((data) => {
            setFetching(false);
            openInNewTab(data.long_url)
            window.close()
        }).catch((error) => {
            setFetching(false);
            console.error('Error fetching data:', error);
            setIsError("Error fetching data")
        })

    };

    useEffect(() => {
        if (!handledRedirect.current) {
            handledRedirect.current = true

            fetchData();
        }
    }, [params]);


    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto">
                    <Spinner color="red" className="h-12 w-12 justify-self-center"/>
                </div>
            </div>
        </>
    )
}