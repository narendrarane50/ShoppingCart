import React, { useState,useEffect,useContext } from 'react';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import AuthContext from "../customHooks/auth-context";

function CartComponent() {

  const {user,cartProduct} = useContext(AuthContext);

  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    let price=cartProduct.reduce((sum,x)=>{
      return sum+=x.price;
    },0)
    console.log("Price",price);

    settotalPrice(price);
  }, [cartProduct])



  return (
    <div>
      <Container className='my-4'>
        <div className='p-4 text-center'>
          <h3>Welcome ! <span className='text-danger'>{user?.username}</span></h3>
          <p className='product-price'>Your cart product are ready for booking</p>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cartProduct.map((item) => (
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img src={item.image} style={{ width: '100px', height: '100px' }}></img>
                        <div className='p-4'>
                          <p className='product-name'>{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>1</td>
                    <td>&#8377; {item.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <hr className='my-4' />
          <Row className='my-4'>
            <Col lg={6} xs={12}></Col>
            <Col lg={6} xs={12}>
              <div style={{ float: 'right' }}>
                <h5>Total</h5>
                <h5>&#8377; {totalPrice}</h5>
                <Button className='my-4'>Purchase Now</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default CartComponent;
