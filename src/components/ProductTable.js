import '../App.css';

import ProductCategoryRow from "../components/ProductCategoryRow.js";
import ProductRow from "../components/ProductRow.js";

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
          product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
        ) {
          return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
              <ProductCategoryRow
                category={product.category}
                key={product.category}
              />
            );
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                {rows.length !== 0 ? 
                (<tr>
                    <th>Name</th>
                    <th className="product-price-title">Price</th>
                </tr>
                ) : ''}
            </thead>
            <tbody>{rows.length !== 0 ? rows : <tr><td>No products found.</td></tr>}</tbody>
        </table>
    );
}

export default ProductTable;