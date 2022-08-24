import * as React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('should change name when typing in the input', () => {});

  it.todo('should change quantity when typing in the input');
  it.todo('should set quantity to 0 when clear input');
  it.todo('should change unit when typing in the input');
});
