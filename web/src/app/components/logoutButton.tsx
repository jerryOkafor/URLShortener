import { log } from "console";
import useSession from "./useSession";
import { defaultSession } from "../lib/session";

export default function LogoutButton() {
  const { logout } = useSession();
  return (
    <>
      <a
        href="/logout"
        className="text-gray-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        onClick={(event) => {
          event.preventDefault();
          logout(null, {
            optimisticData: defaultSession,
          });
        }}
      >
        Logout
      </a>
    </>
  );
}
