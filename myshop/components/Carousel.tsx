"use client"
import { useState } from "react"
import Image from "next/image"

const slides = [
  { id: 1, img: "/images/slide1.jpg", title: "First Slide" },
  { id: 2, img: "/images/slide2.jpg", title: "Second Slide" },
  { id: 3, img: "/images/slide3.jpg", title: "Third Slide" },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1)

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1)

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
            {slide.title}
          </h2>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ›
      </button>
    </div>
  )
}
