import React, { useContext } from 'react';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import AuthContext from "../customHooks/auth-context";

function CartComponent() {

  const {user,wishProduct} = useContext(AuthContext);

  return (
    <div>
      <Container className='my-4'>
        <div className='p-4 text-center'>
          <h3>Wish List Products</h3>
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
                wishProduct.map((item) => (
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
        </div>
      </Container>
    </div>
  )
}

export default CartComponent;
