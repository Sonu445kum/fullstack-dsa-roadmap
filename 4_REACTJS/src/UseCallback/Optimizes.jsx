import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

// Child Components memomized
const ProductList = React.memo(({products , onSelect})=>{
    console.log("Products list rendered...!!");
    return (
        <div>
            {
                products.map((item)=>(
                    <li key={item.id}>
                        <p>Name:{item.name}</p>
                        <button onClick={()=>onSelect(item)}>select</button>
                    </li>
                ))
            }
        </div>
    )
});






const Optimizes = ()=>{
    const [search , setSearch] = useState("");
    const [selected , setSelected] = useState(null);

    // create a object of product
    const products = [
        {id:1,name:"Laptop"},
        {id:2,name:"Phone"},
        {id:3,name:"TV"},
        {id:4,name:"Toys"}
    ];

    // useMemo ->avoids the expensive recalculations
    const filtersProducts = useMemo(()=>{
        console.log("Filters...!!");
        return products.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
    },[search]);

    // useCallback ->stables functions refrences
    const handleSelected = useCallback((item)=>{
        setSelected(item)
    },[]);

    return (
        <div>
            <div>
                <input type="text" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search"/>
            </div>

            {/* child component */}
            <ProductList products={filtersProducts} onSelect ={handleSelected}/>
            {selected && <h3>Selected:{selected.name}</h3>}
        </div>
    )

}
export default Optimizes;