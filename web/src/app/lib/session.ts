import { SessionOptions } from "iron-session";

export interface SessionData {
  username: string;
  acessToken: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "Admin",
  acessToken: "",
  isLoggedIn: false,
};

const ttl = 1000 * 60 * 60 * 12 * 1;
export const sessionOptions: SessionOptions = {
  password: "myK8&G(t{@f=Gix.UE##~7kO0stq~[y£",
  cookieName: "url-shortener_cokies",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  ttl: ttl,
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
