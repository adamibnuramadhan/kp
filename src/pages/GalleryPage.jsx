import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            📸 Dokumentasi
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery Foto</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Kumpulan foto dokumentasi kegiatan selama Kerja Praktik di PT Pertamina.
          </p>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Gallery />
      </div>
    </div>
  )
}
