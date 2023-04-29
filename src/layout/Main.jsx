import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg={6}>
                            <Outlet />
                        </Col>
                        <Col lg={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Main;