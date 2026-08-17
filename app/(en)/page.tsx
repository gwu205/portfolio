import type { Metadata } from "next";
import { HomeView } from "../components/page/home/HomeView";
import { buildMetadata } from "../i18n/metadata";

export const metadata: Metadata = buildMetadata({ locale: "en", path: "/" });

export default function Page() {
  return <HomeView />;
}
