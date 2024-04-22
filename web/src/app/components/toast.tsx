import { useState } from "react";

type ToastProps = {
  // children: React.ReactNode
  message: string;
  showing: boolean;
  onCancel: () => void;
};

export default function SuccessToast({
  message,
  showing,
  onCancel,
}: ToastProps) {
  return (
    <>
      {showing ? (
        <>
          <div
            className="w-full bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500"
            role="alert"
          >
            <div className="flex p-4">
              {message}

              <div className="ms-auto">
                <button
                  type="button"
                  onClick={() => {
                    onCancel();
                  }}
                  className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-teal-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-teal-200"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
