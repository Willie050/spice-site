import React from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap'
import spiceData from '../spice-merch.json'
const images = require.context('../media', true)


export default function Purchase() {
    return (
        <div style={{marginTop: '10%', backgroundColor: '#8533ff'}}>
            {spiceData.map((spiceItem, index) => {
                // let imageContainer = media(`${spiceItem.imageContainer}`)
                let imageContainer = images(`./${spiceItem.imageContainer}`).default
                let imageSpice = images(`./${spiceItem.imageSpice}`).default
                return(
                <Card style={{ width: '30%', height: '100%', marginTop: '10%', backgroundColor:'#cc0000'}}>
                <Card.Title style={{textAlign: 'center', color: 'white'}}>
                {spiceItem.name + " " + index}
                </Card.Title>
                <Card.Subtitle style={{ color: 'white', textAlign: 'center'}}>
                
                </Card.Subtitle>
                <Card.Img src={imageContainer}/>
                <Card.Img src={imageSpice}/>
                <Card.Body>
                    <h3 style={{fontSize:"100%", color: 'whitesmoke'}}>
                    {spiceItem.ingredients}
                    </h3>
                    {/* <Card.Img src={'../media/El_Barrio.jpg'} height='400px'>
                    </Card.Img> */}
                    <span style={{ justifyContent: 'center' }}>
                            <Button size='lg'>
                                -
                            </Button>
                        
                    <input style={{width: '20%'}}>

                    </input>
                            <Button size='lg'>
                                +
                            </Button>
                        </span>
                </Card.Body>
        </Card>
            )})}
            
            
            <Row>
                <Col className='col-4'>
                <Card style={{ width: '100%', height: '100%', marginTop: '10%', backgroundColor:'#cc0000'}}>
                        <Card.Title style={{textAlign: 'center', color: 'white'}}>
                        EL BARRIO
                        </Card.Title>
                        <Card.Subtitle style={{ color: 'white', textAlign: 'center'}}>
                        
                        </Card.Subtitle>
                        <Card.Body>
                            <h3 style={{fontSize:"100%", color: 'whitesmoke'}}>
                            
                            </h3>
                            <Card.Img height='400px'>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                            
                            <Card.Img>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                            <span style={{ justifyContent: 'center' }}>
                                    <Button size='lg'>
                                        -
                                    </Button>
                                
                            <input style={{width: '20%'}}>

                            </input>
                                    <Button size='lg'>
                                        +
                                    </Button>
                                </span>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    )
}
