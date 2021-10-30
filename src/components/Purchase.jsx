import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import spiceData from '../spice-merch.json'
const images = require.context('../media', true)


export default function Purchase() {
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
                                <Card style={{ width: '100%', marginTop: '10%', backgroundColor: '#cc0000'}}>
                                    <Card.Title style={{ color:'whitesmoke', textAlign:'center', fontSize:'200%'}}>
                                        {spiceItem.name}
                                    </Card.Title>
                                    <Row>
                                    <Col className='col-1'/>
                                    <Col className='col-4'>
                                    <Image src={imageContainer} width='100%' rounded />
                                    </Col>
                                    <Col className='col-1'/>
                                    <Col className='col-4'>
                                    <Image src={imageSpice} width='130%' style={{marginTop:'15%'}} roundedCircle/>
                                    </Col>
                                    <Col className='col-1'/>
                                    </Row>
                                    <Card.Body>
                                        <h3 style={{color: 'whitesmoke' }}>
                                            {spiceItem.ingredients}
                                        </h3>
                                        <i style={{color:'whitesmoke', fontSize:'130%'}}>
                                            {spiceItem.description}
                                        </i>
                                        <br />
                                        <br />
                                        <span>
                                            <span style={{color:'whitesmoke', fontSize:'150%'}}>
                                            Price: $13 each
                                            </span>
                                            <Button size='lg'>
                                                -
                                            </Button>

                                            <input style={{ width: '20%' }}>

                                            </input>
                                            <Button size='lg'>
                                                +
                                            </Button>
                                        </span>

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
