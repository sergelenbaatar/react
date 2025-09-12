import Image from "next/image"

const products = [
  {
    id: 1,
    title: "iPhone 15",
    image: "/images/iphone.jpg",
    description: "Latest Apple smartphone with advanced features.",
    price: 1200,
  },
  {
    id: 2,
    title: "MacBook Pro",
    image: "/images/macbook.jpg",
    description: "Powerful laptop for developers and designers.",
    price: 2500,
  },
  {
    id: 3,
    title: "AirPods Pro",
    image: "/images/airpods.jpg",
    description: "Wireless earbuds with noise cancellation.",
    price: 250,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id)

  if (!product) return <div className="p-6">Product not found</div>

  return (
    <div className="p-6">
      <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={400}
        className="rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
    </div>
  )
}
