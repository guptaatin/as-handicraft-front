import React, { useEffect } from 'react';
import { Image, Row, Col, Button, Carousel, Card, Input } from 'antd';
import "./home.css";
import handicraft_1 from '../../images/handicraft_1.jpg';
import handicraft_2 from '../../images/handicraft_2.jpg';
import handicraft_3 from '../../images/handicraft_3.jpg';
import handicraft_4 from '../../images/handicraft_4.jpg';
import about from '../../images/about.jpg';
import quotes from '../../images/quotes.png';
import brass from '../../images/brass.jpg';
import dhokra from '../../images/dhokra.jpg';
import paper from '../../images/paper.jpg';
import crystal from '../../images/crystal.jpg';
import wooden from '../../images/wooden.jpg';
import weaving from '../../images/weaving.jpg';
import embroidery from '../../images/embroidery.png';
import rock from '../../images/rock.jpg';
import bag from '../../images/bag.jpg';
import pooja_thali from '../../images/pooja_thali.jpg';
import camel from '../../images/camel.jpg';
import elephant from '../../images/elephant.jpg';
import square from '../../images/square.jpg';
import toy from '../../images/toy.jpg';
import Carousell from './Carousel';
import {
    ClockCircleOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined
} from '@ant-design/icons';

const { Meta } = Card;

/* --------------component Home Starts-------------- */

const Home = (props) => {

    useEffect(() => {
        props.title && (document.title = props.title);
    })

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
                            cover={<img alt="example" src={brass} />}
                        >
                            <Meta title="Brass Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={dhokra} />}
                        >
                            <Meta title="Dhokra Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={paper} />}
                        >
                            <Meta title="Paper Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={crystal} />}
                        >
                            <Meta title="Crystal Handicrafts" className="cards-meta" />
                        </Card>

                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={wooden} />}
                        >
                            <Meta title="Wooden Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={weaving} />}
                        >
                            <Meta title="Weaving Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={embroidery} />}
                        >
                            <Meta title="Embroidery Handicrafts" className="cards-meta" />
                        </Card>
                        <Card
                            hoverable
                            className="cards"
                            cover={<img alt="example" src={rock} />}
                        >
                            <Meta title="Rock Handicrafts" className="cards-meta" />
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
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={bag} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 349" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={pooja_thali} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 340" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={camel} className="carousel-img" />}
                                    >
                                        <Meta title="Gemstone Studded Pure Brass Camel Handicraft" description="₹ 307" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={elephant} className="carousel-img" />}
                                    >
                                        <Meta title="Little India Rajasthani Handmade Elephant Handicraft" description="₹ 209" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={square} className="carousel-img" />}
                                    >
                                        <Meta title="Handicrafted Multicoloured Square Wooden Chowki" description="₹ 499" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={toy} className="carousel-img" />}
                                    >
                                        <Meta title="Iron Sitting Musician Doll Set Handmade Handicraft" description="₹ 1359" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={bag} className="carousel-img" />}
                                    >
                                        <Meta title="Aadhunik Libaas Women's Handicraft Sling Bag" description="₹ 349" className="cards-meta" />
                                    </Card>
                                </div>
                                <div >
                                    <Card
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={pooja_thali} className="carousel-img" />}
                                    >
                                        <Meta title="Handicraft Handmade Pooja Thali" description="₹ 340" className="cards-meta" />
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
                            <h1>About ASHandicraft</h1>
                            <p>We, handicraft at Agricultural College in Kanpur Nagar, Uttar Pradesh, are a popular firm that ideates, creates and sells a wide range of handicraft items. The handicraft culture never goes out of style and we make sure to stay up-to-date with designs and products coming in the market. We aim to stay on top of the market and be the best amongst our competitors. We sell products that are high on satisfaction, durability and style, all at once. Contact us, we'll show you our work and esteemed clientele.</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="gallery-section">
                <div className="gallery-container">
                    <h1>Gallery</h1>
                    <Row>
                        <div className="gallery-box">
                            <Image src={handicraft_2} preview={false} style={{ borderRadius: '10px', height: '255px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={handicraft_3} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="gallery-box">
                            <Image src={handicraft_1} preview={false} style={{ borderRadius: '10px' }} />
                        </div>
                    </Row>
                </div>
            </section>
            <section className="videos-section">
                <div className="videos-container">
                    <h1>Videos</h1>
                    <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div >
                                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            <h1>Types of Handicraft Items</h1>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div >
                                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                    className="video"
                                />
                            </div>
                            <h1>Types of Marble Handicrafts</h1>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '30px' }}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <div >
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
                            <div >
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
                    </Row>
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
                            <p>Agricultural College, Kanpur Nagar, Uttar</p>
                            <p>Pradesh 208002</p>
                            <MailOutlined className="contact-icon" /><span>General Enquiries</span>
                            <p>gharsh929@gmail.com</p>
                            <PhoneOutlined className="contact-icon" /><span>Call Us</span>
                            <p>+91-7355442998</p>
                            <ClockCircleOutlined className="contact-icon" /><span>Our Timing</span>
                            <p>Mon - Sun : 09:00 AM - 09:00 PM</p>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Input type="text" placeholder="YOUR NAME" className="contact-input" />
                            <Input type="text" placeholder="YOUR EMAIL" className="contact-input" />
                            <Input type="text" placeholder="YOUR CONTACT NO." className="contact-input" />
                            <Input type="text" placeholder="YOUR MESSAGE" className="contact-input" style={{ height: '80px' }} />
                            <Button className="contact-btn">Submit</Button>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    );
}

/* --------------component Home Ends-------------- */

/* -------------component Home exported------------------*/

export default Home;