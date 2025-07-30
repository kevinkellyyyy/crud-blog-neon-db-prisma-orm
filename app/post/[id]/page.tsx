import { prisma } from "@/app/utils/db";
import { ButtonBack } from "@/components/general/ButtonBack";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { isValidUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPostDetail(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  if (!data) {
    throw notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getPostDetail(id);

  const validImageUrl = isValidUrl(data.imageUrl) ? data.imageUrl : "/file.svg";
  const validAuthorImage = isValidUrl(data.authorImage)
    ? data.authorImage
    : "/file.svg";

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <ButtonBack />

      <div className="flex flex-col gap-6 my-6">
        <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={validAuthorImage}
                alt={data.authorName}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium">{data.authorName || "Unknown Author"}</p>
            <time className="text-xs text-gray-500 mt-1">
              {new Date(data.createdAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
          <Image
            src={validImageUrl}
            alt={data.title}
            fill
            className="object-cover"
            priority // use this for priority loading of the big image in network
          />
        </div>

        <Card>
          <CardContent>
            <p>{data.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
