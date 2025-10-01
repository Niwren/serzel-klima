"use client";

import Link from "next/link";
import { useState } from "react";

export default function HizmetlerClient() {
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
              <Link href="/hizmetler" className="text-blue-600 font-medium">Hizmetler</Link>
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
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/hizmetler" 
                  className="text-blue-600 font-medium py-2 px-4 rounded-lg bg-blue-50"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Klima bakımından su arıtma tamirine kadar geniş hizmet yelpazemizle 
              ev ve işyeri ihtiyaçlarınıza profesyonel çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Klima Bakım ve Onarım */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-6xl mb-6">❄️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Klima Bakım ve Onarım</h2>
              <p className="text-lg text-gray-600 mb-6">
                Profesyonel klima bakım hizmetleri ile klimanızın ömrünü uzatın ve enerji tasarrufu sağlayın.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hizmetlerimiz:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Klima gaz dolumu ve kontrolü
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Filtre temizliği ve değişimi
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Klima iç ve dış ünite temizliği
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Elektrik bağlantıları kontrolü
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Arıza tespiti ve giderme
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Kompresör ve fan motoru bakımı
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  💡 Önerilen bakım sıklığı: Yılda 2 kez (yaz ve kış öncesi)
                </p>
              </div>
            </div>

            {/* Su Arıtma Cihazı Tamiri */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-6xl mb-6">💧</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Su Arıtma Cihazı Tamiri</h2>
              <p className="text-lg text-gray-600 mb-6">
                Su arıtma cihazlarınızın düzenli bakımı ve arıza giderme hizmetleri ile temiz suya erişiminizi sürdürün.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hizmetlerimiz:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Filtre değişimi ve temizliği
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Membran değişimi
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Pompa ve motor tamiri
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Su kalitesi testi
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Sistem temizliği ve dezenfeksiyon
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Tank ve bağlantı kontrolü
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">
                  💡 Filtre değişim sıklığı: 6-12 ay arası (kullanım miktarına göre)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diğer Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600">Geniş hizmet yelpazemizle tüm ihtiyaçlarınıza çözüm</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Klima Montaj</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Yeni klima montajı</li>
                <li>• Eski klima sökümü</li>
                <li>• Yer değiştirme</li>
                <li>• Duvar delme işlemleri</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Elektrikli Ev Aletleri</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Buzdolabı tamiri</li>
                <li>• Çamaşır makinesi bakımı</li>
                <li>• Bulaşık makinesi tamiri</li>
                <li>• Mikrodalga fırın bakımı</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Acil Servis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 7/24 acil müdahale</li>
                <li>• Aynı gün hizmet</li>
                <li>• Hızlı arıza tespiti</li>
                <li>• Geçici çözümler</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ticari Hizmetler</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Ofis klima sistemleri</li>
                <li>• Mağaza klima bakımı</li>
                <li>• Restoran klima servisi</li>
                <li>• Fabrika klima sistemleri</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bakım Sözleşmeleri</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Yıllık bakım sözleşmeleri</li>
                <li>• Öncelikli servis</li>
                <li>• İndirimli fiyatlar</li>
                <li>• Garanti uzatma</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Danışmanlık</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Klima seçimi danışmanlığı</li>
                <li>• Enerji tasarrufu önerileri</li>
                <li>• Sistem optimizasyonu</li>
                <li>• Teknik raporlama</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fiyatlandırma</h2>
            <p className="text-lg text-gray-600">Şeffaf ve uygun fiyatlarımızla hizmetinizdeyiz</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temel Bakım</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₺</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✓ Filtre temizliği</li>
                <li>✓ Gaz kontrolü</li>
                <li>✓ Temel temizlik</li>
                <li>✓ Arıza tespiti</li>
              </ul>
              <a href="https://wa.me/905442018898?text=Merhaba, klima servisi hakkında bilgi almak istiyorum." 
              target="_blank" 
              rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block">
               Randevu Al
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popüler
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kapsamlı Bakım</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₺</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✓ Tüm temel bakım hizmetleri</li>
                <li>✓ İç/dış ünite temizliği</li>
                <li>✓ Elektrik bağlantı kontrolü</li>
                <li>✓ Kompresör bakımı</li>
                <li>✓ 6 ay garanti</li>
              </ul>
              <a href="https://wa.me/905442018898?text=Merhaba, klima servisi hakkında bilgi almak istiyorum." 
              target="_blank" 
              rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block">
                Randevu Al
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Su Arıtma Bakım</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">₺</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✓ Filtre değişimi</li>
                <li>✓ Sistem temizliği</li>
                <li>✓ Su kalitesi testi</li>
                <li>✓ Dezenfeksiyon</li>
              </ul>
              <a href="https://wa.me/905442018898?text=Merhaba, klima servisi hakkında bilgi almak istiyorum." 
              target="_blank" 
              rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block">
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hizmet Almak İçin Hemen İletişime Geçin</h2>
          <p className="text-xl text-blue-100 mb-8">Uzman ekibimiz size en uygun çözümü sunmak için hazır</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905442018898" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Hemen Ara: 0 544 201 88 98
            </a>
            <Link href="/iletisim" className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              Randevu Al
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
  );
}
