"use client";
import dynamic from "next/dynamic";
import { LogoutBtn } from "@/components/hanko-components/LogoutBtn";
import HankoProfile from "@/components/hanko-components/Profile";

export default function Profile() {
  const HankoProfile = dynamic(
    () => import("@/components/hanko-components/Profile"),
    {
      ssr: false,
    }
  );

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="pt-20 pb-14">
        <h1 className="text-3xl font-bold">Hanko Profile</h1>
        <p className="mt-5">Manage all your passkeys</p>
      </div>

      <div className="border border-gray-300 rounded-2xl p-10 mb-20 w-[800px]">
        {" "}
        <HankoProfile />
      </div>

      <LogoutBtn />
    </div>
  );
}
