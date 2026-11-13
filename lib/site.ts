// Dados centrais do consultório. Edite aqui e o site inteiro atualiza.
export const SITE_URL = "https://websitefor-florence-ortega.vercel.app"; // trocar quando houver domínio .com.br

export const doctor = {
  name: "Dra. Florence Marin Ortega",
  fullName: "Florence Marin Ortega",
  crm: "CRM-SP 37597",
  rqe: "RQE 152691",
};

export const clinic = {
  name: "Clin Derm",
  street: "Rua Benjamin Constant, 228",
  district: "Centro",
  city: "São José do Rio Pardo",
  state: "SP",
  zip: "13720-049",
  phone: "(19) 3608-4828",
  phoneHref: "tel:+551936084828",
  whatsapp: "(19) 99405-2577",
  whatsappE164: "+5519994052577",
  email: "clin_dermsjrp@hotmail.com",
  instagram: "https://www.instagram.com/florence.ortegaa/",
};

export const whatsappHref = `https://wa.me/5519994052577?text=${encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta com a Dra. Florence Marin Ortega.",
)}`;

export const fullAddress = `${clinic.street}, ${clinic.district} — ${clinic.city} - ${clinic.state}, CEP ${clinic.zip}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${clinic.street}, ${clinic.district}, ${clinic.city} - ${clinic.state}, ${clinic.zip}`,
)}&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinic.street}, ${clinic.city} - ${clinic.state}`,
)}`;

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre a Médica" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#abordagem", label: "Abordagem Integrada" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];
