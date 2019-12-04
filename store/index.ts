import { createStore, Store, State } from "easy-peasy";

import { useStoreActions, useStoreDispatch, useStoreState } from "./hooks";
import { IArticleModel } from "../pages/types";
import article from "../pages/model";

export interface StoreModel {
  article: IArticleModel;
}

const isServer = typeof window === "undefined";

export const storeModel: StoreModel = {
  article
};

export { useStoreActions, useStoreDispatch, useStoreState };

let store: Store<StoreModel>;

/**
 * 创建store
 * @param initialState
 */
const initializeStore = (initialState?: State) => {
  if (isServer) {
    return createStore(storeModel, initialState);
  }
  if (!store) {
    store = createStore(storeModel, initialState);
  }
  return store;
};

export default initializeStore;
