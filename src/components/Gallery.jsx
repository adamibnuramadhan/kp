import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import photos from '../data/photos.json'

function PhotoCard({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-100"
      onClick={onClick}
    >
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
      )}
      <img
        src={photo.thumb}
        alt={photo.title}
        className={`w-full h-52 object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-bold text-sm truncate">{photo.title}</h3>
        <p className="text-xs text-gray-200 mt-1 line-clamp-2">{photo.description}</p>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [index, setIndex] = useState(-1)

  const slides = photos.map((p) => ({ src: p.src, title: p.title, description: p.description }))

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <PhotoCard key={photo.id} photo={photo} onClick={() => setIndex(i)} />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </section>
  )
}
