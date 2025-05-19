import React, { Fragment } from 'react'

const CartPage = ({cartItems,setCartItems}) => {
  return (
     <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                {cartItems.map((item)=>(
                <Fragment>
                     <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt="Laptop" height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to=""></Link>
                            <a href="#">{item.product.name}, {item.product.description}</a>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">&#8377;{item.product.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus">-</span>
                                <input type="number" className="form-control count d-inline" value="1" readOnly />

								<span className="btn btn-primary plus">+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
                        </div>

                    </div>
                </div>
                <hr />
                </Fragment>)
            )}
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartItems.length} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">&#8377;100</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage