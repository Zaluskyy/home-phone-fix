import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
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
  }, [title, description, keywords, location]);

  return null;
};

export default SEO;
