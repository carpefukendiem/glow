import { z } from "zod";

const phoneRegex = /^[\d+()\-\s.]{7,20}$/;

export const quoteFormSchema = z.object({
  serviceType: z.string().min(1, "Please choose a service type."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  address1: z.string().min(1, "Property address is required."),
  estimatedBudget: z.string().min(1, "Estimated budget is required."),
  servicesDesired: z.array(z.string()).min(1, "Select at least one service."),
  specialNotes: z.string().optional(),
  hcaptchaToken: z.string().min(1, "Captcha is required."),
  _gotcha: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  message: z.string().min(5, "Please enter a longer message."),
  hcaptchaToken: z.string().min(1, "Captcha is required."),
  _gotcha: z.string().optional(),
});

export const faqQuestionSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Enter a valid email address."),
  question1: z.string().min(5, "Question 1 is required."),
  question2: z.string().optional(),
  question3: z.string().optional(),
  requestContact: z.boolean().default(false),
  hcaptchaToken: z.string().min(1, "Captcha is required."),
  _gotcha: z.string().optional(),
});

export const jobApplicationSchema = z.object({
  role: z.string().min(1, "Role is required."),
  fullName: z.string().min(1, "Full name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().regex(phoneRegex, "Enter a valid phone number."),
  portfolioUrl: z.string().optional(),
  whyJoin: z.string().min(10, "Please tell us why you want to join Glow."),
  resumeUrl: z.string().optional(),
  hcaptchaToken: z.string().min(1, "Captcha is required."),
  _gotcha: z.string().optional(),
});
