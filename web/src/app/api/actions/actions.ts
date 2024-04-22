"use server";

import { apiKey, apiVersion, baseUrl } from "@/app/config/apiConfig";
import { ShortLink } from "@/app/interfaces";
import {
  SignUpFormState,
  SigninFormState,
  SignUpFormSchema,
  SignInFormSchema,
} from "../../lib/definition";
import { cookies } from "next/headers";
import { getIronSession, IronSession } from "iron-session";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  defaultSession,
  sessionOptions,
  SessionData,
  sleep,
} from "../../lib/session";
import { json } from "stream/consumers";

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
  }

  if (shouldSleep) {
    // simulate looking up the user in db
    await sleep(250);
  }

  return session;
}

export async function createShortLink(
  prevState: ShortLink,
  formData: FormData
) {
  prevState.long_url = "";
  prevState.short_url = "";

  let longUrl = formData.get("url");
  console.log("Using Long url: ", longUrl);
  const response = await fetch(`${baseUrl}/api/${apiVersion}/url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: JSON.stringify({ long_url: longUrl }),
  });
  return await response.json();
}

export async function showAllLinks(): Promise<[ShortLink] | null> {
  const response = await fetch(`${baseUrl}/api/${apiVersion}/url`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
  });
  return await response.json();
}

export async function getShortLink(shortCode: String): Promise<ShortLink> {
  const response = await fetch(
    `${baseUrl}/api/${apiVersion}/url/${shortCode}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
    }
  );
  return await response.json();
}

export async function signUp(state: SignUpFormState, formData: FormData) {
  console.log(
    `FormData Key Value \n${Array.from(formData.entries())
      .map((entry) => "\t" + entry[0] + " : " + entry[1] + " ")
      .join("\n")}`
  );

  const validatedFields = SignUpFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  //Early exit, if any of the form fields is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;
  const signUpUrl = `${baseUrl}/api/${apiVersion}/auth/login`;
  const requstBody = JSON.stringify({
    username: username,
    email: email,
    password: password,
  });
  const response = await fetch(signUpUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: requstBody,
  });

  console.log(`Result: ${response}`);

  if (response.status === 200) {
    const responseData = await response.json();
    console.log(`Json response: ${responseData}`);
    return {
      message: "User created successfull",
    };
  } else {
    return {
      message: "Error creating user, please check yuo input data and try again",
      ...state,
    };
  }

  //Call api here to signUp user
  console.log(`Making api call with : ${formData}`);
}

export async function signIn(prevState: SigninFormState, formData: FormData) {
  console.log(
    `FormData Key Value \n${Array.from(formData.entries())
      .map((entry) => "\t" + entry[0] + " : " + entry[1] + " ")
      .join("\n")}`
  );

  const validatedFields = SignInFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  //Early exit, if any of the form fields is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, password } = validatedFields.data;
  const loginUrl = `${baseUrl}/api/${apiVersion}/auth/login`;
  const requstBody = JSON.stringify({ username: username, password: password });

  console.log(
    `Unsing: ${username} and ${password} -> ${loginUrl} : ${requstBody}`
  );

  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: requstBody,
  });

  const responseData = await response.json();
  console.log(`Session: ${JSON.stringify(responseData)} ${response.status}`);

  if (response.status == 200) {
    console.log(response.status);

    const session = await getSession();
    session.isLoggedIn = true;
    session.username = "Jerry Admin";
    await session.save();

    return {
      message: responseData.message,
    };
  } else {
    return {
      message: responseData.error,
    };
  }
}
