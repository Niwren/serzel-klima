import type { Metadata } from "next";
import HizmetlerClient from "./HizmetlerClient";

export const metadata: Metadata = {
  title: "Klima Bakım ve Su Arıtma Hizmetleri | Serzer Klima",
  description: "Klima bakım, onarım, montaj, su arıtma cihazı tamiri ve elektrikli ev aletleri servisi. Uzman teknisyenlerimizle profesyonel hizmet.",
  keywords: "klima bakım, klima tamiri, su arıtma tamiri, klima montaj, elektrikli ev aletleri tamiri, acil servis, İzmir klima servisi",
  openGraph: {
    title: "Klima Bakım ve Su Arıtma Hizmetleri | Serzer Klima",
    description: "Klima bakım, onarım, montaj, su arıtma cihazı tamiri ve elektrikli ev aletleri servisi. Uzman teknisyenlerimizle profesyonel hizmet.",
  },
};

export default function Hizmetler() {
  return <HizmetlerClient />;
}