import { isValidUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogPostCard({ data }: IProps) {
  const validImageUrl = isValidUrl(data.imageUrl) ? data.imageUrl : "/file.svg";
  const validAuthorImage = isValidUrl(data.authorImage)
    ? data.authorImage
    : "/file.svg";

  return (
    <div className="group relative overflow-hidden rounded-lg border border-grey-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={validImageUrl}
            alt={data.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-3">{data.content}</p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={validAuthorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">{data.authorName}</p>
            </div>
            <time className="text-xs text-gray-500">
              {new Date(data.createdAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
