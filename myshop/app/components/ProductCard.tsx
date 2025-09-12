import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  id: number
  title: string
  image: string
  description: string
  price: number
}

export default function ProductCard({
  id,
  title,
  image,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <Image src={image} alt={title} width={300} height={200} className="rounded" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-blue-600 font-semibold mt-1">${price}</p>
      <Link
        href={`/products/${id}`}
        className="inline-block mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Дэлгэрэнгүй
      </Link>
    </div>
  )
}
