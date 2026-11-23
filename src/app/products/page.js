import Link from "next/link";

export default function products(){
    return (
        <>
        <h1>Products Page</h1>

        {Array.from({ length: 10 }, (_, index) => (
        <div key={index}>
          <Link href={`/products/${index + 1}`}>
            Product {index + 1}
          </Link>
        </div>
      ))}
        </>
    )
}