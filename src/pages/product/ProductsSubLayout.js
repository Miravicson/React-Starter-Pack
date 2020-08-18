import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowseProductsPage } from "./BrowseProductsPage";
import { ProductProfilePage } from "./ProductProfilePage";

export function ProductsSubLayout() {
  return (
    <div className="product-sub-layout">
      <aside>Hi!</aside>
      <div className="primary-content">
        <Switch>
          <Route path="/products" exact component={BrowseProductsPage} />
          <Route path="/products/:productId" component={ProductProfilePage} />
        </Switch>
      </div>
    </div>
  );
}
