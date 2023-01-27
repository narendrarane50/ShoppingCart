import React from 'react'
import '../style/index.css';
import {InputGroup,FormControl} from 'react-bootstrap';

const socialLink=[
    'fab fa-twitter',
    'fab fa-facebook-f',
    'fab fa-linkedin-in',
    'fab fa-instagram'
]

function FooterComponent() {
  return (
    <div>
        <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
            <div class="row pt-5">
                <div class="col-lg-4 col-md-6 mb-5">
                    <h2 class="text-primary mb-4">Fashiop</h2>
                    <p class="my-4">
                        Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
                        dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
                        stet diam duo eos rebum ipsum diam ipsum elitr.
                    </p>
                </div>
                <div class="col-lg-4 col-md-6 mb-5">
                    <h4 class="text-primary mb-4">Newsletter</h4>
                    <form action="">
                        <InputGroup className="mb-3">
                          <FormControl  placeholder="Email"/>
                          <InputGroup.Text id="basic-addon2">Submit</InputGroup.Text>
                        </InputGroup>
                    </form>
                </div>
                <div class="col-lg-4 col-md-6 mb-5">
                    <h4 class="text-primary mb-4">Follow Us</h4>
                    <div class="d-flex justify-content-start mt-4">
                        {
                            socialLink.map((item)=>(
                                <a class="btn btn-social rounded-circle text-center mx-2 px-0"
                                style={{width: '38px',height: '38px'}} href="#"><i class={item}></i></a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div class="container-fluid pt-5" style={{borderTop: '1px solid rgba(23, 162, 184, 0.2)' }}>
                <p class="m-0 text-center text-white">
                    &copy;<a class="text-primary font-weight-bold" href="#">Fashiop</a>.
                    All Rights Reserved. Designed by <a class="text-primary font-weight-bold" href="https://htmlcodex.com">Meraj Ahmed</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent;