import React, { useEffect } from 'react';
import { Row, Col, Breadcrumb, Card,  } from 'antd';
import pen from '../../images/pen.jpg';
import mens from '../../images/mens.jpg';
import pooja_deep from '../../images/pooja_deep.jpg';
import ganesh from '../../images/ganesh.jpg';
import toupchi from '../../images/toupchi.jpg';
import { Link } from 'react-router-dom';
import "./handicraft_item.css";
import './example.css';
import ItemCardSection from './ItemCardSection';

const { Meta } = Card;

/* --------------component Handicraft_item Starts-------------- */

const Handicraft_item = (props) => {

    /* ----------------onload api's handler called in useEffect---------------- */

    useEffect(() => {
        props.title && (document.title = props.title);
    })
    return (
        <React.Fragment>
            <section className="breadcrumb">
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Marketplace</Breadcrumb.Item>
                        <Breadcrumb.Item>Product Details</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className="item-card-section">
                <div className="container">
                    <ItemCardSection />
                </div>
            </section>
            <section className="item-card-section">
                <div className="container">
                    <Row>
                        <Col span={24}>
                            <h1 className="similar-product">Similar Product</h1>
                            <Link to="#">
                                <Row className="similar-cards-row">
                                    <Card
                                        hoverable
                                        style={{ width: 225, margin: '20px 2px', borderRadius: '10px' }}
                                        cover={<img alt="example" src={pen} className="similar-items-img" />}
                                    >
                                        <Meta title="Beautiful Hand Carved With Brass Design Walking Stick 22 Inch" description="₹ 1499" style={{ fontSize: '2.0rem' }} />
                                    </Card>
                                    <Card
                                        hoverable
                                        style={{ width: 225, margin: '20px 2px', borderRadius: '10px' }}
                                        cover={<img alt="example" src={mens} className="similar-items-img" />}
                                    >
                                        <Meta title="Brass Statue Tribal Men Figurine Set Of 3 Pcs Home Decorative Handicrafts Corporate Showpiece Christmas & New Year Gift" description="₹ 3606" style={{ fontSize: '2.0rem' }} />
                                    </Card>
                                    <Card
                                        hoverable
                                        style={{ width: 225, margin: '20px 2px', borderRadius: '10px' }}
                                        cover={<img alt="example" src={pooja_deep} className="similar-items-img" />}
                                    >
                                        <Meta title="Brass Pooja Deep" description="₹ 699" style={{ fontSize: '2.0rem' }} />
                                    </Card>
                                    <Card
                                        hoverable
                                        style={{ width: 225, margin: '20px 2px', borderRadius: '10px' }}
                                        cover={<img alt="example" src={ganesh} className="similar-items-img" />}
                                    >
                                        <Meta title="Decorative Shree Ganesha Face Brass Handicraft Wall Hanging Product" description="₹ 775" style={{ fontSize: '2.0rem' }} />
                                    </Card>
                                    <Card
                                        hoverable
                                        style={{ width: 225, margin: '20px 2px', borderRadius: '10px' }}
                                        cover={<img alt="example" src={toupchi} className="similar-items-img" />}
                                    >
                                        <Meta title="Brass Vintage Canon Tope Showpiece Product" description="₹ 789" style={{ fontSize: '2.0rem' }} />
                                    </Card>
                                </Row>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    );
}

/* --------------component Handicraft_item Ends-------------- */

/* -------------component Handicraft_item exported------------------*/

export default Handicraft_item;