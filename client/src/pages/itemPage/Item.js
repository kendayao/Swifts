import React, {useState} from 'react'
import './Item.css'
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {selectShoppingCart} from '../../redux/cart/cart.selectors'
import {useParams, useHistory} from 'react-router-dom'
import {addToCart} from '../../redux/cart/cart.actions'

function Item({collections, addToCart, shoppingCart}) {
    const [size, setSize]=useState(6);
    const [quantity, setQuantity]=useState(1);

    const { ItemId }=useParams();
    const { CollectionId }=useParams();
    const history=useHistory();

    const collectionItems=collections[CollectionId]
    const product=collectionItems.items.find(item=>ItemId===item.refName)

    const item={
        ...product,
        size: parseInt(size),
        quantity: parseInt(quantity)
       }

    return (
        <div className='item'>
                
  
            <div className='item__sectionLeft'>
                <img className='item__image' src={`../../images/${product.image}.png`} alt='product'/>
            </div>
            <div className='item__sectionRight'>
                <p className='item__title'>{product.name}</p>
                <p className='item__price'>{product.price}</p>

                <p className='item__color'>Color: {product.color}</p>

                <label className='item__label' htmlFor="size">Choose your size</label>
                <select className='item__select' value={size}  name="size" onChange={(event)=>setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select><br/>

                <label className='item__label' htmlFor="size">Quantity</label>
                <select className='item__select' value={quantity}  name="size" onChange={(event)=>setQuantity(event.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>

                </select>

                {shoppingCart.some(item=>item.refName===product.refName)?<button className='item__button' onClick={()=>history.push('/checkout')}>Item in cart: click to view cart</button>:
                <button className='item__button' onClick={()=>addToCart(item)}>Add to cart</button>
                }
                
                <p className='item__link' onClick={()=>history.goBack()}>Go back to previous page</p>
            </div>
           
           

        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    addToCart: item=>dispatch(addToCart(item))
})

const mapStateToProps=state=>({
    collections: selectCollections(state),
    shoppingCart: selectShoppingCart(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
