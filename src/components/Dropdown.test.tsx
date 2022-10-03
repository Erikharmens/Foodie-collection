import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  it('should display provided value', () => {
    const { getByText } = render(
      <Dropdown
        id="hey"
        value="Scooby-doo"
        items={['Scooby-doo', 'Superman', 'Spiderman']}
        setValue={() => {}}
      />
    );

    expect(getByText('Scooby-doo')).toBeVisible();
  });

  it('should open and close list when clicked', () => {
    const { queryAllByRole, queryByRole, getByTestId } = render(
      <Dropdown
        id="hey"
        value="Scooby-doo"
        items={['Scooby-doo', 'Superman', 'Spiderman']}
        setValue={() => {}}
      />
    );

    fireEvent.click(getByTestId('select-container'));
    expect(queryByRole('list')).toBeInTheDocument();
    expect(queryAllByRole('option')[0]).toHaveTextContent('Scooby-doo');
    expect(queryAllByRole('option')[1]).toHaveTextContent('Superman');
    expect(queryAllByRole('option')[2]).toHaveTextContent('Spiderman');

    fireEvent.click(getByTestId('select-container'));
    expect(queryByRole('list')).not.toBeInTheDocument();
  });

  it('should fire set event when an option is clicked', () => {
    let value = 'Scooby-doo';
    const setValue = vi.fn((item: string) => {
      value = item;
    });

    const { queryAllByRole, queryByRole, getByTestId } = render(
      <Dropdown
        id="hey"
        value={value}
        items={['Scooby-doo', 'Superman', 'Spiderman']}
        setValue={setValue}
      />
    );

    fireEvent.click(getByTestId('select-container'));
    expect(queryByRole('list')).toBeInTheDocument();

    const supermanItem = queryAllByRole('option')[1];

    if (supermanItem) fireEvent.click(supermanItem);

    expect(queryByRole('list')).not.toBeInTheDocument();

    expect(setValue).toBeCalledTimes(1);
    expect(value).toEqual('Superman');
  });

  it('should filter list when typed in text', () => {
    let value = 'Scooby-doo';
    const setValue = vi.fn((item: string) => {
      value = item;
    });

    const { queryAllByRole, getByTestId } = render(
      <Dropdown
        id="hey"
        value={value}
        items={[
          'Scooby-doo',
          'Jay Jay Jones',
          'Superman',
          'Spiderman',
          'Steve-O',
        ]}
        setValue={setValue}
      />
    );

    fireEvent.click(getByTestId('select-container'));
    expect(queryAllByRole('option')).toHaveLength(5);

    fireEvent.change(getByTestId('select-input'), { target: { value: 'MAN' } });
    expect(queryAllByRole('option')).toHaveLength(2);

    expect(queryAllByRole('option')[0]).toHaveTextContent('Superman');
    expect(queryAllByRole('option')[1]).toHaveTextContent('Spiderman');
  });
});
