"use client";

import Header from "@/app/components/header";
import Container from "@/app/components/container";
import Link from "next/link";
import { ShortLink } from "@/app/interfaces";
import { showAllLinks } from "@/app/api/actions/actions";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import QRCode from "react-qr-code";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Tooltip } from "@/app/components/providers";
import { useCopyToClipboard } from "usehooks-ts";
import SpinnerLoading from "../links/spinnerLoading";

export default function Links() {
  const [data, setData] = useState<[ShortLink] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    showAllLinks()
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return SpinnerLoading;

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Container>
          <div className="mt-4 mb-4">
            <div className="flex-col w-full">
              <h1 className="">List of all generated short links</h1>
            </div>
            {data?.length ? (
              <ul className="mt-8 flex-col space-y-0">
                {data.map((shortLink) => (
                  <li key={shortLink.id} className="py-3 sm:py-4">
                    <ShortLinkListItem shortLink={shortLink} />
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

function EmptyState() {
  return (
    <>
      <div>
        <p>No link generated yet, go home and generate some links</p>
      </div>
    </>
  );
}

type ShortLinkListItemProps = {
  shortLink: ShortLink;
};

function ShortLinkListItem({ shortLink }: ShortLinkListItemProps) {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={shortLink.short_url}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <p className="text-sm font-normal text-gray-900 truncate dark:text-white">
            Original URL: {shortLink.long_url}
          </p>
          <div className="inline-flex flex-row space-x-3 justify-center text-sm text-gray-500 dark:text-gray-400">
            Short Url:
            <Link
              className="text-wrap border-r border-gray-400/50 pr-4"
              href={shortLink.short_url}
              target="_blank"
            >
              {shortLink.short_url}
            </Link>
            <Tooltip content={copied ? "Copied" : "Copy"}>
              <Button
                placeholder=""
                variant="text"
                className="p-1"
                onClick={() => {
                  copy(shortLink.short_url);
                  setCopied(true);
                }}
              >
                <DocumentDuplicateIcon className="h-4 w-4" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="inline-flex-l min-w-0 space-y-2 items-center">
          <p>Status: Active</p>
          <p>Clicks: {shortLink.hit}</p>
        </div>
      </div>
    </>
  );
}
