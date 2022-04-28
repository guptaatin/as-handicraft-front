import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Breadcrumb, Button, Table, Image, Input, Collapse, Form, Radio } from 'antd';
import new_bag from '../../images/new_bag.jpg';
import cod from '../../images/cod.png';
import payment from '../../images/payment.jpg';
import coupon from '../../images/coupon.jpg';
import { Link } from 'react-router-dom';
import "./checkout_flow.css";
import {
    UserOutlined, HomeOutlined, BankOutlined, EnvironmentOutlined, HeartOutlined, CloseOutlined, RightOutlined, 
    SafetyCertificateFilled, ScheduleOutlined, ShoppingCartOutlined, CreditCardOutlined
} from '@ant-design/icons';
import FloatLabel from './FloatLabel';

/* ------------------------constants defined-------------------------*/
const { Panel } = Collapse;
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};
const { Option } = Select;
const dataSource = [
    {
        key: '1',
        item:
            <div className="review-item">
                <Image src={new_bag} className="review-item-img" preview={false} />
                <ul>
                    <li><p>Centenarian Brass Metal Bag</p></li>
                    <li><h1>₹ 1,999</h1></li>
                    <li><div className="review-item-action"><h2><HeartOutlined /> MOVE TO WISHLIST</h2><span><h2><CloseOutlined /> REMOVE</h2></span></div></li>
                </ul>
            </div>
        ,
        quantity: <h1>1 Qty</h1>
        ,
        amount: <h1>₹ 1,999</h1>,
    },
];

const columns = [
    {
        title: 'Item(s) Details',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
];

const reviewChange = () => (
    <Link to="/cart"><Button className="review-change-btn">CHANGE</Button></Link>
)
/* ---------------------component Checkout_Flow starts------------------------*/

const Checkout_Flow = (props) => {
    /* ----------------onload api's handler called in useEffect---------------- */

    useEffect(() => {
        props.title && (document.title = props.title);
    })

    const [name, setName] = useState("");
    const [altMobile, setAltMobile] = useState("");
    const [pincode, setPincode] = useState("");
    const [houseNum, setHouseNum] = useState("");
    const [streetName, setStreetName] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");

    function callback(key) {
        console.log(key);
    }

    return (
        <React.Fragment>
            <section className="breadcrumb">
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item>Checkout Flow</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className="checkout-flow-section">
                <Row>
                    <Col xs={24} sm={20} md={20} lg={20}>
                        <div className="checkout-flow-box">
                            <ul>
                                <li><UserOutlined className="icon-open" /></li>
                                <li>
                                    <Collapse onChange={callback} bordered={false} className="flow-collapse">
                                        <Panel header="ENTER MOBILE NUMBER" key="1" showArrow={false} className="flow-panel" >
                                            <div className="mobile-panel">
                                                <ul>
                                                    <li><Input placeholder="MOBILE NO." className="mobile-input" prefix="+91" /></li>
                                                    <li><Button className="mobile-btn">Continue</Button></li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </li>
                            </ul>
                            <ul>
                                <li><EnvironmentOutlined className="icon-open" /></li>
                                <li>
                                    <Collapse onChange={callback} bordered={false} className="flow-collapse">
                                        <Panel header="DELIVERY ADDRESS" key="1" showArrow={false} >
                                            <div className="address-panel">
                                                <ul>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="name" name="name" value={name}>
                                                                    <Form.Item
                                                                        name="name"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Name',
                                                                                pattern: /^[6-9]\d{9}$/
                                                                            }
                                                                        ]}
                                                                    >
                                                                        <Input value={name} onChange={e => setName(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="alternative mobile number" name="alt_mobile" value={altMobile}>
                                                                    <Form.Item
                                                                        name="alt_mobile"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Alternative Mobile'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input minLength="10" maxLength="10" value={altMobile} onChange={e => setAltMobile(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="Pincode" name="pincode" value={pincode}>
                                                                    <Form.Item
                                                                        name="pincode"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Pincode'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={pincode} onChange={e => setPincode(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="House / Flat / Block No. / Building Name" name="house_num" value={houseNum}>
                                                                    <Form.Item
                                                                        name="house_num"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter House / Flat / Block No. / Building Name'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={houseNum} onChange={e => setHouseNum(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="Street / Road / Colony Name" name="street_name" value={streetName}>
                                                                    <Form.Item
                                                                        name="street_name"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Street / Road / Colony Name'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={streetName} onChange={e => setStreetName(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="landmark" name="landmark" value={landmark}>
                                                                    <Form.Item
                                                                        name="landmark"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Landmark'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={landmark} onChange={e => setLandmark(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="city / town" name="city" value={city}>
                                                                    <Form.Item
                                                                        name="city"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter City'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={city} onChange={e => setCity(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="state" name="state" value={state}>
                                                                    <Form.Item
                                                                        name="state"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter State'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Select
                                                                            showSearch
                                                                            style={{ width: "100%" }}
                                                                            onChange={value => setState(value)}
                                                                            value={state}
                                                                            mode="tags"
                                                                            className="address-select"
                                                                        >
                                                                            <Option value="Uttar Pradesh">Uttar Pradesh</Option>
                                                                            <Option value="Telangana">Telangana</Option>
                                                                            <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                                                                            <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                                                                            <Option value="Rajasthan">Rajasthan</Option>
                                                                            <Option value="Bihar">Bihar</Option>
                                                                        </Select>
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <FloatLabel label="email" name="email" value={email}>
                                                                    <Form.Item
                                                                        name="email"
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Enter Email'
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input value={email} onChange={e => setEmail(e.target.value)} className="address-input" />
                                                                    </Form.Item>
                                                                </FloatLabel>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <li>
                                                        <Row>
                                                            <Col xs={24} sm={12} md={12} lg={12}>
                                                                <Form.Item
                                                                    name="save_as"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please Enter Save As'
                                                                        },
                                                                    ]}
                                                                >
                                                                    <div className="saveas">
                                                                        <ul>
                                                                            <li>
                                                                                <h1>Save As</h1>
                                                                            </li>
                                                                            <li>
                                                                                <Radio.Group defaultValue="" buttonStyle="solid" >
                                                                                    <Radio.Button value="a" className="address-radio"><HomeOutlined className="radio-icon" />Home</Radio.Button>
                                                                                    <Radio.Button value="b" className="address-radio"><BankOutlined className="radio-icon" />Office</Radio.Button>
                                                                                    <Radio.Button value="c" className="address-radio"><EnvironmentOutlined className="radio-icon" />Others</Radio.Button>
                                                                                </Radio.Group>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </li>
                                                    <Row>
                                                        <Button type="green" htmlType="submit" className="mobile-btn">Save & Continue</Button>
                                                    </Row>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </li>
                            </ul>
                            <ul>
                                <li><ScheduleOutlined className="icon-open" /></li>
                                <li>
                                    <Collapse onChange={callback} bordered={false} className="flow-collapse">
                                        <Panel header="DELIVERY SCHEDULE" key="1" showArrow={false} >
                                            <div className="schedule-panel">
                                                <h1>02 Aug'21, Monday</h1>
                                                <p>9 AM</p>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </li>
                            </ul>
                            <ul>
                                <li><ShoppingCartOutlined className="icon-open" /></li>
                                <li>
                                    <Collapse onChange={callback} bordered={false} className="flow-collapse">
                                        <Panel header="REVIEW ORDER" key="1" showArrow={false} extra={reviewChange()}>
                                            <div className="review-panel">
                                                <Table dataSource={dataSource} columns={columns} />
                                                <Button className="review-payment-btn">MAKE PAYMENT</Button>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </li>
                            </ul>
                            <ul>
                                <li><CreditCardOutlined className="icon-open" /></li>
                                <li>
                                    <Collapse onChange={callback} bordered={false} className="flow-collapse">
                                        <Panel header="MAKE PAYMENT" key="1" showArrow={false} >
                                            <Row>
                                                <Col xs={24} sm={6} md={6} lg={6}>
                                                    <div className="payment-panel">
                                                        <ul>
                                                            <li><Image src={cod} preview={false} className="icon-cod" /></li>
                                                            <li><h4>Cash On Delivery</h4></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xs={24} sm={18} md={18} lg={18}>
                                                    <Image src={payment} preview={false} className="icon-payment" />
                                                    <p className="text-payment">Please pay to the delivery executive when your order is delivered</p>
                                                    <Button className="payment-btn">CONFIRM ORDER</Button>
                                                </Col>
                                            </Row>
                                        </Panel>
                                    </Collapse>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={24} sm={4} md={4} lg={4}>
                        <div className="payment-checkout">
                            <div className="cart-coupon">
                                <div className="coupon-box">
                                    <Image src={coupon} className="coupon-img" preview={false} />
                                    <h2>Apply Coupon</h2><span><RightOutlined /></span>
                                </div>
                            </div>
                            <div className="cart-checkout" style={{ height: '180px' }}>
                                <div className="cart-checkout-info">
                                    <ul>
                                        <li><h1>Item(s) Total</h1></li>
                                        <li><h1>₹ 1,999</h1></li>
                                    </ul>
                                    <ul>
                                        <li><h2>Delivery Charge</h2></li>
                                        <li><p>Free</p></li>
                                    </ul>
                                </div>
                                <div className="cart-checkout-amount">
                                    <ul>
                                        <li><h1>Amount Payable</h1></li>
                                        <li><h1>₹ 1,999</h1></li>
                                    </ul>
                                    <p>INCLUSIVE OF ALL TAXES</p>
                                </div>
                            </div>
                            <div className="safe-payment">
                                <ul>
                                    <li><h3><SafetyCertificateFilled className="icon-safe" /></h3></li>
                                    <li><p>100% Safe and Secure Payments.</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    );
}
/* ---------------------component Checkout_Flow ends------------------------*/

export default Checkout_Flow;