export async function search(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
  const data = await res.json()

  return data.products
    .filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      
      product.description.toLowerCase().includes(query.toLowerCase())

    ).map(product => ({

    title: product.title,
    description:product.description,
    price:product.price,
    brand:product.brand,
    rating:product.rating
    }
  
  
))
}