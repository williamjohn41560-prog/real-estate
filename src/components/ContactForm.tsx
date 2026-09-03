"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Tell us a little about what you need"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({ heading = "Get in Touch" }: { heading?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Wire this up to your CRM / email provider / API route.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="rounded-xl2 bg-white p-6 shadow-card sm:p-8">
      <h3 className="mb-6 font-display text-2xl font-bold text-navy-900">{heading}</h3>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 py-10 text-center"
          >
            <CheckCircle2 className="text-gold-500" size={48} />
            <p className="font-semibold text-navy-900">Thank you! Jasmine will reach out shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 1 }}
          >
            <div>
              <input
                {...register("name")}
                placeholder="Full Name"
                className="w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell Jasmine what you're looking for..."
                className="w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-gold w-full disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
