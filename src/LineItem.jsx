import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li
      className="listItem flex space-x-4 justify-between items-center grow bg-slate-300 my-2"
      key={item.id}
    >
      <div className="flex items-center grow">
        <input
          type="checkbox"
          checked={item.checked}
          className="h-7 w-7 my-3"
          id="checkbox"
          onChange={() => {
            handleCheck(item.id);
          }}
        />
        <label
          className="flex text-2xl ms-2 grow"
          style={item.checked ? { textDecoration: "line-through" } : null}
        >
          {item.item}
        </label>
      </div>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        className="h-7 w-7 px-1 hover:text-red-500"
        id="trash"
        onClick={() => {
          handleDelete(item.id);
        }}
      />
    </li>
  );
};

export default LineItem;
