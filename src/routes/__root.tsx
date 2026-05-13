import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IM COLOR sarl — Peinture & décoration à Kinshasa" },
      {
        name: "description",
        content:
          "IM COLOR sarl, leader de la peinture professionnelle à Kinshasa : peinture intérieure et extérieure, décoration, faux plafonds, climatisation et rénovation. Devis gratuit.",
      },
      { name: "author", content: "IM COLOR sarl" },
      { property: "og:site_name", content: "IM COLOR sarl" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F26B1F" },
      { property: "og:title", content: "IM COLOR sarl — Peinture & décoration à Kinshasa" },
      { name: "twitter:title", content: "IM COLOR sarl — Peinture & décoration à Kinshasa" },
      { name: "description", content: "Imcolor Clone Hub imports and synchronizes a website from a GitHub repository, adapting it for TanStack Start." },
      { property: "og:description", content: "Imcolor Clone Hub imports and synchronizes a website from a GitHub repository, adapting it for TanStack Start." },
      { name: "twitter:description", content: "Imcolor Clone Hub imports and synchronizes a website from a GitHub repository, adapting it for TanStack Start." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb659176-af1d-4b18-bfa4-12d7fb873a83/id-preview-188b11b6--3409d9b4-f8ff-461e-b925-f49fd90cb572.lovable.app-1778713877592.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eb659176-af1d-4b18-bfa4-12d7fb873a83/id-preview-188b11b6--3409d9b4-f8ff-461e-b925-f49fd90cb572.lovable.app-1778713877592.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IM COLOR sarl",
          url: "https://imcolor.lovable.app",
          logo: "https://imcolor.lovable.app/favicon.jpg",
          description:
            "Entreprise spécialisée en peinture professionnelle, décoration et aménagement intérieur à Kinshasa, RDC.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kinshasa",
            addressCountry: "CD",
          },
          areaServed: { "@type": "Country", name: "République Démocratique du Congo" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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
      <Outlet />
    </QueryClientProvider>
  );
}
