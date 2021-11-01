import React from 'react'
import {Container, Row, Card} from 'react-bootstrap'
export default function Checkout(props) {
    let selectedItems = props.itemState.filter(item => item['qty'] != 0)
    let costBeforeDiscount = 0
    
    selectedItems.map((item, index)=>{
        costBeforeDiscount += (13 * item['qty'])  
    })
    let costAfterDiscount = costBeforeDiscount

    const applyDiscountOptional = () => {
        if(selectedItems.length == 3){
            costAfterDiscount -= 3
            return(
                <Row>
                    PURCHASE DISCOUNT APPLIED: $3 off for one set of 3
                </Row>
            )
        }
        else if(selectedItems.length >= 4 && selectedItems.length != props.itemState.length) {
            costAfterDiscount -= 4
            return(
                <Row>
                    PURCHASE DISCOUNT APPLIED: $4 off for one set of 4
                </Row>
            )
        }
        else if(selectedItems.length == props.itemState.length){
            costAfterDiscount -= (2 * props.itemState.length )
            return(
                <Row>
                    PURCHASE DISCOUNT APPLIED: $2 off each spice for one full set!
                </Row>
            )
        }
    }
    return (
        <div style={{marginTop:'120px', 'backgroundColor': "#8533ff"}}>
            <Container fluid='lg'>
                <Card>
                    <Card.Body>
                        {
                            applyDiscountOptional()
                        }
                        {
                            selectedItems.map((item, index)=>{
                                return(
                                    <Container>
                                    <Row>
                                        <span> Cost before discount, taxes, and shipping: ${costBeforeDiscount}.00 </span>
                                    </Row>
                                    <Row>
                                    <span style={{alignItems: 'flex-end'}}>
                                        {item['name']}   |  Price:  {item['qty']}
                                    </span>
                                    </Row>
                                    </Container>
                                )
                            })
                        }
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
