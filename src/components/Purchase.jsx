import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import spiceData from '../spice-merch.json'
const images = require.context('../media', true)

// TODO START mapping out array of 0s, and then set the values when clicked to the respected array indexes.


export default function Purchase(props) {
    

    // useEffect(() => {
    //     console.log("state updated")
    // }, [itemSelected])

    return (
        <div style={{ marginTop: '120px', backgroundColor: '#8533ff' }}>
            
            { //DO NOT USE QUANTITY BUT USE EVERYTHING ELSE!!!
            spiceData.map((spiceItem, index) => {
                // let imageContainer = media(`${spiceItem.imageContainer}`)
                let imageContainer = images(`./${spiceItem.imageContainer}`).default
                let imageSpice = images(`./${spiceItem.imageSpice}`).default
                return (
                    <Container fluid='xl'>
                        <Row>
                            <Col className='col-1' />
                            <Col className='col-10'>
                                <Card style={{ width: '100%', marginTop: '10%', backgroundColor: '#cc0000' }}>
                                    <Card.Title style={{ color: 'whitesmoke', textAlign: 'center', fontSize: '250%' }}>
                                        {spiceItem.name}
                                    </Card.Title>
                                    <Row>
                                        <Col className='col-1' />
                                        <Col className='col-4'>
                                            <Image src={imageContainer} width='100%' rounded />
                                        </Col>
                                        <Col className='col-1' />
                                        <Col className='col-4'>
                                            <Image src={imageSpice} width='130%' style={{ marginTop: '15%' }} roundedCircle />
                                        </Col>
                                        <Col className='col-1' />
                                    </Row>
                                    <Card.Body>
                                        <h3 style={{ color: 'whitesmoke' }}>
                                            {spiceItem.ingredients}
                                        </h3>
                                        <i style={{ color: 'whitesmoke', fontSize: '130%' }}>
                                            {spiceItem.description}
                                        </i>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col className='col-3'>
                                                <span style={{ color: 'whitesmoke', fontSize: '150%' }}>
                                                    Price: $13 each
                                                </span>
                                            </Col>
                                            <Col className='col-6' />
                                            <Col className='col-3'>
                                                <Button 
                                                key={`minus-button-${index}`}
                                                size='lg'
                                                style={{ backgroundColor: '#cc0000', borderColor: '#cc0000', fontSize: '200%', marginRight: '15px' }}
                                                onClick={(event) => {
                                                    if(props.itemState[index]['qty'] != 0){
                                                        props.itemState[index]['qty'] -=1;
                                                        props.setItemState([...props.itemState]);
                                                    }
                                                }}
                                                >
                                                    -
                                                </Button>

                                                <input key={`input-${index}`} id={index} style={{ width: '20%' }} type= "number" readOnly={true} value={props.itemState[index]['qty']} />
                                                <Button
                                                    key={`add-button-${index}`}
                                                    size='lg' 
                                                    style={{ backgroundColor: '#cc0000', borderColor: '#cc0000', fontSize: '200%', marginLeft: '10px' }}
                                                    onClick={(event)=>{
                                                        props.itemState[index]['qty'] += 1
                                                        props.setItemState([...props.itemState])
                                                    }}
                                                    >
                                                    +
                                                </Button>
                                            </Col>
                                        </Row>

                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col className='col-1' />
                        </Row>
                    </Container>
                )
            })}


        </div >
    )
}
