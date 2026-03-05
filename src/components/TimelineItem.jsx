export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Card */}
      <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
          {item.date}
        </span>
        <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
        {item.photo && (
          <img
            src={item.photo}
            alt={item.title}
            className="w-full h-40 object-cover rounded-xl"
            loading="lazy"
          />
        )}
      </div>

      {/* Center Dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-md ring-4 ring-red-100 mt-5" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}
