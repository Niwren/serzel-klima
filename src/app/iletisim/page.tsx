import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim | Serzer Klima - Hemen Ara 0 544 201 88 98",
  description: "Serzer Klima iletişim bilgileri. Klima bakım ve su arıtma hizmetleri için hemen arayın: 0 544 201 88 98. İzmir   genelinde 7/24 hizmet.",
  keywords: "Serzer Klima iletişim, klima servisi telefon, İzmir klima servisi numarası, acil klima servisi, WhatsApp klima servisi",
  openGraph: {
    title: "İletişim | Serzer Klima - Hemen Ara 0 544 201 88 98",
    description: "Serzer Klima iletişim bilgileri. Klima bakım ve su arıtma hizmetleri için hemen arayın: 0 544 201 88 98. İzmir genelinde 7/24 hizmet.",
  },
};

export default function Iletisim() {
  return <IletisimClient />;
}