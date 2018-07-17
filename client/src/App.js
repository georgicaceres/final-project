import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import SearchBar from './components/SearchBar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
    render () {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Router>
                    <div>
                        <Route component={SearchBar}/>
                        <Switch>
                            <Route path='/items/:id' component={ProductDetail}/>
                            <Route path='/items' component={Products}/>
                            <Route path='/' render={() => <div/>}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }

};

export default App;
