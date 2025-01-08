import './App.css';

import FilterableProductTable from './components/FilterableProductTable.js';

import PRODUCTS from './data/products.json';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;
