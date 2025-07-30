import { BlogPostCard } from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import BaseLoading from "@/components/general/BaseLoading";

async function getPosts() {
  // const items = [
  //   {
  //     id: 1,
  //     title: "Post 1",
  //     content: "Content for post 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Post 2",
  //     content: "Content for post 2",
  //   },
  //   {
  //     id: 3,
  //     title: "Post 3",
  //     content: "Content for post 3",
  //   },
  // ];

  const data = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

async function BlogPost() {
  const posts = await getPosts();

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.id} data={post} /> // changed to blogpost component
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    // using Suspense to handle loading state natively (reactJs)
    <Suspense fallback={<BaseLoading />}>
      <BlogPost />
    </Suspense>
  );
}
