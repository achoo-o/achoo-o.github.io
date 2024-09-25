import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const queryClient = new QueryClient()
const root = createRoot(document.getElementById('app') as HTMLElement)

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})