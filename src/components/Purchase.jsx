import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import spiceData from '../spice-merch.json'
const images = require.context('../media', true)

const getSelectionCount= (value) =>{
    return value
}

const totalItemsToPurchase = spiceData.length
let noItemsSelected = []
for(let i=0; i<totalItemsToPurchase; i++){
    noItemsSelected.push(0)
}
console.log(noItemsSelected)
// TODO START mapping out array of 0s, and then set the values when clicked to the respected array indexes.


export default function Purchase() {
    const [itemSelected, setItemSelected] = useState(noItemsSelected)

    useEffect(() => {
        console.log("state updated")
    }, [itemSelected])

    return (
        <div style={{ marginTop: '120px', backgroundColor: '#8533ff' }}>
            {spiceData.map((spiceItem, index) => {
                // let imageContainer = media(`${spiceItem.imageContainer}`)
                let imageContainer = images(`./${spiceItem.imageContainer}`).default
                let imageSpice = images(`./${spiceItem.imageSpice}`).default
                return (
                    <Container fluid='xl'>
                        <Row>
                            <Col className='col-1' />
                            <Col className='col-10'>
                                <Card style={{ width: '100%', marginTop: '10%', backgroundColor: '#cc0000' }}>
                                    <Card.Title style={{ color: 'whitesmoke', textAlign: 'center', fontSize: '200%' }}>
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
                                                <Button size='lg' style={{ backgroundColor: '#cc0000', borderColor: '#cc0000', fontSize: '200%', marginRight: '15px' }}>
                                                    -
                                                </Button>

                                                <input key={`input-${index}`} id={index} style={{ width: '20%' }} type= "number" value={getSelectionCount(itemSelected[index])} />
                                                <Button
                                                    key={`add-button-${index}`}
                                                    size='lg' 
                                                    style={{ backgroundColor: '#cc0000', borderColor: '#cc0000', fontSize: '200%', marginLeft: '10px' }}
                                                    onClick={(event)=>{itemSelected[index] +=1;   setItemSelected([...itemSelected]); console.log(itemSelected)}}
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
