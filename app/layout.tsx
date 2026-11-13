import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "./globals.css";
import { SITE_URL, clinic, doctor } from "@/lib/site";

const title = "Dermatologista em São José do Rio Pardo | Dra. Florence Marin Ortega — Clin Derm";
const description =
  "Dra. Florence Marin Ortega, dermatologista com título de especialista pela SBD. Dermatologia clínica, cirúrgica e cosmiatria em São José do Rio Pardo - SP. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "dermatologista em São José do Rio Pardo",
    "Dra. Florence Marin Ortega",
    "Clin Derm",
    "dermatologia São José do Rio Pardo",
    "tratamento de acne",
    "melasma",
    "queda de cabelo",
    "toxina botulínica",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: clinic.name,
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "Physician"],
  name: `${clinic.name} — ${doctor.name}`,
  description,
  url: SITE_URL,
  telephone: "+55-19-3608-4828",
  email: clinic.email,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.street,
    addressLocality: clinic.city,
    addressRegion: clinic.state,
    postalCode: clinic.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
    },
  ],
  areaServed: { "@type": "City", name: clinic.city },
  sameAs: [clinic.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
