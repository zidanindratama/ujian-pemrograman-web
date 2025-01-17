/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import { dreamSchema, TDreamForm } from "@/schema/dream.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFetchData } from "@/hooks/use-fetch-data";
import { useUpdateData } from "@/hooks/use-update-data";
import { useEffect } from "react";
import { useDeleteData } from "@/hooks/use-delete-data";

type Props = {
  slug: string;
};

const DreamUpdateForm = ({ slug }: Props) => {
  const { data: dreamData } = useFetchData({
    queryKey: ["dreamData"],
    dataProtected: `dreams/${slug}`,
  });

  const dream = dreamData?.data as TDreamForm;

  const form = useForm<TDreamForm>({
    resolver: zodResolver(dreamSchema),
    mode: "onChange",
    values: {
      username: dream?.username || "",
      title: dream?.title || "",
      description: dream?.description || "",
      image: dream?.image || "",
    },
  });

  useEffect(() => {
    if (dream) {
      form.reset(dream);
    }
  }, [dream, form]);

  const imageRef = form.register("image");

  const mutationUpdateDream = useUpdateData({
    queryKey: "dreamData",
    dataProtected: `dreams/${slug}`,
    backUrl: `/dreams`,
  });

  const onSubmit = async (values: TDreamForm) => {
    const form = new FormData();

    const isFileList =
      values.image instanceof FileList && values.image.length > 0;

    const appendIfNotNull = (key: string, value: any) => {
      if (value != null) {
        form.append(key, value);
      }
    };

    appendIfNotNull("title", values.title);
    appendIfNotNull("description", values.description);
    appendIfNotNull("username", values.username);

    if (isFileList) {
      form.append("image", values.image[0]);
    } else if (typeof values.image === "string") {
      appendIfNotNull("image", values.image);
    }

    mutationUpdateDream.mutate(form);
  };

  const mutationDreamDelete = useDeleteData({
    queryKey: "dreamsData",
    dataProtected: `dreams/${slug}`,
    backUrl: `/dreams`,
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    mutationDreamDelete.mutate();
  };

  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2 mx-auto text-center">
          <h1 className="text-3xl font-extrabold">Update Your Dream</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Reimagine your aspirations and keep your vision alive. Update the
            details below to ensure your dream reflects your latest goals and
            ambitions.
          </p>
        </div>
        <div className="flex flex-row md:hidden w-full justify-end mt-10 mb-5">
          <Button
            type="button"
            onClick={handleDelete}
            variant="destructive"
            effect="gooeyRight"
          >
            Delete
          </Button>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 max-w-md mx-auto w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="eg: zidanindratama" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display username.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="eg: An expert Frontend Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about your dream!"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <div className="space-y-6">
                  <FormItem className="w-full">
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input id="picture" type="file" {...imageRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <div className="flex gap-3 flex-col md:flex-row justify-between">
              <Button
                type="button"
                onClick={handleDelete}
                variant="destructive"
                effect="gooeyRight"
                className="hidden md:block"
              >
                Delete
              </Button>
              <Button type="submit" className="w-full md:w-fit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DreamUpdateForm;
