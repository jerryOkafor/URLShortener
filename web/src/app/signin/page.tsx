"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import logo from "./../icon-192.png";
import Image from "next/image";
import useSession from "../components/useSession";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export default function SignIn() {
  const { session, isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session.isLoggedIn) {
      router.replace("/signin");
    }
  }, [isLoading, session.isLoggedIn, router]);

  if (session.isLoggedIn) return redirect("/");

  return (
    <>
      <div className="flex flex-col min-h-full justify-center h-screen">
        <Header loading={isLoading} />
        <div className="mb-auto">
          <SignInForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

function SignInForm() {
  const { login } = useSession();

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="w-auto h-10 mx-auto"
            src={logo}
            alt="URL Shortener Logo"
            width={24}
            height={24}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={function (event) {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const username = formData.get("username") as string;
              const password = formData.get("password") as string;

              login(
                { username: username, password: password },
                {
                  optimisticData: {
                    isLoggedIn: true,
                    username,
                  },
                }
              );
            }}
            method="POST"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* {signInState?.errors?.username && (
              <p>{signInState.errors.username}</p>
            )} */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/forgotPassword"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* {signInState?.errors?.password && (
              <div>
                <p>Password must:</p>
                <ul>
                  {signInState.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )} */}

            {/* {signInState?.message && (
              <>
                <SuccessToast
                  message={signInState.message}
                  showing={isShowing}
                  onCancel={() => {
                    setShowing(false);
                  }}
                />
              </>
            )} */}

            <div>
              <button
                // aria-disabled={pending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {/* {pending ? "Submitting..." : "Sign In"} */}
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?&nbsp; &nbsp;
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
