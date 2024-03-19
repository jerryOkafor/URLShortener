"use client"

import {useFormState, useFormStatus} from "react-dom";
import {createShortLink} from "@/app/actions";
import {GlobeAltIcon} from "@heroicons/react/24/outline";
import React from "react";
import {ClipboardWithTooltip} from "@/app/components/createShortLinkForm";
import SubmitButton from "@/app/components/submitButton";
import {Button, Typography} from "@/app/components/providers";
import {ShortLink} from "@/app/interfaces";

const initialState: ShortLink = {
    exists: false,
    long_url: "",
    short_url: "",
    hit: 0,
    id: 0,
    created_at: ""
};
export default function CreateShortLinkForm() {
    const [state, formAction] = useFormState(createShortLink, initialState);
    const {pending} = useFormStatus();

    function openInNewTab(url: string) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="flex flex-col  justify-center items-center">
            <h1 className="inline-flex bg-emerald-500 items-center text-4xl text-center font-extrabold dark:text-white">
                Shorten Your Loooong Links :)
                {/*<span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span>*/}
            </h1>
            <div
                className="inline-flex items-center text-1xl font-light text-center text-gray-900 dark:text-white ml-10 mr-10">
                UrlShortener is an efficient and easy-to-use URL shortening service that streamlines your online
                experience.
            </div>
            <form action={formAction} className="w-full">
                <div className="flex flex-col space-y-6 mt-10">
                    <label htmlFor="url" className="w-full mb-1">
                        <h1>Enter your long link below to generate a short link</h1>
                    </label>
                    <div className="flex flex-row w-full space-x-4">
                        <input
                            className="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="url"
                            id="url"
                            name="url"
                            required
                            placeholder="Enter your long url"
                        />
                        <SubmitButton/>
                    </div>


                    {state?.short_url.length > 0 ?
                        <div className="flex flex-row w-full space-x-4">
                            <ClipboardWithTooltip shortUrl={state?.short_url}/>
                            <Button onClick={() => {
                                openInNewTab(state?.short_url);
                            }}
                                    type="button"
                                    className="flex flex-wrap-ns w-full items-center justify-center text-wrap gap-x-3 px-4 py-2.5 lowercase"
                                    placeholder="">
                                <Typography
                                    className="border-r w-full text-left text-white border-gray-400/50 pr-3 font-normal"
                                    variant="small"
                                    placeholder="">
                                    {state?.short_url}
                                </Typography>
                                <GlobeAltIcon className="h-4 w-4 text-white"/>
                            </Button>
                        </div> : ''}
                </div>
            </form>
        </div>

    );
}