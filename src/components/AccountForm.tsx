"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { submitToSupabase } from "@/app/auth/actions/submit-profile";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AccountSetupFormSchema,
  TAccountSetupFormSchema,
} from "@/lib/types-account-setup";

import { zodResolver } from "@hookform/resolvers/zod";
import { Cake, GraduationCap, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";

import { MdAccountBox } from "react-icons/md";
import { PiGearFine } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import { Button, buttonVariants } from "./ui/button";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { RiCakeLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { GiFeather } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa6";
import { Switch } from "./ui/switch";
import { fetchFromSupabase } from "@/lib/fetch-profile";
import Link from "next/link";

async function onSubmit(data: TAccountSetupFormSchema) {
  const result = await submitToSupabase(
    data.fullname,
    data.nickname,
    data.birthday,
    data.school,
    data.email,
    data.grade,
    data.avatar_url
  );
  if (result?.error) {
    toast.error("Data submission failed");
  } else {
    toast.success("Data submitted succesfully");
    // console.log(data);
  }
}

export function AccountForm(fetchFn: any) {
  const form = useForm<TAccountSetupFormSchema>({
    resolver: zodResolver(AccountSetupFormSchema),
    defaultValues: {
      fullname: fetchFn.fullname,
      nickname: fetchFn.nickname,
      birthday: fetchFn.birthday,
      school: fetchFn.school,
      grade: fetchFn.grade,
      email: fetchFn.email,
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="border p-5 rounded-3xl shadow-lg bg-slate-25">
            <div className="flex justify-between">
              <div className="flex flex-row gap-4 items-center">
                <div className="border-2 rounded-full p-2 flex items-center justify-center">
                  <PiGearFine className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <h1 className="text-lg w-full font-semibold ">
                    Account Setup
                  </h1>
                  <h3 className="text-sm font-extralight text-foreground">
                    Complete simple steps to get started
                  </h3>
                </div>
              </div>
              {/* <button>
            <RxCross2 className="h-4 w-4" />
          </button> */}
            </div>
            <Separator className="my-4" />
            <div>
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-[25dvh] md:w-[50dvh]"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex flex-row gap-4 items-center">
                      <div className="border-2 rounded-full p-2 flex items-center justify-center">
                        <MdAccountBox className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="text-md w-full font-semibold flex items-start">
                          Required Information
                        </h1>
                        <h3 className="text-sm font-extralight text-foreground">
                          Please provide the required information
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-center">
                    <div className="border flex flex-col items-center justify-between p-5 rounded-xl">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <User className="h-5 w-5 text-gray-400" />
                                    <p className="font-normal text-foreground/70">
                                      Full Name
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoFocus
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="nickname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <FaUserSecret className="h-5 w-5 text-gray-400" />
                                    <p className="font-normal text-foreground/70">
                                      Nickname
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthday"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <Cake className="h-5 w-5 text-foreground/70" />
                                    <p className="font-normal text-foreground/70">
                                      Date of Birth
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="date"
                                    data-date-format="DD MMMM YYYY"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <GraduationCap className="h-5 w-5 text-gray-400" />
                                    <p className="font-normal text-foreground/70">
                                      School Name
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="grade"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-row w-full items-center font-lg justify-start gap-5">
                                <div className="flex flex-row items-center gap-3 w-full">
                                  <FaBook className="h-5 w-5 text-gray-400" />
                                  <p className="text-foreground/70">Grade</p>
                                </div>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <SelectTrigger className="w-full ">
                                      <SelectValue placeholder="Select a grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="9">
                                        9th Grade
                                      </SelectItem>
                                      <SelectItem value="10">
                                        10th Grade
                                      </SelectItem>
                                      <SelectItem value="11">
                                        11th Grade
                                      </SelectItem>
                                      <SelectItem value="12">
                                        12th Grade
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                              </div>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <p className="font-normal text-gray-400">
                                      Email
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="email"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="avatar_url"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 w-full">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                    <p className="font-normal text-gray-400">
                                      Avatar Url
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="url"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="mt-2" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex flex-row gap-4 items-center">
                      <div className="border-2 rounded-full p-2 flex items-center justify-center">
                        <HiOutlinePaintBrush className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="text-md w-full font-semibold flex items-start">
                          Profile Customization
                        </h1>
                        <h3 className="text-sm font-extralight text-foreground">
                          Please provide the information for profile
                          customization
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border flex flex-col items-center justify-between p-3 rounded-xl ">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <FaBook className="h-5 w-5 text-foreground/70" />
                                    <p className="font-light text-foreground/70">
                                      Grade
                                    </p>
                                  </div>
                                  <Select>
                                    <SelectTrigger className="w-full ">
                                      <SelectValue placeholder="Select a grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectItem value="nineth">
                                          9th Grade
                                        </SelectItem>
                                        <SelectItem value="tenth">
                                          10th Grade
                                        </SelectItem>
                                        <SelectItem value="eleventh">
                                          11th Grade
                                        </SelectItem>
                                        <SelectItem value="twelveth">
                                          12th Grade
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthday"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <RiCakeLine className="h-5 w-5 text-foreground/70" />
                                    <p className="font-light text-foreground/70">
                                      Date of Birth
                                    </p>
                                  </div>
                                  <Input
                                    className={cn(
                                      "focus-visible:ring-none h-10  "
                                    )}
                                    placeholder=""
                                    type="date"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <IoSchoolOutline className="h-5 w-5 font-light text-foreground/70" />
                                    <p className="font-light text-foreground/70">
                                      School Name
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <AiOutlineMail className="h-5 w-5 font-light text-foreground/70" />
                                    <p className="font-light text-foreground/70">
                                      Email
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="email"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex flex-row gap-4 items-center">
                      <div className="border-2 rounded-full p-2 flex items-center justify-center">
                        <GiFeather className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="text-md w-full font-semibold flex items-start">
                          Optional Information
                        </h1>
                        <h3 className="text-sm font-extralight text-foreground">
                          Please provide the optional information
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border flex flex-col items-center justify-between p-3 rounded-xl ">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <IoIosPerson className="h-5 w-5 font-light text-foreground/70" />
                                    <p className=" font-light text-foreground/70">
                                      Full Name
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthday"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <RiCakeLine className="h-5 w-5 font-light text-foreground/70" />
                                    <p className="font-light text-foreground/70">
                                      Date of Birth
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="date"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <IoSchoolOutline className="h-5 w-5 text-foreground/70" />
                                    <p className="font-normal text-foreground/70">
                                      School Name
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="text"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-row w-full items-center justify-start gap-5">
                                  <div className="flex flex-row items-center gap-3 ml-5 w-full">
                                    <AiOutlineMail className="h-5 w-5 text-foreground/70" />
                                    <p className="font-normal text-foreground/70">
                                      Email
                                    </p>
                                  </div>
                                  <Input
                                    className="h-8"
                                    placeholder=""
                                    type="email"
                                    autoCapitalize=""
                                    autoCorrect="off"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem> */}
              </Accordion>
            </div>
            <div className="flex flex-row gap-2 mt-4">
              <div className="basis-1/2">
                <Link href={"/"}>
                  <Button
                    variant={"basic"}
                    type="submit"
                    className="text-md w-full  "
                  >
                    Skip
                  </Button>
                </Link>
              </div>
              <div className="basis-1/2">
                <Button
                  type="submit"
                  variant={"basic"}
                  className="text-md w-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
