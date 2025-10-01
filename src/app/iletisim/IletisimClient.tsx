"use client";

import { useState } from "react";
import Link from "next/link";

export default function IletisimClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

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
              <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium">Hakkımızda</Link>
              <Link href="/iletisim" className="text-blue-600 font-medium">İletişim</Link>
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
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/iletisim" 
                  className="text-blue-600 font-medium py-2 px-4 rounded-lg bg-blue-50"
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
              İletişim
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Klima bakım ve su arıtma ihtiyaçlarınız için bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="text-2xl">📞</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600 mb-1">0 544 201 88 98</p>
                    <p className="text-gray-600">7/24 Acil Servis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-2xl">✉️</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600 mb-1">info@serzelklima.com</p>
                    <p className="text-gray-600">24 saat içinde yanıt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <div className="text-2xl">📍</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600 mb-1">İzmir, Türkiye</p>
                    <p className="text-gray-600">Tüm ilçelere hizmet</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <div className="text-2xl">🕒</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600 mb-1">Pazartesi - Cumartesi: 08:00 - 18:00</p>
                    <p className="text-gray-600">Pazar: Acil Servis</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+905442018898" 
                  className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>Hemen Ara</span>
                </a>
                
                <a 
                  href="https://wa.me/905442018898" 
                  className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Formu</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-gray-600">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0 544 201 88 98"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="klima-bakim">Klima Bakım ve Onarım</option>
                      <option value="klima-montaj">Klima Montaj</option>
                      <option value="su-aritma">Su Arıtma Cihazı Tamiri</option>
                      <option value="elektrikli-aletler">Elektrikli Ev Aletleri</option>
                      <option value="acil-servis">Acil Servis</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="İhtiyacınızı detaylı olarak açıklayın..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Gönderiliyor...</span>
                      </span>
                    ) : (
                      "Mesaj Gönder"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="text-lg text-gray-600">İzmir ve çevre illerde geniş hizmet ağımız</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İzmir</h3>
              <p className="text-gray-600">Tüm ilçelerde hizmet</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Çeşme</h3>
              <p className="text-gray-600">Merkez ve ilçeler</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aydın</h3>
              <p className="text-gray-600">Geniş hizmet ağı</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manisa</h3>
              <p className="text-gray-600">Profesyonel hizmet</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-lg text-gray-600">Merak ettiğiniz konular hakkında bilgi alın</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Servis süresi ne kadar?</h3>
              <p className="text-gray-600">Normal servisler için 1-2 gün, acil servisler için aynı gün içinde müdahale ediyoruz.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Garanti süresi nedir?</h3>
              <p className="text-gray-600">Tüm işlemlerimizde 6 ay garanti veriyoruz. Bakım sözleşmelerinde garanti süresi uzatılabilir.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fiyatlar nasıl belirleniyor?</h3>
              <p className="text-gray-600">Fiyatlarımız şeffaf ve rekabetçidir. Önce ücretsiz keşif yapıp net fiyat veriyoruz.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hangi markaları servis ediyorsunuz?</h3>
              <p className="text-gray-600">Tüm klima markalarını servis ediyoruz. Su arıtma cihazları için de geniş marka yelpazemiz var.</p>
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
