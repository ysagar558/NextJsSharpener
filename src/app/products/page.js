import Link from "next/link";
import AuthGuard from "../components/AuthGuard";


export default async function ProductsPage() {
  const response = await fetch(
    "https://dummyjson.com/products",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return (
    <AuthGuard>
      <h1>All Products</h1>

      <div className="products-container">
        {data.products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              width="150"
            />

            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>

            <a href={`/products/${product.id}`}>
              View Details
            </a>
          </div>
        ))}
      </div>
    
    </AuthGuard>
  );
}
