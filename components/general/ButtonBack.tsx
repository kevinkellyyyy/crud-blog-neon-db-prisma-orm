"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export function ButtonBack() {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      onClick={() => router.back()}
      className="cursor-pointer mb-4"
    >
      <ArrowLeft />
      <span>Back</span>
    </Button>
  );
}
