// Product List Manager
// Add product (name, price)
// Edit price
// Delete product

import { useState } from "react"

const ProductList = ()=>{
    const [productData , setProductData] = useState({
        productName:"",
        productPrice:"",
    });
    const [productList , setProductList] = useState([]);
    const [editId , setEditId] = useState(null);

    // handleOnChange
    const handleOnChange =(e)=>{
        const {name , value}  = e.target;
        setProductData((prev)=>({
            ...prev,
            [name] :value
        }))
    };

    // handleAddProduct
    const handleAddProduct =(e)=>{
        e.preventDefault();
        // check the inputFiled is empty
        if(!productData.productName.trim() || !productData.productPrice.trim()) return;
        // check if the editid is equal to null
        if(editId !== null){
            setProductList((prev)=>prev.map((el)=>el.id === editId ? {...el ,...productData} : el));
            setEditId(null);
            setProductData({
                productName:"",
                productPrice:""
            });
        }else{
            const newProduct = {
                id:Date.now(),
                ...productData,
            }
            // if the editid is equal to null it mean we have to update them
            setProductList((prev)=>[...prev, newProduct]);
            setProductData({
                productName:"",
                productPrice:"",
            })
        }

    }

    // handleDeleteProduct
    const handleDeleteProduct =(id)=>{
        setProductList((prev)=>prev.filter((el)=> el.id !== id));
    }

    // handleEditProduct
    const handleEditProduct =(id)=>{
        const selected = productList.find((el)=>el.id === id);
        setProductData({
            productName:selected.productName,
            productPrice:selected.productPrice,
        })
        setEditId(id);
    }
    return (
        <div style={{margin:"20px",border:"5px",}}>
            <form onSubmit={handleAddProduct}>
                <div>
                <label>ProudctName:</label>
                <input type="text" value={productData.productName} name="productName" onChange={handleOnChange} placeholder="Enter Product Name:"/>
                </div>
                <div>
                <label>ProudctPrice:</label>
                <input type="number" value={productData.productPrice} onChange={handleOnChange} name="productPrice" placeholder="Enter Product Name:"/>
                </div>
                <button type="submit">{editId !== null ? "Updated" : "Add"}</button>
            </form>
            <hr />
            {/* display the Product */}
            <ul>
                {productList.map((el)=>(
                    <li key={el.id}>
                        <p>ProductName:{el.productName}</p>
                        <p>ProductPrice:{el.productPrice}</p>
                        <button onClick={()=>handleEditProduct(el.id)}>EditProduct</button>
                        <button onClick={()=>handleDeleteProduct(el.id)}>DeleteProduct</button>
                        <hr />
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ProductList;