import { handleSubmit } from "@/app/actions";
import { ButtonWithLoading } from "@/components/general/ButtonWithLoading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
  return (
    <div>
      <Card className="max-w-lg mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Dashboard
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Use the form below to create a new blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image Url</Label>
              <Input
                name="imageUrl"
                required
                type="url"
                placeholder="Image Url"
              />
            </div>

            <ButtonWithLoading text="Create Post" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
