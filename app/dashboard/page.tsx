import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getBlogs(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Dashboard() {
  // Simulate loading delay, here we use streaming (loading.tsx -> next convention) to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const posts = await getBlogs(user?.id || "");

  // if (!user) {
  //   return redirect("/api/auth/login");
  //   // redirect method only work in server components
  //   // if use client components, you can use the useRouter hook from next/navigation
  // }
  // return <h1>Hello from dashboard page</h1>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Your Blog Articles</h2>
        <Link href="/dashboard/create" className={buttonVariants()}>
          Create Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
