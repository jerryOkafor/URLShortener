"use client";

import React, { useEffect, useRef, useState } from "react";
import { getShortLink } from "@/app/api/actions/actions";
import Spinner from "@material-tailwind/react/components/Spinner";

type Params = {
  params: {
    shortCode: string;
  };
};

export default function LinkPreview({ params }: Params) {
  const handledRedirect = useRef(false);
  const [isFetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!handledRedirect.current) {
      handledRedirect.current = true;
      setFetching(true);
      getShortLink(params.shortCode)
        .then((data) => {
          setFetching(false);
          window.location.href = data.long_url;
        })
        .catch((error) => {
          setFetching(false);
          console.error("Error fetching data:", error);
          setError(
            "Error fetcing shortlink, please verify shortlink and try again"
          );
        });
    }
  }, [params]);

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          {error ? (
            <>
              <div className="flex flex-col space-y-4 items-center">
                <p>{error}</p>
                <a href="/">
                  <p>Go Back</p>
                </a>
              </div>
            </>
          ) : (
            <>
              <Spinner color="red" className="h-12 w-12 justify-self-center" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
