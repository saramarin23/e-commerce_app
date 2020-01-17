import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
  //Object.keys collects all of  keys of an object and pass us into an array
);
//Converts an object into an array

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]

    // collections =>
    //   collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    //   )
  );
