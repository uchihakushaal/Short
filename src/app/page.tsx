"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  console.log(isSignedIn);

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-36 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          More than just <span className="text-red-600">shorter</span> links.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Shorty allows you to build your brand&apos;s recognition and get detailed
          insights on how your links are performing.
        </p>

        {!isSignedIn ? (
          <SignInButton mode="modal">
            <Button size={"lg"} className="mt-5">
              Get started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </SignInButton>
        ) : (
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
            href="/dashboard"
          >
            Get started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        )}
      </MaxWidthWrapper>

      <div className="relative isolate">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
          <div className=" flow-root ">
            <div className="-m-2 rounded-xl flex items-center gap-3 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Input />
              <Link href="/dashboard">
                <Button size={"sm"}>Shorten it!</Button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/dashboard.png"
                  alt="product preview"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Advanced Statistics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-medium text-red-600">
                Brand Recognition
              </span>
              <span className="mt-2 text-zinc-700">
                Boost your brand recognition with each click Generic links
                don&apos;t mean a thing Branded links help instil confidence in
                your content.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-medium text-red-500">
                Detailed Records
              </span>
              <span className="mt-2 text-zinc-700">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl text-red-500  font-medium">
                Fully Customizable
              </span>
              <span className="mt-2 text-zinc-700">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/upload.png"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
