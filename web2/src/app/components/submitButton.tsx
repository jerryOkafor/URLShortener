import {useFormStatus} from "react-dom";
import React from "react";
import Loading from "@/app/components/loading";

export default function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button type="submit"
                className="inline-flex w-60 justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500"
                aria-disabled={pending}>
            {pending ? <Loading/> : 'Generate'}
        </button>
    )
}