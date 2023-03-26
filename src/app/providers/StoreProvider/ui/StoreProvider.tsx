import React, { type FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface IStoreProvider {
  initialState?: StateSchema
}

export const StoreProvider: FunctionComponent<IStoreProvider> = (props) => {
  const { initialState, children } = props;
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
