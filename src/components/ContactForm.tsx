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

export default function ContactForm() {
  const {
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

  const onSubmit = async (data: TContactFormSchema) => {
    const { name, email, subject, message } = data;
    await submitToSupabase(name, email, subject, message);
  };

  return (
    <main className="p-10 space-y-5  ">
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
              <Input id="name" placeholder="Adınız..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                placeholder="E-postanızı yazınız..."
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Konu</Label>
            <Input id="subject" placeholder="Konuyu yazınız..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
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
          >
            Gönder
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
