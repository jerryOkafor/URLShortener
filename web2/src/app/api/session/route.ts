import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "../../lib/session";
import { sleep, SessionData } from "../../lib/session";
import { SignData } from "@/app/lib/definition";

// login
export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const { username, password } = (await request.json()) as SignData;

  session.isLoggedIn = true;
  session.username = username;
  session.acessToken = Date.now().toString();
  await session.save();

  // simulate looking up the user in db
  await sleep(250);
  console.log(`Login: ${JSON.stringify(session)}`);

  return Response.json(session);
}

// read session
export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // simulate looking up the user in db
  await sleep(250);

  if (session.isLoggedIn !== true) {
    return Response.json(defaultSession);
  }

  return Response.json(session);
}

// logout
export async function DELETE() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  session.destroy();

  return Response.json(defaultSession);
}
