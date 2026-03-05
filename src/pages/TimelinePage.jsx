import timeline from '../data/timeline.json'
import TimelineItem from '../components/TimelineItem'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            📅 Perjalanan Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timeline KP</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Rangkaian kegiatan selama 3 bulan program Kerja Praktik dari awal hingga akhir.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-300 to-orange-300 hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* End marker */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-6 py-3">
            <span className="text-2xl">🎉</span>
            <span className="font-semibold text-gray-700">Selesai! Selamat & Terima Kasih</span>
          </div>
        </div>
      </div>
    </div>
  )
}
