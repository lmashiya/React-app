import { useState } from "react";

interface Props {
    names : string[]
    heading : string
    onSelectItem : (item : string) => void
}

export function ListGroup({names , heading,onSelectItem}:Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {names.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {names.map((name, index) => (
          <li
            key={name}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(name);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
