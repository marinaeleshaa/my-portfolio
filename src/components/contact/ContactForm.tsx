"use client";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .min(7, "Phone number should be at least 7 digits.")
    .regex(
      /^[\d\s()+-]+$/,
      "Phone number can only contain digits and +()- characters."
    ),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message should be at least 10 characters long."),
});

type ContactFormData = z.infer<typeof contactSchema>;
type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: ContactFormErrors = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      setSubmitStatus("idle");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey,
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className=" overflow-hidden flex items-center justify-center p-4">
      <style>{`
        @keyframes borderRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-border {
          position: relative;
          background: linear-gradient(90deg, #B19EEF, #5227FF, #FF9FFC, #B19EEF, #5227FF);
          background-size: 300% 300%;
          animation: borderRotate 4s linear infinite;
          border-radius: 24px;
          padding: 2px;
        }

        .animated-border-inner {
          background: rgba(17, 24, 39, 0.95);
          border-radius: 22px;
        }

        .glow-purple {
          box-shadow: 0 0 20px rgba(177, 158, 239, 0.3), 0 0 40px rgba(82, 39, 255, 0.2);
        }

        .glow-pink {
          box-shadow: 0 0 20px rgba(255, 159, 252, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <motion.div
        className="w-full max-w-2xl relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Floating Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#B19EEF] rounded-full blur-3xl opacity-20 floating"></div>
        <div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#5227FF] rounded-full blur-3xl opacity-20 floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FF9FFC] rounded-full blur-3xl opacity-20 floating"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Animated Border Container */}
        <div className="animated-border glow-purple">
          <div className="animated-border-inner p-8 sm:p-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-[#B19EEF]  to-[#FF9FFC] bg-clip-text text-transparent mb-4">
                  Let&apos;s Connect
                </h2>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#B19EEF]  to-[#FF9FFC] rounded-full"></div>
              </motion.div>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#B19EEF] mt-6 text-lg"
              >
                Ready to bring your vision to life? Send me a message!
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#B19EEF] mb-2 ml-1"
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full px-6 py-4 bg-gray-800/40 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9FFC] transition-all duration-300 backdrop-blur-sm ${
                      errors.name ? "border-red-500/60" : "border-[#5227FF]/30"
                    }`}
                    placeholder="Enter your name"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B19EEF]/0 via-[#5227FF]/0 to-[#FF9FFC]/0 group-focus-within:from-[#B19EEF]/10 group-focus-within:via-[#5227FF]/10 group-focus-within:to-[#FF9FFC]/10 transition-all duration-500 pointer-events-none"></div>
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative group"
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#B19EEF] mb-2 ml-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.phone)}
                    className={`w-full px-6 py-4 bg-gray-800/40 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9FFC] transition-all duration-300 backdrop-blur-sm ${
                      errors.phone ? "border-red-500/60" : "border-[#5227FF]/30"
                    }`}
                    placeholder="+20 123 456 789"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B19EEF]/0 via-[#5227FF]/0 to-[#FF9FFC]/0 group-focus-within:from-[#B19EEF]/10 group-focus-within:via-[#5227FF]/10 group-focus-within:to-[#FF9FFC]/10 transition-all duration-500 pointer-events-none"></div>
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </motion.div>
            </div>

            {/* Email Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative group mb-6"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#B19EEF] mb-2 ml-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  className={`w-full px-6 py-4 bg-gray-800/40 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9FFC] transition-all duration-300 backdrop-blur-sm ${
                    errors.email ? "border-red-500/60" : "border-[#5227FF]/30"
                  }`}
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B19EEF]/0 via-[#5227FF]/0 to-[#FF9FFC]/0 group-focus-within:from-[#B19EEF]/10 group-focus-within:via-[#5227FF]/10 group-focus-within:to-[#FF9FFC]/10 transition-all duration-500 pointer-events-none"></div>
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative group mb-8"
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#B19EEF] mb-2 ml-1"
              >
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full px-6 py-4 bg-gray-800/40 border-2 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF9FFC] transition-all duration-300 resize-none backdrop-blur-sm ${
                    errors.message ? "border-red-500/60" : "border-[#5227FF]/30"
                  }`}
                  placeholder="Tell me about your project, ideas, or just say hi! 👋"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B19EEF]/0 via-[#5227FF]/0 to-[#FF9FFC]/0 group-focus-within:from-[#B19EEF]/10 group-focus-within:via-[#5227FF]/10 group-focus-within:to-[#FF9FFC]/10 transition-all duration-500 pointer-events-none"></div>
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="my-main-btn group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg w-full hover:shadow-purple-500/50 flex items-center justify-center"
              >
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl text-green-400 text-center backdrop-blur-sm"
              >
                <div className="text-4xl mb-2">🎉</div>
                <div className="font-bold text-lg">
                  Message Sent Successfully!
                </div>
                <div className="text-sm mt-1">
                  I&apos;ll get back to you soon.
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl text-red-400 text-center backdrop-blur-sm"
              >
                <div className="text-4xl mb-2">😔</div>
                <div className="font-bold text-lg">
                  Oops! Something went wrong.
                </div>
                <div className="text-sm mt-1">Please try again later.</div>
              </motion.div>
            )}

            {/* Decorative Elements */}
            <div className="flex gap-4 mt-10 justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#B19EEF] pulse-glow"></div>
              <div
                className="w-3 h-3 rounded-full bg-[#5227FF] pulse-glow"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-[#FF9FFC] pulse-glow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
