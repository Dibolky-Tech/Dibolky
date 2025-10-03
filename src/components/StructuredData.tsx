export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jesper Dietrich",
    "jobTitle": "Creative Designer",
    "description": "Creative designer with over 15 years of experience in the design industry. Specializing in digital strategy, branding, UI/UX design, web design, and product design.",
    "url": "https://jesper-dietrich.com",
    "image": "https://jesper-dietrich.com/assets/img/logo-light.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "121 King Street",
      "addressLocality": "Melbourne",
      "addressCountry": "Australia"
    },
    "email": "company@email.com",
    "telephone": "+(123) 456 789 000",
    "sameAs": [
      "https://www.facebook.com/themetorium",
      "https://dribbble.com/Themetorium",
      "https://www.behance.net/Themetorium",
      "https://www.youtube.com/"
    ],
    "knowsAbout": [
      "Digital Strategy",
      "Branding & Identity",
      "UI/UX Design",
      "Web Design",
      "Product Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Creative Designer",
      "description": "Designing innovative solutions and impactful experiences that meet user needs and exceed expectations."
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
