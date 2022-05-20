import React, {useState} from 'react'
import { Row, Col, Container, Image, Button, Card } from 'react-bootstrap'

import all_spice from '../media/all_spice.jpg'
import chef_will_jaz from '../media/chef_will_jaz.jpg'
import chef_will from '../media/chef_will.jpg'
import will_jaz from '../media/will_jaz.jpg'
import will from '../media/will.jpg'

if (process.env.NODE_ENV !== 'production'){
    console.log(process.env.REACT_APP_HELLO)
    console.log(process.env.NODE_ENV)
}


export default function HomePage() {
    const [myenv, setmyenv] = useState(process.env.REACT_APP_HELLO)
    const testFunc = () => {
    return (
        <h1>
            myenv
        </h1>
    )
}
    return (
        <div style={{marginTop:'100px', 'backgroundColor': "#8533ff", 'height': "100%"}} >
            <Container fluid='lg'>
            {/* Top big image */}
            <Row>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                    <Col className="col-8" style={{ 'backgroundColor': "#8533ff" }}>
                    <Card style={{ marginTop: '15px', backgroundColor:'#cc0000'}}>
                        <Card.Body>
                            <h1>{process.env.REACT_APP_HELLO}</h1>
                            <h3 style={{fontSize:"120%", color: 'whitesmoke', textAlign:'center'}}>
                                 Let your taste-buds indulge in delight while discovering new creations you never realized you would love so much. For all of you who are tired of the same bland food, join me and spice up your daily meals!
                            </h3>
                            
                            <Card.Img src={all_spice}>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                        </Card.Body>
                        </Card>
                    </Col>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
            </Row>
            {/* 4 pics below main pic */}
            <Row>
            <Col className="col-6" style={{ 'backgroundColor': "#8533ff" }}>
                <Row>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                <Col className="col-8" style={{ 'backgroundColor': "#8533ff" }}>
                <Card style={{ marginTop: '10%', backgroundColor:'#cc0000'}}>
                        <Card.Body>
                            <Card.Img src={chef_will_jaz}>
                            </Card.Img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                </Row>
                <Row>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                <Col className="col-8" style={{ 'backgroundColor': "#8533ff" }}>
                <Card style={{ marginTop: '10%', backgroundColor:'#cc0000'}}>
                        <Card.Body>
                            <Card.Img src={will}>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                </Row>
            </Col>
            <Col className="col-6" style={{ 'backgroundColor': "#8533ff" }}>
            <Row>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                <Col className="col-8" style={{ 'backgroundColor': "#8533ff" }}>
                <Card style={{ marginTop: '10%', backgroundColor:'#cc0000'}}>
                        <Card.Body>
                            <Card.Img src={chef_will}>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                </Row>
                <Row>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                <Col className="col-8" style={{ 'backgroundColor': "#8533ff" }}>
                <Card style={{ marginTop: '10%', backgroundColor:'#cc0000'}}>
                        <Card.Body>
                            <Card.Img src={will_jaz}>
                            {/* <Image src={all_spice} roundedCircle width="35%" style={{ margin: "30px auto 100px" }} />     */}
                            </Card.Img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" style={{ 'backgroundColor': "#8533ff" }}/>
                </Row>
            </Col>
            </Row>
            </Container>
        </div>
    )
}
