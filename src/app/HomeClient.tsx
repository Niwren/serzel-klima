"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomeClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serzer Klima",
    "description": "Profesyonel klima bakım ve su arıtma servisi",
    "url": "https://serzerklima.com",
    "telephone": "+905442018898",
    "email": "info@serzerklima.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İzmir",
      "addressCountry": "TR"
    },
    "openingHours": "Mo-Sa 08:00-18:00",
    "serviceArea": {
      "@type": "City",
      "name": "İstanbul"
    },
    "services": [
      "Klima Bakım ve Onarım",
      "Su Arıtma Cihazı Tamiri", 
      "Klima Montaj",
      "Elektrikli Ev Aletleri Tamiri",
      "Acil Servis"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              <Link href="/" className="text-blue-600 font-medium">Ana Sayfa</Link>
              <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 font-medium">Hizmetler</Link>
              <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</Link>
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
                  className="text-blue-600 font-medium py-2 px-4 rounded-lg bg-blue-50"
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
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
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
      <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url("/klima.png")'}}>
 
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Profesyonel Klima Bakım ve Su Arıtma Servisi
          </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Uzman teknisyenlerimizle klima bakım, onarım, montaj ve su arıtma cihazı tamiri hizmetleri. 
        7/24 hizmetinizdeyiz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+905442018898" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          📞 Hemen Ara: 0 544 201 88 98
        </a>
        <Link href="/hizmetler" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
          Hizmetlerimizi İncele
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600">Klima ve su arıtma konusunda profesyonel hizmetler</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Klima Bakım ve Onarım</h3>
              <p className="text-gray-600">Profesyonel klima bakımı, gaz dolumu, filtre temizliği ve arıza giderme hizmetleri.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Klima Montaj</h3>
              <p className="text-gray-600">Yeni klima montajı, eski klima sökümü ve yer değiştirme işlemleri.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Su Arıtma Cihazı Tamiri</h3>
              <p className="text-gray-600">Su arıtma cihazı bakımı, filtre değişimi ve arıza giderme hizmetleri.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elektrikli Ev Aletleri</h3>
              <p className="text-gray-600">Buzdolabı, çamaşır makinesi ve diğer elektrikli ev aletleri tamiri.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Acil Servis</h3>
              <p className="text-gray-600">7/24 acil servis hizmeti ile hızlı müdahale ve çözüm.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kombi Bakım</h3>
              <p className="text-gray-600">
                Kombinizin verimli ve güvenli çalışması için periyodik bakım, arıza tespiti ve temizlik hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Serzel Klima?</h2>
            <p className="text-lg text-gray-600">Güvenilir ve profesyonel hizmet anlayışımız</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzman Teknisyenler</h3>
              <p className="text-gray-600">Deneyimli ve sertifikalı teknisyen kadromuz</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Hizmet</h3>
              <p className="text-gray-600">Aynı gün içinde hızlı müdahale ve çözüm</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uygun Fiyat</h3>
              <p className="text-gray-600">Rekabetçi fiyatlar ve şeffaf fiyatlandırma</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garanti</h3>
              <p className="text-gray-600">Tüm işlemlerimizde garanti ve güvence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hemen İletişime Geçin</h2>
          <p className="text-xl text-blue-100 mb-8">Klima ve su arıtma ihtiyaçlarınız için profesyonel çözümler</p>
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
              <h3 className="text-xl font-bold mb-4">Serzer Klima</h3>
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
                <li>✉️ info@serzelklima.com</li>
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
    </>
  );
}
