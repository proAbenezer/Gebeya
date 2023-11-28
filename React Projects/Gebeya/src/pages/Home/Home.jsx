import React, { useState } from 'react'

//Home Styles
import './Home.css'
import { NavLink } from 'react-router-dom'

function Home({ products, isPending, isErr, err, addItemToCart }) {

    return (
        <div className="home content">
            <div className="home__products">
                {isPending && <h1 className='home__product--Loading'>Loading ....</h1>}
                {isErr && err}
                {products && products.map(product => {
                    return (
                        <div
                            key={products.id}
                            className="home__product"
                        >
                            <h5 className="home__product--title">{product.title}</h5>
                            <img src={product.image} alt={product.descripation} className="home__product--image" />
                            <div className="home__proudct--buttons">
                                <span className='home__product--price'>$ {product.price}</span>
                                <button >
                                    <box-icon name='cart-add' className='home__product--cartIcon' color="red" size='32px'></box-icon>
                                </button>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Home