import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import AddToCart from './AddToCart';

const renderWithStore = (ui, { initialState, store = configureStore({ reducer: { cart: cartReducer }, preloadedState: initialState }) } = {}) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

test('adds item to cart when button is clicked', () => {
  const item = { id: 1, name: 'Test Item', price: 10 };
  const initialState = { cart: { items: [] } };
  const store = configureStore({ reducer: { cart: cartReducer }, preloadedState: initialState });

  renderWithStore(<AddToCart item={item} />, { store });

  const button = screen.getByText(/add to cart/i);
  fireEvent.click(button);

  const state = store.getState();
  expect(state.cart.items).toContainEqual(item);
});