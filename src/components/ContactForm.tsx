"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, TContactFormSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { submitToSupabase } from "./component/SubmitForm";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: TContactFormSchema) {
    const result = await submitToSupabase(
      data.name,
      data.email,
      data.subject,
      data.message
    );
    if (result?.error) {
      toast.error("Data submission failed");
    } else {
      toast.success("Data submitte succesfully");
    }
  }

  return (
    <main className="p-10 space-y-5">
      <Card className="text-neutral-200 rounded-md bg-neutral-900 border-none w-full ">
        <CardHeader>
          <CardTitle className="text-5xl font-bold flex items-center justify-center">
            İletişim
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Aşağıda bulunan formu doldurarak bizimle iletişime geçebilirsiniz.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ad</Label>
              <Input id="name" placeholder="Adınız..." className="text-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                {...register("email")}
                placeholder="E-postanızı yazınız..."
                type="email"
                className="text-black"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Konu</Label>
            <Input
              {...register("subject")}
              placeholder="Konuyu yazınız..."
              className="text-black"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              className="min-h-[100px] text-black"
              {...register("message")}
              placeholder="Mesajınızı yazınız..."
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
            variant={"secondary"}
            className="w-full"
            disabled={isSubmitting}
          >
            Gönder
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
