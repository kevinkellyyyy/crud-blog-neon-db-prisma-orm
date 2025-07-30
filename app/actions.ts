"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // If user is not authenticated, redirect to login
  if (!user) {
    return redirect("/api/auth/login");
  }

  const formValues = Object.fromEntries(formData);

  await prisma.blogPost.create({
    // TODO: Validate form values and types
    data: {
      title: formValues.title as string,
      content: formValues.content as string,
      imageUrl: formValues.imageUrl as string,
      authorId: user?.id as string,
      authorName: user?.given_name as string,
      authorImage: user?.picture as string,
    },
  });

  return redirect("/");
}
