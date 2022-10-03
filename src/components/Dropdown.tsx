import React from 'react';

interface Props {
  items: string[];
  id: string;
  value: string;
  setValue: (newValue: string) => void;
}

const Dropdown: React.FC<Props> = ({ items, id, value, setValue }) => {
  const [filterText, setFilterText] = React.useState('');
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    // IF SELECT GETS CLOSED REMOVE THE FILTER TEXT
    if (!isOpen) setFilterText('');
  }, [isOpen]);

  return (
    <div
      className="relative flex-1"
      onClick={() => setOpen(!isOpen)}
      onKeyDown={() => setOpen(true)}
      role="menuitem"
      tabIndex={0}
      data-testid="select-container"
    >
      <div className="bg-gray-50 border relative border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <input
          id={id}
          data-testid="select-input"
          className={`${
            filterText ? 'bg-white' : 'bg-transparent'
          } absolute left-0 top-0 bottom-0 right-0 px-3`}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        {value}
      </div>
      {isOpen && (
        <ul className="bg-gray-100 absolute top-12 w-full z-10">
          {items
            .filter((item) =>
              item.toLowerCase().includes(filterText?.toLowerCase())
            )
            .map((item) => (
              <li
                className={`p-3 border border-gray-300 hover:bg-gray-400 ${
                  item === value ? 'bg-blue-300' : ''
                }`}
                role="option"
                aria-selected={item === value}
                key={`${id}-option-${item}`}
                value={item}
                onClick={() => {
                  setValue(item);
                  setFilterText('');
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setValue(item);
                  setFilterText('');
                }}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
