import '../App.css';

import { useState } from "react";

import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
      <div className="wrapper">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
          <ul style={{ margin: "15px", listStyle: "none" }}>
            <li><span style={{ color: "red" }}>red color</span> - this product isn't stocked</li>
            <li><span>white color</span> - this product is stocked</li>
          </ul>
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
}

export default FilterableProductTable;