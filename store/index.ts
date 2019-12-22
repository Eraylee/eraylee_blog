import { createStore, Store, State } from 'easy-peasy';
import { IHeaderModel } from '../components/Header/types';
import { header } from '../components/Header/model';

export interface StoreModel {
  header: IHeaderModel;
}

const isServer = typeof window === 'undefined';

export const storeModel: StoreModel = {
  header,
};

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

export { useStoreActions, useStoreDispatch, useStoreState } from './hooks';
export default initializeStore;
