
import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { getProducts } from "../../features/productSlice";
import { Products } from "../../types/products";
import ProductCard from "./ProductCard"
import "./redux.scss";

 
 const ReduxThunk = ()=>{
  const productList = useAppSelector((state)=>state.product.products);
  const status = useAppSelector((state)=>state.product.status);
  const dispatch = useAppDispatch();
  const fetchProduct = ()=>{
    dispatch(getProducts("all"));
  }
  return (
    <div className="content-area">
      <div className="content">
        <section className="form-area">
            <button className="btn btn-success btn-lg" type="button" onClick={fetchProduct}>
              Fetch Product
            </button>
        </section>
        <section className="user-details">
          <div className="header">Product Details</div>
          {
            (status === "success")?
              productList.map((p:Products)=><ProductCard key={p.id} {...p}/>)
            :<h4 className="text-danger text-center">{status}</h4>
          
          }
        </section>
      </div>
    </div>
  )
}

export default ReduxThunk;