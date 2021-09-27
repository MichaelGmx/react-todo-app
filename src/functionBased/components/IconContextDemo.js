import React from 'react';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';

const IconContextDemo = () => {
  return (
    <IconContext.Provider
      value={{
        color: "darkcyan",
        style: { fontSize: "20px", color: "#ff0000" },
        className: "submit-icon"
      }}
    >
      <FaPlusCircle />
      <FaPlusCircle />
      <FaPlusCircle />
    </IconContext.Provider>
  )
}

export default IconContextDemo