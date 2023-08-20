import React, { useEffect } from 'react';
import { Image, Row, Col, Button, Carousel, Card, Input } from 'antd';
import "./home.css";
import handicraft_1 from '../../images/handicraft_1.jpg';
import handicraft_2 from '../../images/handicraft_2.jpg';
import handicraft_3 from '../../images/handicraft_3.jpg';
import handicraft_4 from '../../images/handicraft_4.jpg';
import about from '../../images/about.jpg';
import quotes from '../../images/quotes.png';
import Bags_1 from '../../images/Bags_1.jpeg';
import Bags_2 from '../../images/Bags_2.jpeg';
import Bags_3 from '../../images/Bags_3.jpeg';
import Bags_4 from '../../images/Bags_4.jpeg';
import Bags_5 from '../../images/Bags_5.jpeg';
import Bags_6 from '../../images/Bags_6.jpeg';
import Clay_1 from '../../images/Clay_1.jpeg';
import Clay_2 from '../../images/Clay_2.jpeg';
import Clay_3 from '../../images/Clay_3.jpeg';
import Clay_4 from '../../images/Clay_4.jpeg';
import Clay_5 from '../../images/Clay_5.jpeg';
import Clay_6 from '../../images/Clay_6.jpeg';
import Clay_7 from '../../images/Clay_7.jpeg';
import Clay_8 from '../../images/Clay_8.jpeg';
import Clay_9 from '../../images/Clay_9.jpeg';
import Clay_10 from '../../images/Clay_10.jpeg';
import Earring_1 from '../../images/Earring_1.jpeg';
import Earring_2 from '../../images/Earring_2.jpeg';
import Earring_3 from '../../images/Earring_3.jpeg';
import Earring_4 from '../../images/Earring_4.jpeg';
import Earring_5 from '../../images/Earring_5.jpeg';
import Earring_6 from '../../images/Earring_6.jpeg';
import Earring_7 from '../../images/Earring_7.jpeg';
import Earring_8 from '../../images/Earring_8.jpeg';
import Earring_9 from '../../images/Earring_9.jpeg';
import Earring_10 from '../../images/Earring_10.jpeg';
import Earring_11 from '../../images/Earring_11.jpeg';
import KeyChain_1 from '../../images/KeyChain_1.jpeg';
import KeyChain_2 from '../../images/KeyChain_2.jpeg';
import KeyChain_3 from '../../images/KeyChain_3.jpeg';
import KeyChain_4 from '../../images/KeyChain_4.jpeg';
import KeyChain_5 from '../../images/KeyChain_5.jpeg';
import KeyChain_6 from '../../images/KeyChain_6.jpeg';
import KeyChain_7 from '../../images/KeyChain_7.jpeg';
import KeyChain_8 from '../../images/KeyChain_8.jpeg';
import KeyChain_9 from '../../images/KeyChain_9.jpeg';
import KeyChain_10 from '../../images/KeyChain_10.jpeg';
import KeyChain_11 from '../../images/KeyChain_11.jpeg';
import KeyChain_12 from '../../images/KeyChain_12.jpeg';
import KeyChain_13 from '../../images/KeyChain_13.jpeg';
import KeyChain_14 from '../../images/KeyChain_14.jpeg';
import KeyChain_15 from '../../images/KeyChain_15.jpeg';
import KeyChain_16 from '../../images/KeyChain_16.jpeg';
import KeyChain_17 from '../../images/KeyChain_17.jpeg';
import KeyChain_18 from '../../images/KeyChain_18.jpeg';
import KeyChain_19 from '../../images/KeyChain_19.jpeg';
import KeyChain_20 from '../../images/KeyChain_20.jpeg';
import KeyChain_21 from '../../images/KeyChain_21.jpeg';
import KeyChain_23 from '../../images/KeyChain_23.jpeg';
import KeyChain_24 from '../../images/KeyChain_24.jpeg';
import KeyChain_25 from '../../images/KeyChain_25.jpeg';
import KeyChain_26 from '../../images/KeyChain_26.jpeg';
import KeyChain_27 from '../../images/KeyChain_27.jpeg';
import KeyChain_28 from '../../images/KeyChain_28.jpeg';
import KeyChain_29 from '../../images/KeyChain_29.jpeg';
import KeyChain_30 from '../../images/KeyChain_30.jpeg';
import KeyChain_31 from '../../images/KeyChain_31.jpeg';
import KeyChain_32 from '../../images/KeyChain_32.jpeg';
import KeyChain_33 from '../../images/KeyChain_33.jpeg';
import KeyChain_34 from '../../images/KeyChain_34.jpeg';
import KeyChain_35 from '../../images/KeyChain_35.jpeg';
import KeyChain_36 from '../../images/KeyChain_36.jpeg';
import KeyChain_37 from '../../images/KeyChain_37.jpeg';
import KeyChain_38 from '../../images/KeyChain_38.jpeg';
import KeyChain_39 from '../../images/KeyChain_39.jpeg';
import KeyChain_40 from '../../images/KeyChain_40.jpeg';
import Hair_Clip_1 from '../../images/Hair_Clip_1.jpeg';
import Hair_Clip_2 from '../../images/Hair_Clip_2.jpeg';
import Hair_Clip_3 from '../../images/Hair_Clip_3.jpeg';
import Hair_Clip_4 from '../../images/Hair_Clip_4.jpeg';
import Hair_Clip_5 from '../../images/Hair_Clip_5.jpeg';
import Hair_Clip_6 from '../../images/Hair_Clip_6.jpeg';
import Hair_Clip_7 from '../../images/Hair_Clip_7.jpeg';
import Hair_Clip_8 from '../../images/Hair_Clip_8.jpeg';
import Hair_Clip_9 from '../../images/Hair_Clip_9.jpeg';
import Hair_Clip_10 from '../../images/Hair_Clip_10.jpeg';
import Hair_Clip_11 from '../../images/Hair_Clip_11.jpeg';
import Hair_Clip_12 from '../../images/Hair_Clip_12.jpeg';
import Hair_Clip_13 from '../../images/Hair_Clip_13.jpeg';
import Hair_Clip_14 from '../../images/Hair_Clip_14.jpeg';
import Hair_Clip_15 from '../../images/Hair_Clip_15.jpeg';
import Hair_Clip_16 from '../../images/Hair_Clip_16.jpeg';
import Hair_Clip_17 from '../../images/Hair_Clip_17.jpeg';
import Pots_1 from '../../images/Pots_1.jpeg';
import Pots_2 from '../../images/Pots_2.jpeg';
import Pots_3 from '../../images/Pots_3.jpeg';
import Pots_4 from '../../images/Pots_4.jpeg';
import Trinklet_1 from '../../images/Trinklet_1.jpeg';
import Trinklet_2 from '../../images/Trinklet_2.jpeg';
import Trinklet_3 from '../../images/Trinklet_3.jpeg';
import Trinklet_4 from '../../images/Trinklet_4.jpeg';
import Carousell from './Carousel';
import {
    ClockCircleOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined
} from '@ant-design/icons';

const { Meta } = Card;

/* --------------component Home Starts-------------- */

const Home = (props) => {

    useEffect(() => {
        props.title && (document.title = props.title);
    });

    return (
        <React.Fragment>
            <section className="banner-section">
                <div className="banner-part">
                    <Carousel
                        autoplay={true}
                        dots={false}
                    >
                        <div>
                            <Image src={handicraft_1} className="banner-img" preview={false} />
                            <div className="banner-text-slider-1">
                                <p>Premium Quality</p>
                                <p>Handicraft Products</p>
                            </div>
                        </div>
                        <div>
                            <Image src={handicraft_2} className="banner-img" preview={false} />
                            <div className="banner-text-slider-2">
                                <p>Enhance your decore</p>
                                <p>with Attractive Handicrafts</p>
                            </div>
                        </div>
                        <div>
                            <Image src={handicraft_3} className="banner-img" preview={false} />
                            <div className="banner-text-slider-3">
                                <p>Something handmade is so</p>
                                <p>much more meaningful</p>
                            </div>
                        </div>
                        <div>
                            <Image src={handicraft_4} className="banner-img" preview={false} />
                            <div className="banner-text-slider-4">
                                <p>The best things are</p>
                                <p>made by hand</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
            <section className="card-section">
                <div className="container">
                    <h1>Types of Handicrafts</h1>
                    <Row>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={KeyChain_6} />}
                        >
                            <Meta title="Key Chain Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Clay_6} />}
                        >
                            <Meta title="Clay Handicrafts" className="cards-meta" />
                        </Card>
                        {/* <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={paper} />}
                        >
                            <Meta title="Candal Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={crystal} />}
                        >
                            <Meta title="Glass Handicrafts" className="cards-meta" />
                        </Card> */}
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Trinklet_4} />}
                        >
                            <Meta title="Crochet Trinklets Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Clay_8} />}
                        >
                            <Meta title="Clay Trinklets Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Earring_1} />}
                        >
                            <Meta title="Earrings Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Hair_Clip_3} />}
                        >
                            <Meta title="Hair clips Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Bags_5} />}
                        >
                            <Meta title="Bags Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={Pots_1} />}
                        >
                            <Meta title="Pots Handicrafts" className="cards-meta" />
                        </Card>
                    </Row>
                </div>
            </section>
            <section className="carousel-section">
                <Row>
                    <Col xs={24} sm={4} md={4} lg={4} xl={4}>
                        <div className="product-card">
                            <h1>Deals of the Day</h1>
                        </div>
                    </Col>
                    <Col xs={24} sm={20} md={20} lg={20} xl={20}>
                        <div style={{ maxWidth: 1000, marginLeft: 'auto', marginTop: 64 }}>
                            <Carousell
                                show={4}
                            >
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Bags_1} className="carousel-img" />}
                                    >
                                        <Meta title="Handicrafted Multicoloured Square Wooden Chowki" description="₹ 800" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Bags_4} className="carousel-img" />}
                                    >
                                        <Meta title="Iron Sitting Musician Doll Set Handmade Handicraft" description="₹ 500" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Clay_3} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 250" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Clay_6} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 180" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Clay_8} className="carousel-img" />}
                                    >
                                        <Meta title="Gemstone Studded Pure Brass Camel Handicraft" description="₹ 250" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Clay_10} className="carousel-img" />}
                                    >
                                        <Meta title="Little India Rajasthani Handmade Elephant Handicraft" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Earring_2} className="carousel-img" />}
                                    >
                                        <Meta title="Handicrafted Multicoloured Square Wooden Chowki" description="₹ 100" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Earring_4} className="carousel-img" />}
                                    >
                                        <Meta title="Iron Sitting Musician Doll Set Handmade Handicraft" description="₹ 100" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Earring_9} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 100" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Earring_11} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 120" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_2} className="carousel-img" />}
                                    >
                                        <Meta title="Handicrafted Multicoloured Square Wooden Chowki" description="₹ 120" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_4} className="carousel-img" />}
                                    >
                                        <Meta title="Iron Sitting Musician Doll Set Handmade Handicraft" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_8} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 120" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_9} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 100" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_14} className="carousel-img" />}
                                    >
                                        <Meta title="Handicrafted Multicoloured Square Wooden Chowki" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_16} className="carousel-img" />}
                                    >
                                        <Meta title="Iron Sitting Musician Doll Set Handmade Handicraft" description="₹ 100" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Hair_Clip_17} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_1} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 180" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_2} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_3} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 180" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_7} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 150" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_9} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 150" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_10} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_11} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_12} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_13} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_14} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_16} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 250" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_17} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 450" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_21} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_23} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_24} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 130" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_26} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 200" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_28} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 120 per piece" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_33} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 100 per piece" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_36} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 220" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_38} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 180" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={KeyChain_40} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 180" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Pots_1} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Pots_2} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 350" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Pots_3} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 250" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Pots_4} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 450" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Trinklet_1} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 600" className="cards-meta" />
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={Trinklet_4} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 700" className="cards-meta" />
                                    </Card>
                                </div>
                            </Carousell>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="about-section">
                <Row>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Image src={about} preview={false} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <div className="product-title-about">
                            <h1>About Art Stack</h1>
                            <p>We, handicraft at Agricultural College in Hyderabad, Telangana, are a popular firm that ideates, creates and sells a wide range of handicraft items. The handicraft culture never goes out of style and we make sure to stay up-to-date with designs and products coming in the market. We aim to stay on top of the market and be the best amongst our competitors. We sell products that are high on satisfaction, durability and style, all at once. Contact us, we'll show you our work and esteemed clientele.</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="gallery-section">
                <div className="gallery-container">
                    <h1>Gallery</h1>
                    <Row>
                        <div className="gallery-box">
                            <Image src={Bags_2} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Bags_3} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Bags_6} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_1} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_2} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_4} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_5} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_7} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Clay_9} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_3} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_5} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_6} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_7} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_8} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Earring_10} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_4} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_5} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_8} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_15} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_18} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_19} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_20} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_8} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_25} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_27} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_29} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_30} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_31} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_32} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_34} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_35} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_37} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={KeyChain_39} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_1} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_5} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_6} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_7} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_10} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_11} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_12} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_13} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Hair_Clip_15} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Pots_1} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Pots_2} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Pots_3} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Pots_4} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Trinklet_2} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={Trinklet_3} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                    </Row>
                </div>
            </section>
            <section className="videos-section">
                <div className="videos-container">
                    <h1>Videos</h1>
                    <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <iframe src='https://youtube.com/embed/qmoA44FRilM?feature=share'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            {/* <h1>Types of Handicraft Items</h1> */}
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <iframe src='https://youtube.com/embed/ZP670OvUGqU'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            {/* <h1>Types of Marble Handicrafts</h1> */}
                        </Col>
                    </Row>
                    {/* <Row style={{ marginTop: '30px' }}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            <h1>Crafts Mela - Importance of Handicrafts</h1>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            <h1>Wooden Handicrafts</h1>
                        </Col>
                    </Row> */}
                </div>
            </section>
            <section className="testimonals-section">
                <div className="testimonals-part">
                    <Image src={quotes} preview={false} className="quotes" />
                    <h1>Testimonals</h1>
                    <Carousel
                        autoplay={true}
                        dots={false}
                    >
                        <div className="testimonals-text-slider-1">
                            <p>Creative Handicraft Products sold here, top most quality and very</p>
                            <p>durable, purchased in bulk from here.</p>
                            <h1>Ompriseh Singh</h1>
                        </div>
                        <div className="testimonals-text-slider-2">
                            <p>Best Handicraft Items found here. They provide a wide range of</p>
                            <p>products to choose from.</p>
                            <h1>Vendika Kantal</h1>
                        </div>
                        <div className="testimonals-text-slider-3">
                            <p>They have a wide range of beautiful and traditional items to</p>
                            <p>choose from! Give it a look</p>
                            <h1>Atin Gupta</h1>
                        </div>
                    </Carousel>
                </div>
            </section>
            <section className="contact-section">
                <div className="contact-part">
                    <h1>Contact Us</h1>
                    <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <EnvironmentOutlined className="contact-icon" /><span>Our Office Address</span>
                            <p>8-1-423/D/111&113, 5th floor door no. 501, Shaikpet, Diamond hills colony, HYDERABAD, TELANGANA, India, 500008</p>
                            <MailOutlined className="contact-icon" /><span>General Enquiries</span>
                            <p>ourartstack@gmail.com</p>
                            <PhoneOutlined className="contact-icon" /><span>Call Us</span>
                            <p>+91-9701988141</p>
                            <ClockCircleOutlined className="contact-icon" /><span>Our Timing</span>
                            <p>Mon - Sun : 09:00 AM - 09:00 PM</p>
                        </Col>
                        {/* <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Input type="text" placeholder="YOUR NAME" className="contact-input" />
                            <Input type="text" placeholder="YOUR EMAIL" className="contact-input" />
                            <Input type="text" placeholder="YOUR CONTACT NO." className="contact-input" />
                            <Input type="text" placeholder="YOUR MESSAGE" className="contact-input" style={{ height: '80px' }} />
                            <Button className="contact-btn">Submit</Button>
                        </Col> */}
                    </Row>
                </div>
            </section>
        </React.Fragment>
    );
};

/* --------------component Home Ends-------------- */

/* -------------component Home exported------------------*/

export default Home;