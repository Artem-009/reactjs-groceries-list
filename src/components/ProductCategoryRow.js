import '../App.css';

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th className="product-category-name" colSpan="2">
                {category}
            </th>
        </tr>
    );
}

export default ProductCategoryRow;
