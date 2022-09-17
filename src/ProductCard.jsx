import React from "react";

const ProductCard = ({product}) =>{
    return(
        <div className="product">
        <div>
            <p>{product?.productId}</p>
        </div>
        <div>
            <img src={`https://cdn.esyms.com/${product?.img[0]?.src}`} alt={product?.name?.en}/>
        </div>
        <div>
            <span>
                {product?.Type}
            </span>
            <h3>
                {product?.name.en}
            </h3>
        </div>
    </div>
    )
}

export default ProductCard;