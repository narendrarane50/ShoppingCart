import React ,{useState,useEffect,useRef,useContext}  from 'react'
import {useParams} from 'react-router-dom';
import {productData} from '../data/product';
import {Container,Row,Col,Button,InputGroup,Form } from 'react-bootstrap';
import '../style/index.css';
import useCounter from '../customHooks/useCounter';
import ModalComponent from '../components/ModalComponent';
import AuthContext from "../customHooks/auth-context";

function ProductDetails() {

  const {status,cartProduct,setCartProduct,wishProduct,setWishProduct} = useContext(AuthContext);


    const [showModal, setshowModal] = useState(false);
    const [modalType,setModalType]=useState("");

    const productId=useParams();
    
    const inputRef = useRef('');

    const [product, setproduct] = useState({});

    const {value,increment,decrement}= useCounter(1);

    useEffect(() => {
        setproduct(productData.find((item)=>{
            return item.id===Number(productId.id);
        })
        );
    }, [productId])

    const handleModal=(type)=>{
      if(status){
        setshowModal(true);
        setModalType(type);
        if(type=='Wish'){
          setTimeout(() => {
            setWishProduct([...wishProduct,product])
          }, 3000);
        }else{
          setTimeout(() => {
            setCartProduct([...cartProduct,product])
          }, 3000);
        }
      }else{
        alert("Please login to continue")
      }
    }

  return (
    <div style={{marginTop:'100px'}}>

      <ModalComponent   showModal={showModal}     hideModal={setshowModal}>
          <div className='div-center w-100 p-4'>
              <div className='div-center success-box'>
                  <h5>Product added to {modalType=="Wish"?"wish list":"cart"} successfully</h5>       
              </div>
          </div>
      </ModalComponent>

       <Container>
        <Row>
            <Col lg={6} xs={12}>
                <img src={product?.image} style={{height:'300px',width:'200px'}}></img>
            </Col>
            <Col lg={6} xs={12}>
                <h5>Name   :   {product?.name}</h5>
                <h5>Gender : {product?.gender}</h5>
                <h5>Price : &#8377;  {product?.price}</h5>
                <hr/>
                <div className='my-4'>
                    <InputGroup className="mb-3" style={{width:'200px'}}>
                        <Button variant="outline-secondary" 
                        onClick={()=>increment()} id="button-addon1">+</Button>
                        <Form.Control style={{textAlign:'center'}}
                          value={value}
                          aria-describedby="basic-addon1"
                          disabled
                        />
                        <Button variant="outline-secondary" 
                        onClick={()=>decrement()}  id="button-addon2">-</Button>
                    </InputGroup>
                    <Button className='product-btn m-2' variant="primary" onClick={()=>handleModal("Wish")}>Wish </Button>
                    <Button className='product-btn m-2' variant="primary" onClick={()=>handleModal("cart")}>Cart</Button>
                </div>
                <hr/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" ref={inputRef} placeholder="Write suggestions ..." rows={3} />
                </Form.Group>
                <Button className='product-btn m-2' variant="primary" 
                onClick={()=>alert(inputRef.current.value)}>Send</Button>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default ProductDetails;


