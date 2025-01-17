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
import { FileUploader } from "@/components/ui/file-uploader";
import { useAddData } from "@/hooks/use-add-data";
import { toast } from "sonner";

const DreamCreateForm = () => {
  const form = useForm<TDreamForm>({
    resolver: zodResolver(dreamSchema),
    defaultValues: {
      username: "",
      title: "",
      description: "",
      image: [],
    },
  });

  const mutationCreateDream = useAddData({
    queryKey: "dreamData",
    dataProtected: `dreams`,
    backUrl: `/dreams`,
    multipart: true,
  });

  const onSubmit = (values: TDreamForm) => {
    const form = new FormData();

    if (values.image.length > 0) {
      const appendIfNotNull = (key: string, value: any) => {
        if (value != null) {
          form.append(key, value);
        }
      };

      appendIfNotNull("title", values.title);
      appendIfNotNull("username", values.username);
      appendIfNotNull("description", values.description);

      if (values.image[0] !== undefined) {
        form.append("image", values.image[0]);
      }

      mutationCreateDream.mutate(form);
    } else {
      toast.error("Image cover should not be empty!");
    }
  };

  return (
    <div className="relative py-12 md:py-20">
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex flex-col gap-2 mx-auto text-center">
          <h1 className="text-3xl font-extrabold">Create Your Dream</h1>
          <p className="text-muted-foreground max-w-[800px]">
            Share your aspirations and bring your dreams to life. Fill out the
            form below to start turning your vision into reality.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mt-10 max-w-md mx-auto w-full"
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
              render={({ field }) => (
                <div className="space-y-6">
                  <FormItem className="w-full">
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFileCount={4}
                        maxSize={4 * 1024 * 1024}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <Button type="submit" className="w-full md:w-fit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DreamCreateForm;
