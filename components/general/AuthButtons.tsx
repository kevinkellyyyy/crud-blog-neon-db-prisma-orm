"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "../ui/button";

export function AuthButtons() {
  return (
    <div className="hidden sm:flex item-center gap-6">
      <LoginLink className={buttonVariants()}>Login</LoginLink>
      <RegisterLink className={buttonVariants({ variant: "secondary" })}>
        Register
      </RegisterLink>
    </div>
  );
}
