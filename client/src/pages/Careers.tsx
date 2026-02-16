import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { Upload, Briefcase } from "lucide-react";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { useState } from "react";


// Extend the schema for frontend validation (file object vs string filename)
const formSchema = insertApplicationSchema.extend({
  cv: z.instanceof(FileList).refine((files) => files.length === 1, "CV is required"),
  cvFilename: z.string().optional(), // We'll handle this manually
});

export default function Careers() {

  const [status, setStatus] = useState<"success" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setStatus(null);
    setIsSubmitting(true);

    // Simulate fake submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      form.reset();
    }, 1200);
  };


  return (
    <>
      <Helmet>
        <title>Careers | Construction Jobs in UAE | ABC Building Contracting LLC</title>
        
        <meta
          name="description"
          content="Explore career opportunities at ABC Building Contracting LLC. Join our growing construction team in UAE for roles in civil engineering, project management, site supervision, and skilled manpower."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://abccont.com/careers" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abccont.com/careers" />
        <meta property="og:title" content="Careers at ABC Building Contracting LLC" />
        <meta
          property="og:description"
          content="Looking for construction jobs in UAE? Apply to join ABC Contracting’s professional team."
        />
        <meta property="og:image" content="https://abccont.com/og-image.jpg" />

        {/* Structured Data for Hiring */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ABC Building Contracting LLC",
            "url": "https://abccont.com",
            "sameAs": []
          }
          `}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="pt-24 pb-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Join Our Team" subtitle="Careers" align="center" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We are always looking for talented individuals to join our growing team. 
            If you are passionate about construction and excellence, apply below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info Side */}
            <div className="bg-primary text-white p-8 rounded-2xl h-fit">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-accent" />
                Open Positions
              </h3>
              <div className="space-y-6">
                {[
                  "Civil Engineer",
                  "Project Manager",
                  "Site Supervisor",
                  "Electrician",
                  "Plumber",
                  "Safety Officer"
                ].map((job, i) => (
                  <div key={i} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-default">
                    <h4 className="font-bold">{job}</h4>
                    <p className="text-sm text-white/70">Full Time • Dubai</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="font-display text-xl font-bold mb-6">Application Form</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  </div>

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Applied For</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-600">
                            <SelectItem value="Civil Engineer">Civil Engineer</SelectItem>
                            <SelectItem value="Project Manager">Project Manager</SelectItem>
                            <SelectItem value="Site Supervisor">Site Supervisor</SelectItem>
                            <SelectItem value="Electrician">Electrician</SelectItem>
                            <SelectItem value="Plumber">Plumber</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* File Upload - Using standard input type="file" via react-hook-form register */}
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload CV (PDF/Doc)</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              {...field}
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => {
                                onChange(e.target.files);
                              }}
                              className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about yourself..." {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  {status === "success" && (
                    <p className="mt-4 text-green-600 font-medium text-center">
                      ✅ Application submitted successfully!
                    </p>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
