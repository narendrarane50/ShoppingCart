import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../container/Home";
import ShopPage from "../container/Shop";
import CartPage from "../container/Cart";
import ProfilePage from "../container/Profile";
import WishListPage from "../container/WistList";
import ProductDetails from "../container/ProductDetails";

export default function AllRoute() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/wish-list" component={WishListPage} />
        </Switch>
    )
}
