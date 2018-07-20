import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactLoading from "react-loading";
import { fetchProduct } from '../actions';
import Breadcrumb from './Breadcrumb';
import Carrousel from './Carrousel';

class ProductDetail extends Component {
    componentDidMount() {
        if (!this.props.product) {
            const { id } = this.props.match.params;
            this.props.fetchProduct(id);
        };
    };

    render() {
        const { product } = this.props;
        if (!product) return <div className='loading'><ReactLoading type="spinningBubbles" color="black" /></div>;
        if (product.missing) return <div className='notFound'>Lo sentimos, no encontramos ningún producto compatible con la búsqueda. Inténtelo nuevamente! </div>
        return (
            <div>
                <Breadcrumb path={product.category}/>
                <div className='detailContainer'>
                    <figure className='detailImage'>
                        <Carrousel pictures={product.picture}/>
                        <figcaption>
                            <div className='descriptionTitle'> Descripción del producto </div>
                            <div className='descriptionContent'>{product.description
                                .map((paragraph, index) => paragraph.indexOf('--------')>= 0 ? <hr key={index}/> : <p key={index}>{paragraph}</p>)}</div>
                        </figcaption>
                    </figure>
                    <div className='details'>
                        <div className='condAndSold'>{product.condition} - {product.sold_quantity} vendidos</div>
                        <div className='itemTitle'>{product.title}</div>
                        <div className='itemPrice'>$ {product.price.amount}<sup>{product.price.decimals.toString().padStart(2, "0")}</sup></div>
                        <button className='btn'>COMPRAR</button>
                    </div>

                </div>
            </div>
        );
    };
};

function mapStateToProps({products}, ownProps) {
    return { product: products[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchProduct })(ProductDetail);
