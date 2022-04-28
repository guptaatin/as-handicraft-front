import React, { useState, useEffect } from 'react';
import { Upload, Breadcrumb, Image, Form, Select, Row, Col, Drawer, Input, DatePicker, Button, Radio } from 'antd';
import user_pic from '../../images/user_pic.jpg';
import back_profile_pic from '../../images/back_profile_pic.jpg';
import { Link } from 'react-router-dom';
import FloatLabel from '../checkout_flow/FloatLabel';
import { PlusOutlined, LoadingOutlined, ShopTwoTone, HeartTwoTone, IdcardTwoTone, EnvironmentTwoTone, ToolTwoTone } from '@ant-design/icons';
import './my_account.css';

const { Option } = Select;

/* ---------------------component My_Account starts------------------------*/
const My_Account = (props) => {
    /* ----------------onload api's handler called in useEffect---------------- */

    useEffect(() => {
        props.title && (document.title = props.title);
    });

    const [imageUrlBack, setImageUrlBack] = useState("");
    const [loadingBack, setLoadingBack] = useState(false);
    const [imageUrlProfile, setImageUrlProfile] = useState("");
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [visibleAddress, setVisibleAddress] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const showDrawerAddress = () => {
        setVisibleAddress(true);
    };

    const onCloseAddress = () => {
        setVisibleAddress(false);
    };

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const handleChangeBack = info => {
        if (info.file.status === 'uploading') {
            setLoadingBack(true);
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.status === true) {
                setImageUrlBack(info.file.response.data.filename.filename)
            }
            getBase64(info.file.originFileObj, imageUrlBack => {
                setLoadingBack(false);
                setImageUrlBack(imageUrlBack);
            }
            );
        }
    };

    const handleChangeProfile = info => {
        if (info.file.status === 'uploading') {
            setLoadingProfile(true);
            return;
        }
        if (info.file.status === 'done') {
            if (info.file.response.status === true) {
                setImageUrlProfile(info.file.response.data.filename.filename)
            }
            getBase64(info.file.originFileObj, imageUrlProfile => {
                setLoadingProfile(false);
                setImageUrlProfile(imageUrlProfile);
            }
            );
        }
    };
    return (
        <React.Fragment>
            <section className="breadcrumb">
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="#">My Account</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="#">My Orders</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>#1</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className="account-section">
                <div className="profile-box">
                    <Upload
                        name="addfile"
                        accept=".jpg, .jpeg, .png"
                        listType="picture-card"
                        className="back-avatar-uploader"
                        showUploadList={false}
                        // action={ApiPath.addfile}
                        // headers={authHeader}
                        onChange={handleChangeBack}
                    >
                        {imageUrlBack ? <img src={imageUrlBack} alt="File Uploaded" style={{ width: '100%' }} /> : <Image src={back_profile_pic} preview={false} className="dummy-back-profile" />}
                    </Upload>
                    <Upload
                        name="addfile"
                        accept=".jpg, .jpeg, .png"
                        listType="picture-card"
                        className="profile-avatar-uploader"
                        showUploadList={false}
                        // action={ApiPath.addfile}
                        // headers={authHeader}
                        onChange={handleChangeProfile}
                    >
                        {imageUrlProfile ? <img src={imageUrlProfile} alt="File Uploaded" style={{ width: '100%' }} /> : <Image src={user_pic} preview={false} className="dummy-profile" />}
                    </Upload>
                    <h2>Harsh Gupta</h2>
                    <div className="options-boxes">
                        <Link to="#">
                            <div className="each-box">
                                <ul>
                                    <li><ShopTwoTone className="option-icon" /></li>
                                    <li>
                                        <div className="options-list">
                                            <ul>
                                                <li><h1>Orders</h1></li>
                                                <li><p>Track Your Orders, Return Products or Buy them again</p></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="each-box">
                                <ul>
                                    <li><HeartTwoTone className="option-icon" /></li>
                                    <li>
                                        <div className="options-list">
                                            <ul>
                                                <li><h1>Wishlist</h1></li>
                                                <li><p>Here is the List of all Your Desired Products</p></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                        <Link to="#" onClick={showDrawer}>
                            <div className="each-box">
                                <ul>
                                    <li><IdcardTwoTone className="option-icon" /></li>
                                    <li>
                                        <div className="options-list">
                                            <ul>
                                                <li><h1>Profile</h1></li>
                                                <li><p>Add Profile Image, Edit Your Name and Email</p></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                        <Drawer
                            title={
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <p>Profile Details</p>
                                </div>
                            }
                            width={320}
                            onClose={onClose}
                            visible={visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            footer={
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button onClick={onClose} type="primary" className="profile-save-btn">
                                        Save
                                    </Button>
                                </div>
                            }
                        >
                            <Form.Item
                                name="profile_back_avatar"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Upload
                                    name="addfile"
                                    accept=".jpg, .jpeg, .png"
                                    listType="picture-card"
                                    className="profile-back-avatar-uploader"
                                    showUploadList={false}
                                    // action={ApiPath.addfile}
                                    // headers={authHeader}
                                    onChange={handleChangeBack}
                                >
                                    {imageUrlBack ? <img src={imageUrlBack} alt="File Uploaded" style={{ width: '100%' }} />
                                        :
                                        <div className="profile-back-dummy">
                                            <div></div>
                                        </div>}
                                </Upload>
                            </Form.Item>
                            <Form.Item
                                name="profile_front_avatar"
                                rules={[{ required: true, message: 'Please enter url' }]}
                            >
                                <Upload
                                    name="addfile"
                                    accept=".jpg, .jpeg, .png"
                                    listType="picture-card"
                                    className="profile-front-avatar-uploader"
                                    showUploadList={false}
                                    // action={ApiPath.addfile}
                                    // headers={authHeader}
                                    onChange={handleChangeProfile}
                                >
                                    {imageUrlProfile ? <img src={imageUrlProfile} alt="File Uploaded" style={{ width: '100%' }} /> : <Image src={user_pic} preview={false} className="dummy-profile-front" />}
                                </Upload>
                            </Form.Item>
                            <div className="more-profile-info">
                                <ul>
                                    <li>
                                        <FloatLabel label="name" name="name" value={name}>
                                            <Form.Item
                                                name="name"
                                                rules={[{ required: true, message: 'Please enter user name' }]}
                                            >
                                                <Input value={name} onChange={e => setName(e.target.value)} className="profile-input" />
                                            </Form.Item>
                                        </FloatLabel>
                                    </li>
                                    <li>
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
                                                <Input value={email} onChange={e => setEmail(e.target.value)} className="profile-input" />
                                            </Form.Item>
                                        </FloatLabel>
                                    </li>
                                    <li>
                                        <h4>Mobile</h4>
                                    </li>
                                    <li>
                                        <Form.Item
                                            name="mobile"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Enter Mobile'
                                                },
                                            ]}
                                        >
                                            <Input value={mobile} onChange={e => setMobile(e.target.value)} addonBefore="+91" className="profile-input" />
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <h4>Gender</h4>
                                    </li>
                                    <li>
                                        <Form.Item
                                            name="gender"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Enter Gender'
                                                },
                                            ]}
                                        >
                                            <div className="gender">
                                                <ul>
                                                    <li>
                                                        <Radio.Group defaultValue="" buttonStyle="solid" >
                                                            <Radio.Button value="a" className="gender-radio">Male</Radio.Button>
                                                            <Radio.Button value="b" className="gender-radio">Female</Radio.Button>
                                                        </Radio.Group>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Form.Item>
                                    </li>
                                    <li>
                                        <Form.Item
                                            name="dob"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Enter dob'
                                                },
                                            ]}
                                        >
                                            <DatePicker onChange={onChange} placeholder="Date of Birth" className="profile-input" />
                                        </Form.Item>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                        <Link to="#" onClick={showDrawerAddress}>
                            <div className="each-box">
                                <ul>
                                    <li><EnvironmentTwoTone className="option-icon" /></li>
                                    <li>
                                        <div className="options-list">
                                            <ul>
                                                <li><h1>Addresses</h1></li>
                                                <li><p>Add or Edit Your Addresses</p></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                        <Drawer
                            title={
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <p>Profile Details</p>
                                </div>
                            }
                            width={320}
                            onClose={onCloseAddress}
                            visible={visibleAddress}
                            bodyStyle={{ paddingBottom: 80 }}
                            footer={
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button onClick={onCloseAddress} type="primary" className="profile-save-btn">
                                        Save
                                    </Button>
                                </div>
                            }
                        ></Drawer>
                        <Link to="#">
                            <div className="each-box">
                                <ul>
                                    <li><ToolTwoTone className="option-icon" /></li>
                                    <li>
                                        <div className="options-list">
                                            <ul>
                                                <li><h1>Change Password</h1></li>
                                                <li><p>You can Change Your Password</p></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

/* ---------------------component My_Account ends------------------------*/
export default My_Account;