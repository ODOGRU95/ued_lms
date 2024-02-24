// "use client";
// import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   ContactFormSchema,
//   TContactFormSchema,
// } from "@/lib/types-account-setup";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { submitToSupabase } from "../app/auth/actions/submit-profile";

// export default function ContactForm() {
//   const form = useForm<TContactFormSchema>({
//     resolver: zodResolver(ContactFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   async function onSubmit(data: TContactFormSchema) {
//     const result = await submitToSupabase(
//       data.name,
//       data.email,
//       data.subject,
//       data.message
//     );
//     if (result?.error) {
//       toast.error("Data submission failed");
//     } else {
//       toast.success("Data submitted succesfully");
//       console.log(data);
//     }
//   }
//   return (
//     <>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="grid gap-4 mt-10"
//         >
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="text-neutral-200">Full name</FormLabel>
//                 <FormControl>
//                   <Input
//                     className="focus:ring-pink-500"
//                     placeholder="John Doe"
//                     type="text"
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     autoFocus
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="text-neutral-200">Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     className=""
//                     type="email"
//                     placeholder="example@mail.com"
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="subject"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="text-neutral-200">Subject</FormLabel>
//                 <FormControl>
//                   <Input
//                     className=""
//                     type="text"
//                     placeholder="Development"
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="text-neutral-200">Message</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     className=""
//                     placeholder="Type your message here..."
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button
//             type="submit"
//             className={buttonVariants({
//               variant: "secondary",
//               className: "w-full mt-2 transition-all",
//             })}
//           >
//             Submit
//           </Button>
//         </form>
//       </Form>
//     </>
//   );
// }
