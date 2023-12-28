import React, { useState } from 'react'

const ProductDispaly = ({item}) => {
    //console.log(item);
    const desc = "In ecommerce, specifically, they're the blurbs of text on product pages that tell customers about your product. A good product description describes your product's features and benefits."
    const {name, id ,price, seller,ratingsCount, quantity} = item;
    const [prequantity, setQuantity] = useState(quantity);
    const[coupon,setCoupon] = useState("");
    const[size,setSize] = useState("Select Size");
    const[color,setColor] = useState("Choose Color");

    const handleSizeChanged = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    
  return (
    <div>
     <div>
        <h4>{name}</h4>
        <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} Review</span>
        </p>
        <h4>₹{price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>

     </div>
     <div>
        <form>
              {/*For Size */}
            <div className="select-product size">
                <select value={size} onChange={handleSizeChanged}>
                    <option>Select Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                    
                </select>
                <i className="icofont-rounded-down"></i>
            </div>

             {/*For Color*/}
            <div className="select-product color">
                <select value={color} onChange={handleColorChange}>
                    <option>Choose Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    
                </select>
                <i className="icofont-rounded-down"></i>
            </div>

             {/*Cart Count */}
              <div className="cart-plus-minus">
                <div className='dec qtybutton'>-</div>
                <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity}/>
                <div className='inc qtybutton'>+</div>
              </div>
        </form>
     </div>
    </div>
  )
}

export default ProductDispaly
