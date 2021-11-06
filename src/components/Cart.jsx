import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Checkout(props) {
    let selectedItems = props.itemState.filter(item => item['qty'] != 0)
    let costBeforeDiscount = 0
    let discount = 0
    selectedItems.map((item, index) => {
        costBeforeDiscount += (13 * item['qty'])
    })
    

    const applyDiscountOptional = () => {
        if (selectedItems.length == 3) {
            discount = 3
            return (
                <h1>
                    PURCHASE DISCOUNT APPLIED: $3 off for one set of 3
                </h1>
            )
        }
        else if (selectedItems.length >= 4 && selectedItems.length != props.itemState.length) {
            discount = 4
            return (
                <h1>
                    PURCHASE DISCOUNT APPLIED: $4 off for one set of 4
                </h1>
            )
        }
        else if (selectedItems.length == props.itemState.length) {
            discount = (2 * props.itemState.length)
            return (
                <h1>
                    PURCHASE DISCOUNT APPLIED: $2 off each spice for one full set!
                </h1>
            )
        }
    }
    return (
        <div style={{ marginTop: '120px', 'backgroundColor': "#8533ff" }}>
            <Container fluid='lg'>
                <Row>
                    <Card style={{ width: '100%', backgroundColor: '#cc0000' }}>
                        <Card.Body >
                            {applyDiscountOptional()}
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Col className='col-6'>
                        <Card style={{ width: '100%', marginTop: '2%', backgroundColor: '#cc0000' }}>
                            <Card.Body>
                                <h2>
                                    Items In Cart:
                                </h2>
                                <hr />
                                {
                                    selectedItems.map((item, index) => {
                                        return (
                                            <Container>
                                                <Row>
                                                <Col className='col-9'>
                                                    <h5>
                                                        {item['name']}
                                                    </h5>
                                                </Col>
                                                <Col className='col-3'>
                                                <h5 style={{ textAlign:'right' }}>
                                                    Qty:  {item['qty']}
                                                </h5>
                                                </Col>
                                                </Row>
                                                <hr />
                                                <br />
                                            </Container>
                                        )
                                    })
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-6'>
                        <Card style={{ width: '100%', marginTop: '2%', backgroundColor: '#cc0000' }}>
                            <Card.Body>
                                <Row>
                                    <span> Cost before discount, taxes, and shipping: ${costBeforeDiscount}.00 </span>
                                </Row>
                                <Row>
                                    <h2>Price after discount applied: ${costBeforeDiscount - discount}.00</h2> 
                                </Row>
                                <Link to="/checkout">
                                <Button>
                                    Continue To Checkout
                                </Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
