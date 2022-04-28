import React, { useEffect } from 'react';
import { Row, Col, Breadcrumb, Image, Button } from 'antd';
import empty_wishlist from '../../images/empty_wishlist.jpg';
import { Link } from 'react-router-dom';
import './wishlist.css';

/* ---------------------component Wishlist starts------------------------*/
const Wishlist = (props) => {
    /* ----------------onload api's handler called in useEffect---------------- */

    useEffect(() => {
        props.title && (document.title = props.title);
    });

    return (
        <React.Fragment>
            <section className="breadcrumb">
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="#">My Account</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="#">Wishlist</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className="wishlist-section">
                <div className="wishlist-box">
                    <Row>
                        <Col span={24}>
                            <div className="wishlist-info">
                                <ul>
                                    <li><Image src={empty_wishlist} preview={false} className="empty-wishlist" /></li>
                                    <li><h2>Your Wishlist is Empty</h2></li>
                                    <li><p>Save your favourite items here</p></li>
                                    <li><Button className="shopping-now">Start Shopping Now</Button></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

/* ---------------------component Wishlist ends------------------------*/
export default Wishlist;