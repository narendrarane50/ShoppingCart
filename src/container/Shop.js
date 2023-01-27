import React ,{useState,useEffect} from 'react'
import {Card,Button,Container,Row,Col,ListGroup ,Tab,Form,InputGroup} from 'react-bootstrap';
import ProductCard from "../components/ProductCard";
import {productData} from '../data/product';
import ModalComponent from '../components/ModalComponent';

function ShopPage() {

    const [showModal, setshowModal] = useState(false);
    const [modalType,setModalType]=useState("");

    const [gender, setGender] = useState('men');
    const [searchProduct, setSearchProduct] = useState('');

    const [allProduct, setallProduct] = useState(productData);
    const [filterProduct, setfilterProduct] = useState([]);

    useEffect(() => {
        setfilterProduct(allProduct.filter((item)=>{
            return item.gender===gender;
        }));
    }, [gender,allProduct]);

    const handleShowMore=()=>{
        setallProduct([...allProduct,...productData]);
    }

  return (
    <div style={{padding:'2rem 0rem'}}>
        <ModalComponent   showModal={showModal}     hideModal={setshowModal}>
            <div className='div-center w-100 p-4'>
                <div className='div-center success-box'>
                    <h5>Product added to {modalType=="Wish"?"wish list":"cart"} successfully</h5>       
                </div>
            </div>
        </ModalComponent>

        <Container>
                <div className='my-4'>
                    <h1 className='text-center home-title'>Featured Products</h1>
                    <p className='text-center home-sub-title'>Who are in extremely love with eco friendly system.</p>
                    <div className='my-4 p-2 ' 
                        style={{width:'50vw',margin:'auto',borderRadius:'10px',
                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1" style={{padding:'0'}}>
                            <select name="cars" id="cars" className='form-control' 
                              style={{borderRadius:'0',boxShadow:'none'}} onChange={(e)=>setGender(e.target.value)}>
                              <option value="men">Men</option>
                              <option value="women">Women</option>
                              <option value="kids">Kids</option>
                            </select>
                            </InputGroup.Text>
                              <Form.Control style={{boxShadow:'none'}}
                                placeholder="Search..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={searchProduct}
                                onChange={(e)=>setSearchProduct(e.target.value)}
                              />
                            <InputGroup.Text id="basic-addon2"><i class="fa fa-search"></i></InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}>
                    <div>
                    <Row className='my-4'>
                    {
                        
                        filterProduct?.filter((val)=>{
                            if(searchProduct==" "){
                               return val;
                            }else if(val.name.toLowerCase().includes(searchProduct.toLowerCase())){
                              return val;
                            }
                        })
                        .map((item)=>(
                            <Col lg={3} xs={12} className='mt-4'>
                                <ProductCard data={item}  hideModal={setshowModal} modalType={setModalType}/>                  
                            </Col>
                        ))
                    }
                    </Row>
                    </div>
                    <div className='text-center p-4'>
                       <Button className='product-btn py-2' variant="success" onClick={()=>handleShowMore()}>View More</Button>
                    </div>
                </div>
        </Container>
    </div>
  )
}

export default ShopPage;