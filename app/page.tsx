import Image from "next/image";
import dynamic from "next/dynamic";
import HankoAuth from "@/components/hanko-components/HankoAuth";

export default function Home() {
  const HankoAuth = dynamic(
    () => import("@/components/hanko-components/HankoAuth"),
    {
      ssr: false,
    }
  );

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 text-[#042F4B]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 "
          href="https://www.hanko.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="https://uploads-ssl.webflow.com/5e6f5bf4a2ae9702a833f3ee/5ebae433231848ad55a77ae7_Logo.svg"
            alt="Hanko Logo"
            className=" "
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="mt-40 border border-gray-100 rounded-2xl px-6 py-10 shadow-xl">
        <HankoAuth />
      </div>
    </main>
  );
}
