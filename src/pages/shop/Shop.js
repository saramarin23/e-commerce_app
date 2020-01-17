import React from "react";
// import SHOP_DATA from "../../redux/shop/Shop.data";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/Collection";

const ShopPage = ({ match }) => {
  return (
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     collections: SHOP_DATA
    //   };
    // } //Same: we don't need our class component

    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
