import team from '../data/team.json'
import TeamCard from '../components/TeamCard'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
            👥 Kenali Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tim Magang</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Perkenalkan anggota tim Kerja Praktik kami yang luar biasa dari berbagai
            jurusan dan universitas.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 text-center border border-blue-100">
          <p className="text-2xl mb-4">🤝</p>
          <blockquote className="text-lg font-medium text-gray-700 italic mb-2">
            "Bersama kita bisa mencapai lebih banyak hal."
          </blockquote>
          <p className="text-sm text-gray-500">— Tim KP Pertamina 2026</p>
        </div>
      </div>
    </div>
  )
}
