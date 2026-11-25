import Image from "next/image";

export default async function ProductDetails({params}){
    const {id}= await params;
    
    const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return <h1>Product not found!</h1>;
  }

  const product = await response.json();

  return (
    <div className="product-details">
      <h1>{product.title}</h1>

      <Image 
        src="/images/Laptop.png"
        alt="Laptop Image"
        height={250}
        width={250}
      />

      <p><strong>Product ID:</strong> {product.id}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );

}