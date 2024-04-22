"use client";

import { useFormState, useFormStatus } from "react-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "./../icon-192.png";
import Image from "next/image";
import { signUp } from "../api/actions/actions";

export default function SignUp() {
  return (
    <>
      <div className="flex flex-col min-h-full justify-center h-screen">
        <Header />
        <div className="mb-auto">
          <SignUpForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

function SignUpForm() {
  const [signUpState, signUpAction] = useFormState(signUp, undefined);
  const { pending } = useFormStatus();
  return (
    <>
      <div className="flex flex-col  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="w-auto h-10 mx-auto"
            src={logo}
            alt="URL Shortener Logo"
            width={24}
            height={24}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to URLShortener
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={signUpAction}>
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
              {signUpState?.errors?.username && (
                <p className="text-red-800">{signUpState.errors.username}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {signUpState?.errors?.email && (
                <p className="text-red-800">{signUpState.errors.email}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {signUpState?.errors?.password && (
                <div>
                  <p className="text-red-800">Password must:</p>
                  <ul>
                    {signUpState.errors.password.map((error) => (
                      <li className="text-red-800" key={error}>
                        - {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="flex w-full mt-12 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Alreay have an account?&nbsp;&nbsp;
            <a
              href="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignIn
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
