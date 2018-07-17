import React, { Component } from 'react';
import { fetchProducts } from '../actions';
import { connect } from 'react-redux';
import queryString from 'query-string';

class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {term: queryString.parse(props.location.search).search || ''};
    };

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.term) {
            const search = queryString.stringify({search: this.state.term});
            this.props.fetchProducts(`?${search}`)
            this.props.history.push(`/items?${search}`);
        }
    };

    render() {
        return (
            <header>
                <div className='searchBox'>
                    <figure className='logo'>
                        <img src='/images/logo.png' alt="logo"/>
                    </figure>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input
                            placeholder='Buscar...'
                            className='searchInput'
                            value={this.state.term}
                            onChange={this.onInputChange.bind(this)}/>
                        <button type='submit' className='searchButton'>
                            <img src='/images/search.png' alt="ic-search"/>
                        </button>
                    </form>
                </div>
            </header>
        );
    };
};

function mapStateToProps(state) {
    return { products: state.products};
}

export default connect(mapStateToProps, { fetchProducts})(SearchBar);
