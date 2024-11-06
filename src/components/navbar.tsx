"use client";
import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar =  () => {
  const { user } = useUser();
  

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>shorty.</span>
          </Link>

          <div className=" hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Sign In
                    
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button size="sm" >
                  Get started 
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/"/>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
