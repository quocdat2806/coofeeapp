/* eslint-disable react/react-in-jsx-scope */

import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import AppNavigation from './src/navigation';
import {PersistGate} from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
