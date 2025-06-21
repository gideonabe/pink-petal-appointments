import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
// const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-YOUR_MEASUREMENT_ID'; // Fallback for dev

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/*
          Place AnalyticsTracker inside BrowserRouter
          so it has access to useLocation() hook from react-router-dom.
          It should be outside of <Routes> but inside <BrowserRouter>.
        */}
        <AnalyticsTracker measurementId={GA_MEASUREMENT_ID} />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
