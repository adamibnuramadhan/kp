import { Link } from 'react-router-dom'

const highlights = [
  { icon: '📸', label: '9+ Foto Dokumentasi' },
  { icon: '👥', label: '6 Peserta Magang' },
  { icon: '📅', label: '3 Bulan Program' },
  { icon: '🏭', label: 'PT Pertamina (Persero)' },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Pertamina Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-700/70 to-orange-600/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <span>⛽</span> Kerja Praktik 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Kenangan
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              KP Pertamina
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Tiga bulan perjalanan belajar, berkarya, dan bertumbuh bersama
            di PT Pertamina (Persero). Setiap momen penuh makna dan kenangan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              📸 Lihat Gallery
            </Link>
            <Link
              to="/timeline"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/40 hover:bg-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              📅 Lihat Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="bg-white py-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full mb-4">
              Tentang Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Pengalaman Berharga di{' '}
              <span className="text-red-500">Pertamina</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Program Kerja Praktik (KP) di PT Pertamina (Persero) memberikan kami
              kesempatan luar biasa untuk belajar langsung di salah satu perusahaan
              energi terbesar di Indonesia.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Selama 3 bulan, kami terlibat dalam berbagai proyek nyata, mendapat
              bimbingan dari para profesional berpengalaman, dan membangun jaringan
              yang berharga untuk karier ke depan.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              👥 Kenali Tim Kami
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
              alt="Team work"
              className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80"
              alt="Discussion"
              className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&q=80"
              alt="Presentation"
              className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80"
              alt="Outing"
              className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-16 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Jelajahi Kenangan Kami</h2>
          <p className="text-white/80 mb-8">
            Lihat koleksi foto, perjalanan timeline, dan kenali anggota tim yang luar biasa ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-orange-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Buka Gallery →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white/20 border border-white/40 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
