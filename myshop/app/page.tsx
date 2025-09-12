import Carousel from "@/components/Carousel"
import ProductCard from "@/components/ProductCard"

const products = [
  {
    id: 1,
    title: "iPhone 15",
    image: "/images/iphone.jpg",
    description: "Latest Apple smartphone",
    price: 1200,
  },
  {
    id: 2,
    title: "MacBook Pro",
    image: "/images/macbook.jpg",
    description: "Powerful laptop",
    price: 2500,
  },
  {
    id: 3,
    title: "AirPods Pro",
    image: "/images/airpods.jpg",
    description: "Wireless earbuds",
    price: 250,
  },
]

export default function Home() {
  return (
    <div className="p-6">
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
