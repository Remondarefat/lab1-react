import React from 'react'

export default function productCard({products}) {
  return (
    <>
  {products.map((product, index) => (
                <div key={product.id} className='col-4'>
                    <img src={product.thumbnail} className='w-100' alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>stock : {product.stock}</p>
                </div>
            ))}
</>  )
}
