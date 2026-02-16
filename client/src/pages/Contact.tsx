import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  

  const onSubmit = async (data: InsertInquiry) => {
    try {
      await emailjs.send(
        "service_mail_integration",
        "template_5jhilht",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        "cviIBISRrBx9a6vLI"
      );

       form.reset();
        setStatus("success");
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | ABC Building Contracting LLC UAE</title>
        <meta
          name="description"
          content="Contact ABC Building Contracting LLC for professional construction and contracting services in UAE. Get in touch for project inquiries and quotations."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://abccont.com/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/contact" />
        <meta property="og:title" content="Contact ABC Contracting UAE" />
        <meta property="og:description" content="Reach out to our team for construction and civil engineering project discussions." />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get in Touch" subtitle="Contact Us" align="center" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <a href="https://maps.app.goo.gl/SjpvNs9aaSX6T1jLA">
                      <p className="text-muted-foreground">Al Zahra Techno Center<br/>Dubai - UAE</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-muted-foreground">+971 55 471 2353</p>
                    {/* <p className="text-muted-foreground">+971 50 000 0000</p> */}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    {/* <p className="text-muted-foreground">bala@abccont.com</p> */}
                    <p className="text-muted-foreground">info@abccont.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-2xl font-bold mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+971 50 000 0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Inquiry about..." {...field} value={field.value || ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <p className="mt-4 text-green-600 font-medium">
                      ✅ Message sent successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="mt-4 text-red-600 font-medium">
                      ❌ Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="w-full h-[400px] bg-muted relative">
          <iframe
            src="https://www.google.com/maps?q=25.2592915,55.2933945&hl=en&z=17&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Zahra Techno Center Location"
          />
        </div>
      </motion.div>
    </>
  );
}
