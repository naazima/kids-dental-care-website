import { NavItem, ServiceCard, TeamMember, ActionCard, ContactInfo, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kids Dental Care",
  tagline: "The premier pediatric dental facility in Bristol",
  phone: "860-584-0441",
  address: {
    address: "733 Terryville Avenue",
    city: "Bristol",
    state: "CT",
    zip: "06010",
    phone: "860-584-0441",
    hours: [
      { days: "Mon, Thu, Fri", time: "8:00am – 5:00pm" },
      { days: "Tue, Wed", time: "8:00am – 7:00pm" },
      { days: "Saturday", time: "8:00am – 1:00pm" },
    ],
  },
  socialLinks: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Children's Dentistry", href: "/services/childrens-dentistry" },
      { label: "Cleanings & Exams", href: "/services/cleanings-exams" },
      { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Dental Emergencies", href: "/services/dental-emergencies" },
      { label: "Special Needs Dentistry", href: "/services/special-needs" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Meet the Team", href: "/about/team" },
      { label: "Office Tour", href: "/about/office-tour" },
      { label: "Our Philosophy", href: "/about/philosophy" },
    ],
  },
  {
    label: "Patient Info",
    href: "/patient-info",
    children: [
      { label: "New Patients", href: "/patient-info/new-patients" },
      { label: "Patient Forms", href: "/patient-info/forms" },
      { label: "Insurance & Payments", href: "/patient-info/insurance" },
      { label: "FAQs", href: "/patient-info/faqs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const services: ServiceCard[] = [
  {
    title: "Children's Dentistry",
    description: "Comprehensive dental care designed specifically for infants, children, and teens.",
    image: "https://placehold.co/400x300/7C51A1/ffffff?text=Children's+Dentistry",
    href: "/services/childrens-dentistry",
  },
  {
    title: "Cleanings & Exams",
    description: "Regular checkups and professional cleanings to maintain your child's oral health.",
    image: "https://placehold.co/400x300/4CAF50/ffffff?text=Cleanings+%26+Exams",
    href: "/services/cleanings-exams",
  },
  {
    title: "Sedation Dentistry",
    description: "Safe and comfortable sedation options for anxious or special needs patients.",
    image: "https://placehold.co/400x300/7C51A1/ffffff?text=Sedation+Dentistry",
    href: "/services/sedation-dentistry",
  },
  {
    title: "Orthodontics",
    description: "Early orthodontic evaluation and treatment to guide proper dental development.",
    image: "https://placehold.co/400x300/4CAF50/ffffff?text=Orthodontics",
    href: "/services/orthodontics",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ammar Idlibi",
    role: "Board Certified Pediatric Specialist",
    image: "https://placehold.co/300x400/7C51A1/ffffff?text=Dr.+Idlibi",
    bio: "Dr. Idlibi is a Board Certified Diplomate dedicated to providing exceptional patient care through a voluntary commitment to lifelong learning.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatric Dentist",
    image: "https://placehold.co/300x400/4CAF50/ffffff?text=Dr.+Johnson",
    bio: "Specializing in pediatric dentistry with a passion for making dental visits fun.",
  },
  {
    name: "Team Member",
    role: "Dental Hygienist",
    image: "https://placehold.co/300x400/7C51A1/ffffff?text=Team+Member",
    bio: "Experienced hygienist committed to gentle, thorough care for every patient.",
  },
];

export const actionCards: ActionCard[] = [
  {
    title: "Request an Appointment",
    description: "Schedule your child's next visit online",
    buttonText: "Schedule Now",
    href: "/contact",
    icon: "calendar",
  },
  {
    title: "Review Patient Forms",
    description: "Download and complete forms before your visit",
    buttonText: "Get Forms",
    href: "/patient-info/forms",
    icon: "file-text",
  },
  {
    title: "Get Directions",
    description: "Find our office in Bristol",
    buttonText: "View Map",
    href: "/contact#map",
    icon: "map-pin",
  },
];

export const heroContent = {
  headline: "Top Pediatric Dentist in Bristol",
  subheadline: "Creating Healthy Smiles for Happy Kids",
  ctaText: "Schedule an Appointment",
  ctaHref: "/contact",
};

export const welcomeContent = {
  title: "Welcome to Kids Dental Care",
  description: `At Kids Dental Care, we are committed to providing compassionate, high-quality dental care for infants, children, teens, and patients with special needs. Our team creates a warm, welcoming environment where kids feel safe and comfortable during their dental visits.

We believe that positive early dental experiences set the foundation for a lifetime of healthy smiles. Our office is designed with children in mind, featuring a fun, kid-friendly atmosphere that helps ease anxiety and makes dental visits something to look forward to.`,
};

export const gentleCareContent = {
  title: "Gentle, Fun, and Focused on Kids",
  description: `We understand that visiting the dentist can be overwhelming for children. That's why we've created a practice that feels more like a playground than a doctor's office. Our team is specially trained to work with children of all ages, using gentle techniques and positive reinforcement to build trust and confidence.

From our colorful waiting room to our kid-sized dental chairs, every detail is designed to make your child feel at ease. We take the time to explain procedures in child-friendly terms and celebrate every milestone in your child's dental health journey.`,
};

export const affordableCareContent = {
  title: "Affordable Care for Every Family",
  description: `We believe every child deserves access to quality dental care. That's why we work with most major insurance plans and offer flexible payment options to fit your family's budget. Our team will help you understand your benefits and maximize your coverage.`,
  features: [
    "Most major insurance plans accepted",
    "Flexible payment plans available",
    "Medicaid accepted",
    "No-interest financing options",
  ],
};

export const emergencyContent = {
  title: "Dental Emergencies? We're Here to Help",
  description: `Dental emergencies can happen at any time. Whether it's a knocked-out tooth, severe toothache, or dental trauma, our team is ready to provide prompt, compassionate care when your child needs it most. Contact us immediately for emergency dental situations.`,
  phone: "860-584-0441",
};

export const serviceAreaContent = {
  title: "Proudly Serving Bristol and Beyond",
  description: `Kids Dental Care is conveniently located in Bristol, serving families throughout the greater Bristol area including surrounding communities in Connecticut.`,
  areas: [
    "Bristol",
    "Terryville",
    "Forestville",
    "Wolcott",
    "Burlington",
    "Plymouth",
  ],
};
