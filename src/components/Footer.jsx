import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⛽</span>
              <span className="font-bold text-lg text-orange-400">KP Pertamina</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dokumentasi kegiatan Kerja Praktik di PSTB.
              Sangat Seru dan penuh cerita.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-orange-400 mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition">Gallery</Link></li>
              <li><Link to="/timeline" className="hover:text-orange-400 transition">Timeline</Link></li>
              <li><Link to="/team" className="hover:text-orange-400 transition">Tim Kami</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-orange-400 mb-3">Ikuti Kami</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <span>📸</span> @Adamibnu02
              </a>
              <a
                href="mailto:kp.pertamina@email.com"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <span>📧</span> Adamibnu02@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 KP Pertamina. Dibuat dengan ❤️ oleh Tim Magang PSTB.</p>
        </div>
      </div>
    </footer>
  )
}
