import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import appCss from "../styles.css?url";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "iCuro - Serwis iPhone Warszawa",
  description:
    "Profesjonalny serwis iPhone w Warszawie. Wymiana baterii iPhone, wymiana wyświetlacza iPhone, naprawa iPhone. Szybkie terminy, przystępne ceny.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  telephone: "+48 791 473 583",
  email: "serwis@icuro.pl",
  priceRange: "$$",
  areaServed: { "@type": "City", name: "Warszawa" },
  serviceType: [
    "Wymiana baterii iPhone",
    "Wymiana wyświetlacza iPhone",
    "Naprawa iPhone",
    "Wymiana ekranu iPhone",
    "Serwis iPhone",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Naprawa iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro" },
      {
        name: "description",
        content:
          "Profesjonalny serwis iPhone w Warszawie. Ekspresowa wymiana baterii i wyświetlacza z gwarancją jakości. Sprawdź cennik i umów wizytę w iCuro.",
      },
      {
        name: "keywords",
        content:
          "naprawa iPhone Warszawa, wymiana baterii iPhone, wymiana wyświetlacza iPhone, serwis iPhone",
      },
      { name: "author", content: "iCuro" },
      {
        property: "og:title",
        content: "Naprawa iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro",
      },
      {
        property: "og:description",
        content:
          "Profesjonalny serwis iPhone Warszawa. Wymiana baterii iPhone, wymiana wyświetlacza iPhone. Szybkie terminy, przystępne ceny, oryginalne części.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Naprawa iPhone Warszawa - Wymiana Baterii i Wyświetlacza | iCuro",
      },
      {
        name: "twitter:description",
        content:
          "Profesjonalny serwis iPhone Warszawa. Wymiana baterii iPhone, wymiana wyświetlacza iPhone. Szybkie terminy, przystępne ceny, oryginalne części.",
      },
      {
        name: "google-site-verification",
        content: "spEtZ9NI4O6TdwN0JTlW8ikgCkod5MjaB4SKNmCHy-8",
      },
      {
        name: "google-site-verification",
        content: "WPliPNS7_wjtdlnQjkhGLU1sVwY20ZIU5vflCtUaLGg",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 text-xl font-semibold">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a className="rounded-md border border-border px-4 py-2" href="/">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
