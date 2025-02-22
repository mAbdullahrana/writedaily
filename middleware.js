import { auth } from "./lib/auth";

export const middleware = auth;

export const config = {
  matcher: [
    "/pages",
    "/library",
    "/progress",
    "/settings",
    "/profile",
    "/write/:entrieID*",
  ],
};
