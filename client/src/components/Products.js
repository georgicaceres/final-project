import React, {Component} from 'react';
import _ from 'lodash';
import ReactLoading from "react-loading";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import ErrorScreen from './ErrorScreen';

class Products extends Component {
    componentDidMount() {
        const { search } = this.props.location;
        this.props.fetchProducts(search);
    };

    renderProducts(arrayOfProducts) {
        return  _.map(arrayOfProducts, product => {
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
    };

    render() {
        const { preview, breadcrumb } = this.props.products
        if (this.props.error) return <ErrorScreen response={this.props.error}/>
        if(!preview) return <div className='loading'><ReactLoading type="spinningBubbles" color="#FFC300" /></div>;
        return (
            <div>
                <Breadcrumb path={breadcrumb}/>
                <ul className='productList'>
                    {this.renderProducts(preview)}
                </ul>
            </div>
        );
    };
};

function mapStateToProps({products}) {
    return { products, error: products.error };
};

export default connect(mapStateToProps, { fetchProducts})(Products);
