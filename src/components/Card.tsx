import * as React from 'react';
import Button from './Button';

interface Props {
  withButtons: boolean;
  children?: React.ReactNode;
  title: string;
}

const Card: React.FC<Props> = ({ children, title, withButtons = false }) => (
  <div className="bg-gray-200 rounded w-72 border border-blue-500 py-2">
    <h1 className="text-lg text-bold mb-2 ml-2">{title}</h1>
    <p className="px-4 max-w-prose text-sm">{children}</p>
    {withButtons && (
      <div className="flex p-4 items-center justify-end">
        <Button variant="primary" type="button" size="lg">
          OK
        </Button>
      </div>
    )}
  </div>
);

export default Card;
