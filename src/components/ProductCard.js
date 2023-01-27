import React  ,{useContext } from 'react'
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import '../style/index.css';
import { NavLink } from 'react-router-dom';
import AuthContext from "../customHooks/auth-context";

function ProductCard(props) {

  const {hideModal,modalType}=props;

  const {status,cartProduct,setCartProduct,wishProduct,setWishProduct} = useContext(AuthContext);

  const handleModal=(type)=>{
    if(status){
      hideModal(true);
      modalType(type);
      if(type=='Wish'){
        setTimeout(() => {
          setWishProduct([...wishProduct,props.data])
        }, 3000);
      }else{
        setTimeout(() => {
          setCartProduct([...cartProduct,props.data])
        }, 3000);
      }
    }else{
       alert("Please login to continue");
    }
  
  }

  return (
    <div>
          <Card className='p-0' style={{ width: '100%',borderRadius:'1rem' }}>
            <NavLink to={`product/${props.data.id}`} style={{textDecoration:'none'}}>
             <Card.Img variant="top" src={props.data.image}  style={{height:'200px',padding:'1rem 2rem'}}/>
              <Card.Body >
                <Card.Text className='product-name'>{props.data.name}</Card.Text>
                <Card.Text className='product-price'> &#8377; {props.data.price}</Card.Text>
              </Card.Body>
            </NavLink>
              <div className='d-flex justify-content-between'>
                <Button className='product-btn' variant="primary" onClick={()=>handleModal("Wish")}>Wish</Button>
                <Button className='product-btn' variant="primary" onClick={()=>handleModal("Cart")}>Cart</Button>
              </div>
          </Card>
    </div>
  )
}

export default ProductCard