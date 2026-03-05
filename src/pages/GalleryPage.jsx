import { GDRIVE_FOLDER_URL, GDRIVE_EMBED_URL } from '../config'

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
          <a
            href={GDRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 87.3 78" fill="currentColor">
              <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L28.6 48H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
              <path d="M43.65 25L29.0 0c-1.35.8-2.5 1.9-3.3 3.3L1.2 43.5C.4 44.9 0 46.45 0 48h28.6z" fill="#00ac47"/>
              <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H58.7L73.55 76.8z" fill="#ea4335"/>
              <path d="M43.65 25L58.3 0H29.0z" fill="#00832d"/>
              <path d="M58.7 48H87.3l-13.75-23.8L58.7 48z" fill="#2684fc"/>
              <path d="M28.6 48L14.05 76.8c1.35.8 2.9 1.2 4.5 1.2h50.2c1.6 0 3.15-.45 4.5-1.2L58.7 48z" fill="#ffba00"/>
            </svg>
            Buka di Google Drive
          </a>
        </div>
      </div>

      {/* Embedded Google Drive Folder */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">📁 Foto KP Pertamina</h2>
            <a
              href={GDRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              Buka di tab baru ↗
            </a>
          </div>
          <iframe
            src={GDRIVE_EMBED_URL}
            title="Gallery Foto KP Pertamina"
            className="w-full"
            style={{ height: '600px', border: 0 }}
          />
        </div>
      </div>
    </div>
  )
}
