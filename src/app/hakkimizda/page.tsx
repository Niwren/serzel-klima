import type { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
  title: "Hakkımızda | Serzer Klima - 15 Yıllık Deneyim",
  description: "2009 yılından beri İstanbul'da klima bakım ve su arıtma hizmetleri veren Serzer Klima. Uzman ekibimiz ve kaliteli hizmet anlayışımızla müşteri memnuniyeti odaklı çalışıyoruz.",
  keywords: "Serzer Klima hakkında, klima servisi deneyim, İstanbul klima firması, güvenilir klima servisi, kaliteli hizmet",
  openGraph: {
    title: "Hakkımızda | Serzer Klima - 15 Yıllık Deneyim",
    description: "2009 yılından beri İstanbul'da klima bakım ve su arıtma hizmetleri veren Serzer Klima. Uzman ekibimiz ve kaliteli hizmet anlayışımızla müşteri memnuniyeti odaklı çalışıyoruz.",
  },
};

export default function Hakkimizda() {
  return <HakkimizdaClient />;
}