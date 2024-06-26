import { useState } from "react";
import { Fragment } from "react"
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/input";
import {ProdutCategoryRow} from "./components/products/ProdutCategoryRow";
import {ProductRow} from "./components/products/ProductRow";
import {Range} from "./components/forms/Range";

const title = "Bonjour mes amies"
const className="classeName"
const todo = [
  "todo 1",
  "todo 2",
  "todo 3"
]

const PRODUCTS=[
  {category: "Fruits", price: "1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "1", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "11", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "9", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "4", stocked: true, name: "Peas"}
]

function App() {
  let [persone,setage] = useState({
    firestname:'farouk',
    lastname:'djebbi',
    age:18
  });
const [showStockedOnly,setshowStockedOnly] = useState(false);
const [search,setSearch] = useState('')
const [maxPrice,setmaxPrice] = useState(20)
  const handler = (e) => {
console.log(e);
    alert(e.currentTarget.textContent);
  }
  const visibleProduct = PRODUCTS.filter(product => {
    if(showStockedOnly && !product.stocked){
      return false;
    }
    if(search && !product.name.includes(search)){
      return false;
    }
    console.log(maxPrice);
    if(maxPrice && product.price > maxPrice){
      return false;
    }
    return true;
  })
const increment =()=> {
  setage({...persone, age: persone.age+1 })
  // setcompt((compte) => compte + 1)
  // setcompt((compte) => compte + 1)
}
  return <>
    <TitleF color="red" >cMoncomposant</TitleF>

    <h2 className={className} style={{color:'red'}} onClick={handler} >{title}</h2>
    <input type="text"/>
    <p>gjdfgkfdghfg dfgdfhgfdhg gdfg</p>
    <ul>
    {todo.map(todo => (<li key={todo}s>todo</li>))}
  </ul>

  <p>Age de {persone.firestname} : {persone.age}</p>
  <button onClick={increment}>conter</button>

  <h2>exemple 2</h2>
  <SearchBar showStockedOnly={showStockedOnly} onStockedOnlyChange1={setshowStockedOnly} search={search} onSearchChange={setSearch} maxPrice={maxPrice} onChangeRange={setmaxPrice}/>
  <ProductTable products={visibleProduct}/>
  </>
  
}
function TitleF({ color,children }) {
  return <h1 style={{ color: color }}>{children}</h1>;
}
function SearchBar({showStockedOnly, onStockedOnlyChange1,search,onSearchChange,maxPrice,onChangeRange}){
  return <div>
    <div className="mb-3">
      <Input value={search} onChange={onSearchChange} placeholder="Rechercher..."/>
      <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange1} label="En stock"/>
      <Range onChange={onChangeRange} value={maxPrice} min="1" max="20"  />
    </div>
  </div>
}
function ProductTable({products}){
  const rows = []
  let lastcategory  = null
  for (let product of products){
    if(product.category !== lastcategory){
      rows.push(<ProdutCategoryRow key={product.category} name={product.category}/>)
    }
    lastcategory = product.category
    rows.push(<ProductRow key={product.name} product={product}/>)
  }
  return <table className="table">
    <thead>
      <tr>
        <td>Nom</td>
        <td>Prix</td>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
}
export default App
