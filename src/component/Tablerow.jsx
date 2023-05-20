import React from "react";

export const Tablerow = ({ coin }) => {
  return (
    <tr>
      <td>
        <img src={coin.image} alt={coin.name} width={20} />
      </td>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
    </tr>
  );
};
