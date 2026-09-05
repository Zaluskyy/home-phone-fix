import { createFileRoute } from "@tanstack/react-router";
import RepairsPricing from "@/pages/RepairsPricing";

export const Route = createFileRoute("/cennik-napraw")({
  component: RepairsPricing,
});
