"use client";

import Link from "next/link";
import { AuthButtons } from "./AuthButtons";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function Navbar() {
  // using getKindeServerSession will always get latest user data from server side, but it causing dynamic rendering
  // to all rendered components that have navbar, but there are some component that should be static like create post that dont need fetch anything
  // const { getUser } = getKindeServerSession();

  // change to client sided so it will not always get user data, prevent dynamic render in compoenet that need to be static
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-3xl font-bold">
            Kell&apos;s <span className="bg-red-500 p-2">Blog</span>
          </h1>
        </Link>

        <div className="hidden sm:flex item-center gap-6">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          {user && (
            <Link href="/dashboard" className="hover:text-red-500">
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {user ? (
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-gray-700">
            Welcome,{" "}
            {user?.given_name || user?.family_name
              ? `${user?.given_name ?? ""} ${user?.family_name ?? ""}`.trim()
              : user.email}
          </span>
          <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="hidden sm:flex items-center gap-4">
          {/* separate auth button so this current file still server compoent, authbutton is clent component */}
          <AuthButtons />
        </div>
      )}
    </nav>
  );
}
