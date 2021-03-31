import React from 'react';
import { Card,  message,  Spin, Tabs, Table } from 'antd';

import api from '../../api';
import moment from 'moment';



import 'moment/locale/zh-cn';

moment.locale('zh-cn');
const { TabPane } = Tabs;
export default class Sms extends React.Component {
    state = {
    }
    componentWillMount = () => {
        // this.setState({ loading: true })
    }

    render() {
        return (
            <div>
                <Card title="SSL证书" style={{ textAlign: 'left' }} //extra={<a href="#">More</a>}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="证书列表" key="1">
                            <Tab1 />
                        </TabPane>
                        {/* <TabPane tab="短信模板" key="2">
                            <Tab2 />
                        </TabPane>
                        <TabPane tab="短信发送记录" key="3">
                            <Tab3 />
                        </TabPane>
                        <TabPane tab="数据统计" key="4">
                            <Tab4 />
                        </TabPane> */}
                    </Tabs>
                </Card>
            </div>
        );
    }
}

class Tab1 extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible1: false,
            visible2: false,
            loading: false,
            loading1: false,
            con: {}
        }
    }
    componentWillMount = () => {
        this.setState({ loading: true });
        this.sslgetList();
    }
    // 获取ssl列表
    sslgetList = async () => {
        let res = await api.sslgetList();
        console.log(res)
        if (res.code === 200) {
            this.setState({ list_data: res.dataMap })
        } else {
            message.error(res.message)
        }
        this.setState({ loading: false })
    }

    render() {
        const columns = [
            {
                title: '产品ID',
                dataIndex: 'id',
                key: 'id',
                width: 150,
                render: id => <span>{id}</span>,
            },
            {
                title: '证书品牌',
                dataIndex: 'brand',
                key: 'brand',
                // width: 300,
                render: brand => <span>{brand}</span>,
            },
            {
                title: '证书名称',
                dataIndex: 'productName',
                key: 'productName',
                // width: 300,
                render: productName => <span>{productName}</span>,
            },
            {
                title: '证书时间',
                dataIndex: 'duration',
                key: 'duration',
                // width: 300,
                render: duration => <span>{duration}年</span>,
            },
            {
                title: '零售价格',
                dataIndex: 'price',
                key: 'price',
                // width: 300,
                render: price => <span>{price}</span>,
            },
            {
                title: '分销价格',
                dataIndex: 'priceShipment',
                key: 'priceShipment',
                width: 200,
                render: priceShipment => <span>{priceShipment}</span>,
            },
            {
                title: '折扣比例',
                dataIndex: 'discount',
                key: 'discount',
                render: (discount) => {
                    return <span>{discount}</span>
                },
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                width: 200,
                render: state => <span>{
                    state === "1" ?
                        (<span style={{ color: 'green' }}>正常</span>):
                        state === "3"?
                        (<span style={{ color: 'gary' }}>先购买基础套餐</span>):''
                      }
                </span>,
            }
        ];
        return (
            <Spin spinning={this.state.loading}>
                <div style={{ marginTop: '15px' }}>
                    <Table
                        rowKey={record => record.id}
                        columns={columns}
                        dataSource={this.state.list_data}
                    />
                </div>
            </Spin>
        );
    }
}
