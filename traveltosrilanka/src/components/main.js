import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomeHandler';
import SupermarketsPage from './SupermarketsPage/SupermarketPageHandler';
import SearchResultSupermarketsPage from './SearchResultSupermarkets/ResultSupermarketPaheHandler';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/SupermarketsPage" component={SupermarketsPage} />
        <Route path="/SearchResultSupermarketsPage" component={SearchResultSupermarketsPage} />
    </Switch>
)

export default Main;