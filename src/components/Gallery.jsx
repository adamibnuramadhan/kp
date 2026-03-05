import { GDRIVE_EMBED_URL, GDRIVE_FOLDER_URL } from '../config'

export default function Gallery() {
  return (
    <section>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
        <iframe
          src={GDRIVE_EMBED_URL}
          title="Gallery Foto KP Pertamina"
          className="w-full min-h-[400px] h-[70vh]"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      <div className="text-center mt-6">
        <a
          href={GDRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka di Google Drive"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <span aria-hidden="true">📂</span> Buka di Google Drive
        </a>
      </div>
    </section>
  )
}
