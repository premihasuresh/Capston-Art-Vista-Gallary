import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from 'react-redux'
import store from './redux/store'; // Import your Redux store
import App from './App';
import { CartProvider } from './context/CartContext'; // Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide Redux store */}
      <CartProvider> {/* Provide Cart context */}
        <Router>
          <App />
        </Router>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);