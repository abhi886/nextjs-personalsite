import { render, screen } from '@testing-library/react';
import React from 'react';
import ClickToScroll from '../src/components/ClickToScroll/index';

test('1. Should display up svg button when link linkUpward parameter is sent ', () => {
  render(<ClickToScroll linkUpward="#about" />);
  const element = screen.queryByTestId('upwardArrow');
  expect(element).toBeInTheDocument();
});

test('2. Should not display up svg button when linkUpward parameter is not sent', () => {
  render(<ClickToScroll />);
  const element = screen.queryByTestId('upwardArrow');
  expect(element).not.toBeInTheDocument();
});

test('3. Should display down svg button when linkDown parameter is sent ', () => {
  render(<ClickToScroll linkDownward="#about" />);
  const element = screen.queryByTestId('downwardArrow');
  expect(element).toBeInTheDocument();
});
test('4. Should not display down svg button when linkDown parameter is not sent ', () => {
  render(<ClickToScroll />);
  const element = screen.queryByTestId('downwardArrow');
  expect(element).not.toBeInTheDocument();
});
