"use client";

import React, {useState} from "react";
import {CheckIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import {useCopyToClipboard} from "usehooks-ts";
import {Button, Tooltip, Typography} from "@material-tailwind/react";




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
                className="flex flex-wrap-ns w-full justify-between items-center text-wrap gap-x-3 px-4 py-2.5 lowercase"
                placeholder="">

                <Typography
                    className="border-r w-full text-left text-white border-gray-400/50 pr-3 font-normal"
                    variant="small" placeholder="">
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

