import React, {Component} from 'react';
import _ from 'lodash';
import ReactLoading from "react-loading";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

class Products extends Component {
    componentDidMount() {
        const { search } = this.props.location;
        this.props.fetchProducts(search);
    };

    renderProducts() {
        return  _.map(this.props.products.preview, product => {
            return (
                <li key={product.id}>
                    <Link to={`/items/${product.id}`}  className='previewBox'>
                        <div className='previewImage'>
                            <img src={product.picture} alt={product.title} />
                        </div>
                        <div className='productInfo'>
                            <div className="productPrice">
                                <div>
                                    $ {product.price.amount}
                                    <sup>{product.price.decimals.toString().padStart(2, "0")}</sup>
                                    {product.free_shipping ? <img className='shipping' src='/images/shipping.png' alt='ic_shipping'/> : '' }
                                </div>
                            </div>
                            <div className="productTitle">
                                {product.title}
                            </div>
                        </div>
                        <div className='productLocation'> {product.location} </div>
                    </Link>
                    <hr/>
                </li>
            );
        });
    }

    render() {
        if(!this.props.products.preview) return <div className='loading'><ReactLoading type="spinningBubbles" color="black" /></div>;
        if (this.props.products.preview.missing) return <div className='notFound'>Lo siento, no encontramos ningún producto compatible con la búsqueda</div>
        return (
            <div>
                <Breadcrumb path={this.props.products.breadcrumb}/>
                <ul className='productList'>
                    {this.renderProducts()}
                </ul>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return { products: state.products};
}

export default connect(mapStateToProps, { fetchProducts})(Products);
