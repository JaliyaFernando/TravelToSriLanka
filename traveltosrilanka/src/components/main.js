import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomeHandler';
import SupermarketsPage from './SupermarketsPage/SupermarketPageHandler';
import SearchResultSupermarketsPage from './SearchResultSupermarkets/ResultSupermarketPaheHandler';
import ItemsSelectPage from './SupermarketItems/S_ItemsSelectPageHandler';
import BiscuitsPage from './Items_Biscuits/Item_BiscuitsPageHandler';
import CartPage from './Cart/CartPageHandler';
import MyCartPage from './MyCart/MyCartPageHandler';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/SupermarketsPage" component={SupermarketsPage} />
        <Route path="/SearchResultSupermarketsPage" component={SearchResultSupermarketsPage} />
        <Route path="/ItemsSelectPage" component={ItemsSelectPage} />
        <Route path="/BiscuitsPage" component={BiscuitsPage} />
        <Route path="/CartPage" component={CartPage} />
        <Route path="/MyCartPage" component={MyCartPage} />

    </Switch>
)

export default Main;