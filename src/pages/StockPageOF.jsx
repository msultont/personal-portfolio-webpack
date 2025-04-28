import React from "react";

const StockPageOF = props => {
  return (
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Nama OF</th>
            <th>Merk OF</th>
            <th>Kode OF</th>
            <th>Jumlah Stock</th>
            <th>Harga Outlet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Filter Oli Sakura</td>
            <td>Sakura</td>
            <td>C1109</td>
            <td>25</td>
            <td>Rp 120.000</td>
          </tr>
          <tr>
            <td>Filter Oli Fram</td>
            <td>Fram</td>
            <td>PH7317</td>
            <td>40</td>
            <td>Rp 85.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default StockPageOF;
