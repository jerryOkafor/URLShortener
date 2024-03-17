"use client";

import {useFormState, useFormStatus} from "react-dom";
import {createShortLink} from "@/app/actions";
import React, {useState} from "react";
import {ShortLink} from "@/app/interfaces";
import {Button, Tooltip} from "./providers";
import {Typography} from "@material-tailwind/react";
import {CheckIcon, DocumentDuplicateIcon, GlobeAltIcon} from "@heroicons/react/24/outline";
import {useCopyToClipboard} from "usehooks-ts";

const initialState: ShortLink = {
    exists: false,
    long_url: "",
    short_url: "",
    hit: 0,
    id: 0,
    created_at: ""
};

function Loading() {
    return (
        <>
            <svg className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                 fill="none"
                 viewBox="0 0 24 24">
                <circle className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                < path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing ...
        </>


    )
}

type ClipboardProps = {
    // children: React.ReactNode
    shortUrl: string
}

export function ClipboardWithTooltip({shortUrl}: ClipboardProps) {
    const [value, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    return (
        <Tooltip content={copied ? "Copied" : "Copy"}>
            <Button
                onMouseLeave={() => setCopied(false)}
                onClick={() => {
                    copy(shortUrl);
                    setCopied(true);
                }}
                className="flex flex-wrap-ns items-center text-wrap gap-x-3 px-4 py-2.5 lowercase">

                <Typography
                    className="border-r border-gray-400/50 pr-3 font-normal"
                    variant="small">
                    {shortUrl}
                </Typography>

                {copied ? (
                    <CheckIcon className="h-4 w-4 text-white"/>
                ) : (
                    <DocumentDuplicateIcon className="h-4 w-4 text-white"/>
                )}
            </Button>
        </Tooltip>
    );
}

function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button type="submit"
                className="inline-flex w-60 justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500"
                aria-disabled={pending}>
            {pending ? <Loading/> : 'Generate'}
        </button>
    )
}

export function CreateShortLinkForm() {
    const [state, formAction] = useFormState(createShortLink, initialState);
    const {pending} = useFormStatus();

    function openInNewTab(url: string) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <form action={formAction}>
            <div className="flex flex-col space-y-6">
                <label htmlFor="url">Enter your long link below to generate a short link</label>
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


                {state.short_url.length > 0 ?
                    <div className="flex flex-row space-x-4">
                        <ClipboardWithTooltip shortUrl={state.short_url}/>
                        <Button onClick={() => {
                            openInNewTab(state.short_url)
                        }}
                                type="button"
                                className="flex flex-wrap-ns items-center text-wrap gap-x-3 px-4 py-2.5 lowercase">
                            <Typography
                                className="border-r border-gray-400/50 pr-3 font-normal"
                                variant="small">
                                {state.short_url}
                            </Typography>
                            <GlobeAltIcon className="h-4 w-4 text-white"/>
                        </Button>
                    </div> : ''}
            </div>
        </form>
    );
}