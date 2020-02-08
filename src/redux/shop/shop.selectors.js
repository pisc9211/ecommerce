import { createSelector, createStructuredSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createStructuredSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam) => (
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
)