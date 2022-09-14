import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import ListItem from './ListItem';
import ProductList from './ProductList';

describe('ListItem component', () => {
  const handlePropChange = vi.fn();
  const handleDelete = vi.fn();

  it('should display given prop values', () => {
    const { container, getByDisplayValue } = render(
      <ListItem
        handlePropChange={handlePropChange}
        handleDelete={handleDelete}
        index={0}
        product={{
          id: 0,
          name: 'Corn',
          qty: 100,
          unit: 'grams',
        }}
      />
    );

    expect(container).toBeTruthy();
    expect(getByDisplayValue('Corn')).toBeVisible();
    expect(getByDisplayValue(100)).toBeInTheDocument();
  });

  it('should change name when typing in the input', () => {
    // arrange
    const fakeState = {
      id: 0,
      name: 'Corn',
      qty: 100,
      unit: 'grams',
    };

    const handlePropChange = vi.fn((e: { target: HTMLInputElement }) => {
      fakeState.name = e.target.value;
    });

    const { getByDisplayValue } = render(
      <ListItem
        handlePropChange={handlePropChange}
        handleDelete={handleDelete}
        index={0}
        product={fakeState}
      />
    );

    // act

    fireEvent.change(getByDisplayValue('Corn'), {
      target: { value: 'Carrot' },
    });

    // assert
    expect(handlePropChange).toBeCalledTimes(1);
    expect(fakeState.name).toEqual('Carrot');
  });

  it('should change quantity when typing in the input', () => {
    // arrange
    const fakeState = {
      id: 2,
      name: 'Tomato',
      qty: 5,
      unit: 'kilo',
    };

    const handlePropChange = vi.fn((e: { target: HTMLInputElement }) => {
      fakeState.qty = e.target.valueAsNumber;
    });

    const { getByLabelText } = render(
      <ListItem
        handlePropChange={handlePropChange}
        handleDelete={handleDelete}
        index={0}
        product={fakeState}
      />
    );

    // act
    const element = getByLabelText(/quantity/gi);

    fireEvent.change(element, { target: { valueAsNumber: 20 } });
    // assert
    expect(element).toBeInTheDocument();
    expect(fakeState.qty).toEqual(20);
  });

  it('should change name when typing in the input', () => {
    // Arrange
    const fakeState = {
      id: 5,
      name: 'Garlic',
      qty: 20,
      unit: 'g',
    };

    const handlePropChange = vi.fn((e: { target: HTMLInputElement }) => {
      fakeState.name = e.target.value;
    });

    const { getByDisplayValue } = render(
      <ListItem
        handlePropChange={handlePropChange}
        handleDelete={handleDelete}
        index={0}
        product={fakeState}
      />
    );

    // Act

    fireEvent.change(getByDisplayValue('g'), {
      target: { value: 'kilo' },
    });

    // Assert
    expect(handlePropChange).toBeCalledTimes(1);
    expect(fakeState.name).toEqual('kilo');
  });

  it.todo('should change unit when typing in the input');
  it.todo('should set quantity to 0 when clear input');
});

/* it('should change unit when typing in the input'), () => {
  // Arrange
  const fakeState = {
    id: 5,
    name: 'Garlic',
    qty: 20,
    unit: 'g'
  };

  const handlePropChange = vi.fn((e: { target: HTMLInputElement }) => {
    fakeState.unit = e.target.value;
  });

  const { getByLabelText } = render(
    <ListItem
    handlePropChange={handlePropChange}
    handleDelete={handleDelete}
    index={0}
    product={fakeState}
    />
  );

  // Act
  const element = getByLabelText(/unit/gi);

  fireEvent.change(element, {target: {value: 'kilo'} });

  expect(element).toBeInTheDocument();
  expect(fakeState.unit).toEqual('kilo')
}); */
