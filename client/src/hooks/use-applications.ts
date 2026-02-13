import { useMutation } from "@tanstack/react-query";
import { api, type InsertApplication } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateApplication() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: FormData) => {
      // Note: We use FormData here for file uploads
      // The API path expects standard fetch behavior
      const res = await fetch(api.applications.create.path, {
        method: api.applications.create.method,
        // Content-Type header is automatically set for FormData
        body: data,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit application");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Received",
        description: "Thank you for applying. We will review your application soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
