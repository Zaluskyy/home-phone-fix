import { createFileRoute } from "@tanstack/react-router";
import ServicePricePage from "@/pages/ServicePricePage";

export const Route = createFileRoute("/uslugi/$serviceSlug")({
  component: ServicePricePage,
});
