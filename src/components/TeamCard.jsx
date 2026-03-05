export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden h-56">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
        <span className="inline-block mt-1 mb-3 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
          {member.role}
        </span>
        <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
      </div>
    </div>
  )
}
