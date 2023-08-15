"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const renewSession = useCallback(() => {
    router.replace("/");
  }, [router]);

  useEffect(
    () =>
      hanko?.onSessionExpired(() => {
        renewSession();
      }),

    [hanko, renewSession]
  );

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        return;
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <button
      type="button"
      className="rounded-full bg-[#ff2e4c] px-8 py-2 text-xl  text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:focus-visible:outline-[#ff2e4c]  hover:ring ring-[#ff2e4c]/50 ring-offset-0 leading-7"
      onClick={logout}
    >
      Logout
    </button>
  );
}
