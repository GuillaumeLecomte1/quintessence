import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import { router } from "./router";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    },
  },
});

const domRoot = document.getElementById("root")!;
const root = createRoot(domRoot);

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </HelmetProvider>
);
