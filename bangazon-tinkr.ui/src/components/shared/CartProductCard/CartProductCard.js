import React from 'react';
import { Link } from 'react-router-dom';

import './CartProductCard.scss';

class CartProductCard extends React.Component {

  // static propTypes = {
  //   product: productShape.productShape,
  // }

  render() {
    const { product } = this.props;
    return (
      <div className="CartProductCard col-4">
        <div className="card border-dark mb-3">
        {/* <img src="..." className="card-img-top cardImage" alt="..." /> */}
          <div className="card-body">
          <h5 className="card-title">{product.rubbishName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.rubbishPrice}</h6>
            <p className="card-text">{product.rubbishDescription}</p>
            <hr></hr>
          <div className="row justify-content-around">
            <a href="#" className="card-link btn btn-dark btn-sm">Remove From Cart</a>
            {/* TO DO: Please test this link to make sure it is grabbing the rubbish id */}
            <Link to={`/product/${product.rubbishId}`} className="card-link btn btn-outline-dark">More Info...</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProductCard;
