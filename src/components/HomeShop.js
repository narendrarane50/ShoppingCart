import React ,{useState,useEffect} from 'react'
import {Card,Button,Container,Row,Col,ListGroup ,Tab,Form,InputGroup} from 'react-bootstrap';
import ProductCard from "./ProductCard";
import {productData} from '../data/product';
import ModalComponent from './ModalComponent';

function ShopPage() {

    const [showModal, setshowModal] = useState(false);
    const [modalType,setModalType]=useState("");

    const [gender, setGender] = useState('men');

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
                </div>
                <div style={{marginTop:'50px'}}>
                    <Tab.Container id="list-group-tabs-example" className='my-4' defaultActiveKey="#link1">
                          <ListGroup horizontal >
                            <ListGroup.Item onClick={()=>setGender("men")} className='text-center' action href="#link1">Men</ListGroup.Item>
                            <ListGroup.Item onClick={()=>setGender("women")} className='text-center' action href="#link2">Women</ListGroup.Item>
                            <ListGroup.Item onClick={()=>setGender("kids")} className='text-center' action href="#link3">Kids</ListGroup.Item>
                          </ListGroup>
                          <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Row className='my-4'>
                                {
                                    filterProduct.map((item)=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard data={item}  hideModal={setshowModal} modalType={setModalType}/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Row>
                                {
                                    filterProduct.map((item)=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard data={item}  hideModal={setshowModal} modalType={setModalType}/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Row>
                                {
                                    filterProduct.map((item)=>(
                                        <Col lg={3} xs={12} className='mt-4'>
                                            <ProductCard data={item}  hideModal={setshowModal} modalType={setModalType}/>                  
                                        </Col>
                                    ))
                                }
                                </Row>
                            </Tab.Pane>
                          </Tab.Content>
                    </Tab.Container>
                    <div className='text-center p-4'>
                       <Button className='product-btn py-2' variant="success" onClick={()=>handleShowMore()}>View More</Button>
                    </div>
                </div>
            </Container>
    </div>
  )
}

export default ShopPage;