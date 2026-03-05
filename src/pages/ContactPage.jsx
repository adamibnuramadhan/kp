import { useState } from 'react'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'kp.pertamina2025@gmail.com',
    href: 'mailto:kp.pertamina2025@gmail.com',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@kp.pertamina2025',
    href: 'https://instagram.com/kp.pertamina2025',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: '📍',
    label: 'Lokasi',
    value: 'PT Pertamina (Persero), Jakarta',
    href: null,
    color: 'bg-blue-100 text-blue-600',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            💬 Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Punya pertanyaan atau ingin tahu lebih lanjut? Jangan ragu untuk menghubungi kami!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className={`text-2xl p-3 rounded-xl ${item.color}`}>{item.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-800 font-semibold hover:text-green-600 transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-gray-700 mb-4">Ikuti Kami di Media Sosial</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  📸 Instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  🐦 Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-500 mb-6">
                  Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Kirim Pesan ✉️
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
