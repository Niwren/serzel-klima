"use client";

import Link from "next/link";
import { useState } from "react";

export default function HakkimizdaClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">Serzel Klima</Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Ana Sayfa</Link>
              <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 font-medium">Hizmetler</Link>
              <Link href="/hakkimizda" className="text-blue-600 font-medium">Hakkımızda</Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium">İletişim</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              {/* Call Button */}
               <a href="https://wa.me/905442018898?text=Merhaba, klima servisi hakkında bilgi almak istiyorum." target="_blank" rel="noopener noreferrer"className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base inline-flex items-center gap-2">
              📱<span className="hidden sm:inline">İletişim</span>
             </a>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/hizmetler" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hizmetler
                </Link>
                <Link 
                  href="/hakkimizda" 
                  className="text-blue-600 font-medium py-2 px-4 rounded-lg bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/iletisim" 
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              15 yıllık deneyimimizle klima bakım ve su arıtma alanında 
              güvenilir hizmet sunan profesyonel bir ekibiz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  2009 yılında kurulan Serzel Klima, başlangıçta küçük bir klima servisi olarak 
                  faaliyet göstermeye başladı. Müşteri memnuniyetini ön planda tutan yaklaşımımız 
                  ve kaliteli hizmet anlayışımız sayesinde hızla büyüdük.
                </p>
                <p>
                  Bugün, İzmir ve çevre illerde geniş bir müşteri portföyüne sahip olan 
                  firmamız, klima bakım ve onarımının yanı sıra su arıtma cihazı tamiri, 
                  elektrikli ev aletleri bakımı gibi geniş bir hizmet yelpazesi sunmaktadır.
                </p>
                <p>
                  Teknolojinin sürekli gelişmesiyle birlikte kendimizi de geliştirerek, 
                  en son teknoloji ekipmanlar ve tekniklerle hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kuruluş</h3>
                <p className="text-lg text-gray-600 mb-6">2009 yılında kurulduk</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Yıl Deneyim</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5000+</div>
                    <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Müşterilerimizin konforunu ve sağlığını ön planda tutarak, 
                klima ve su arıtma sistemlerinde en kaliteli bakım ve onarım 
                hizmetlerini sunmak. Teknolojik gelişmeleri takip ederek, 
                sürekli kendimizi geliştirmek ve müşteri memnuniyetini 
                en üst seviyede tutmak.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-6">👁️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Türkiye&apos;nin önde gelen klima bakım ve su arıtma servisi 
                firması olmak. Yenilikçi yaklaşımımız ve müşteri odaklı 
                hizmet anlayışımızla sektörde örnek gösterilen bir 
                marka haline gelmek. Çevre dostu teknolojileri benimseyerek 
                sürdürülebilir bir gelecek için katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600">İş yapış şeklimizi belirleyen temel değerlerimiz</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Güvenilirlik</h3>
              <p className="text-gray-600">Müşterilerimizin güvenini kazanmak ve korumak en önemli önceliğimizdir.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kalite</h3>
              <p className="text-gray-600">En yüksek kalite standartlarında hizmet sunmak için sürekli çalışırız.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hız</h3>
              <p className="text-gray-600">Müşterilerimizin zamanını değerli görür, hızlı çözümler üretiriz.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">İnovasyon</h3>
              <p className="text-gray-600">Teknolojik gelişmeleri takip ederek sürekli kendimizi yenileriz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600">Deneyimli ve uzman kadromuzla hizmetinizdeyiz</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Teknisyenler</h3>
              <p className="text-gray-600 mb-4">Sertifikalı ve deneyimli teknisyen kadromuz</p>
              <div className="text-2xl font-bold text-blue-600">12+</div>
              <div className="text-sm text-gray-600">Uzman Teknisyen</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eğitim</h3>
              <p className="text-gray-600 mb-4">Sürekli eğitim ve sertifikasyon programları</p>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Sertifikalı Personel</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ekipman</h3>
              <p className="text-gray-600 mb-4">En son teknoloji ekipmanlar ve araçlar</p>
              <div className="text-2xl font-bold text-purple-600">7/24</div>
              <div className="text-sm text-gray-600">Hazır Servis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sertifikalarımız</h2>
            <p className="text-lg text-gray-600">Kalite ve güvenilirlik belgelerimiz</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600">Kalite Yönetim Sistemi</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-gray-600">Çevre Yönetim Sistemi</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elektrik Lisansı</h3>
              <p className="text-gray-600">Elektrik İşleri Etüt İdaresi</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Klima Sertifikası</h3>
              <p className="text-gray-600">HVAC Teknisyen Sertifikası</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bizimle Çalışmak İster misiniz?</h2>
          <p className="text-xl text-blue-100 mb-8">Deneyimli ekibimizle tanışmak için iletişime geçin</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905442018898" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Hemen Ara: 0 544 201 88 98
            </a>
            <Link href="/iletisim" className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Serzel Klima</h3>
              <p className="text-gray-400">Profesyonel klima bakım ve su arıtma servisi. Güvenilir hizmet, uygun fiyat.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Klima Bakım ve Onarım</li>
                <li>Klima Montaj</li>
                <li>Su Arıtma Tamiri</li>
                <li>Acil Servis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 0 544 201 88 98</li>
                <li>✉️ info@serzerklima.com</li>
                <li>📍 İzmir, Türkiye</li>
                <li>🕒 7/24 Hizmet</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
                <li><Link href="/hizmetler" className="hover:text-white">Hizmetler</Link></li>
                <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
                <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Serzel Klima. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
