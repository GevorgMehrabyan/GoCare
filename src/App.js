import React from 'react';
//components
import { Provider } from 'react-redux';
import { store, history } from './Redux/store';
import RouterApp from './Router/RouterApp';

function App() {
  return (
    <Provider store={store}>
      <RouterApp history={history}/>
    </Provider>
  );
}

export default App;
