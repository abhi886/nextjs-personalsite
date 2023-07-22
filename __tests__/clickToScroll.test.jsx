import { render, screen } from '@testing-library/react';
import React from 'react';
import ClickToScroll from '../src/components/ClickToScroll/index';

test('1. Should display up button when link parameter is sent ', () => {
  render(<ClickToScroll linkUpward="#about" />);
  const element = screen.queryByTestId('upwardArrow');
  expect(element).toBeTruthy();
});

test('2. Should not display any button when the parameter is not sent', () => {
  render(<ClickToScroll />);
  const element = screen.queryByTestId('upwardArrow');
  expect(element).toBeFalsy();
});
