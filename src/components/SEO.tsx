import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
}

const BASE_URL = "https://www.icuro.pl";

const SEO = ({ title, description, keywords, canonicalUrl, schemaData }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl !== undefined) {
      const fullUrl = `${BASE_URL}${canonicalUrl.startsWith("/") ? "" : "/"}${canonicalUrl}`.replace(/([^:]\/)\/+/g, "$1");
      if (canonicalLink) {
        canonicalLink.setAttribute("href", fullUrl);
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        canonicalLink.setAttribute("href", fullUrl);
        document.head.appendChild(canonicalLink);
      }
    } else {
      canonicalLink?.remove();
    }

    // Schema.org JSON-LD
    let schemaScript = document.getElementById("seo-schema") as HTMLScriptElement | null;
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("id", "seo-schema");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else {
      schemaScript?.remove();
    }

    // Cleanup on unmount
    return () => {
      document.querySelector('link[rel="canonical"]')?.remove();
      document.getElementById("seo-schema")?.remove();
    };
  }, [title, description, keywords, location, canonicalUrl, schemaData]);

  return null;
};

export default SEO;
