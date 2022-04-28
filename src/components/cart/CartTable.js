import React from 'react';
import { Select, Table, Image } from 'antd';
import new_bag from '../../images/new_bag.jpg';
import {
    HeartOutlined, CloseOutlined
} from '@ant-design/icons';

/* ------------------------constants defined-------------------------*/
const { Option } = Select;

const dataSource = [
    {
        key: '1',
        item:
            <div className="cart-item">
                <Image src={new_bag} className="cart-item-img" preview={false} />
                <ul>
                    <li><p>Centenarian Brass Metal Bag</p></li>
                    <li><h1>₹ 1,999</h1></li>
                    <li><div className="cart-item-action"><h2><HeartOutlined /> MOVE TO WISHLIST</h2><span><h2><CloseOutlined /> REMOVE</h2></span></div></li>
                </ul>
            </div>
        ,
        quantity:
            <div>
                <Select defaultValue="1" className="cart-select">
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                </Select>
            </div>
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

export const CartTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
