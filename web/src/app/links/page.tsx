'use client'

import Header from "@/app/components/header";
import Container from "@/app/components/container";
import Link from "next/link";
import {ShortLink} from "@/app/interfaces";
import {showAllLinks} from "@/app/actions";
import React, {useEffect, useState} from "react";
import Spinner from "@material-tailwind/react/components/Spinner";

export default function Links() {
    const [data, setData] = useState<[ShortLink] | null>(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        showAllLinks()
            .then((res) => {
                setLoading(false)
                setData(res)
            }).catch((error) => {
            setLoading(false)
        })
    }, []);

    if (isLoading) return (
        <>
            <div className="flex h-screen">
                <div className="m-auto">
                    <Spinner color="red" className="h-12 w-12 justify-self-center"/>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Header/>
            <Container>
                <div className="flex-col w-full">
                    <p className="text-red-300">List of all generated short links</p>
                </div>

                {data?.length ? (
                    <ul className="mt-8 flex-col space-y-4">
                        {data.map((shortLink) => (
                            <li key={shortLink.id} className="flex flex-row justify-between space-x-2 w-full">
                                <Link href={shortLink.short_url}
                                      target="_blank">{shortLink.short_url}</Link>
                                <p>Clicks: {shortLink.hit}</p>
                            </li>
                        ))}
                    </ul>
                ) : <EmptyState/>}
            </Container>
        </>
    )
}

function EmptyState() {
    return (
        <>
            <div>
                <p>No link generated yet, go home and generate some links</p>
            </div>
        </>
    )
}