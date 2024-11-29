import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContex } from '../../context/storeContext'


const Fooditem = ({ id, name, price, description, image }) => {

  //  const[itemCount,setItemCount] = useState(0)
  const {cartItems={},addToCart,removeFromCart } = useContext(StoreContex)


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
          ? < img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }

      </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'>

          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className='food-item-desc'>{description}</p>
      <p className='food-item-price'>${price}</p>
    </div>
  )
}

export default Fooditem
