import React from 'react';
import { Button, Card, Input, message, DatePicker, Modal, Form, Spin, Tabs, Table, Tag } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, } from 'bizcharts';
import DataSet from '@antv/data-set'

import fun from '../../utils/public';
import api from '../../api';
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';



import 'moment/locale/zh-cn';

moment.locale('zh-cn');
const { TabPane } = Tabs;
const { TextArea } = Input;
const { confirm } = Modal;
export default class Sms extends React.Component {
    state = {
    }
    componentWillMount = () => {
        // this.setState({ loading: true })
    }

    render() {
        return (
            <div>
                <Card title="短信服务" style={{ textAlign: 'left' }} //extra={<a href="#">More</a>}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="短信签名" key="1">
                            <Tab1 />
                        </TabPane>
                        <TabPane tab="短信模板" key="2">
                            <Tab2 />
                        </TabPane>
                        <TabPane tab="短信发送记录" key="3">
                            <Tab3 />
                        </TabPane>
                        <TabPane tab="数据统计" key="4">
                            <Tab4 />
                        </TabPane>
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
            list_data: { pageSize: 5, pageNum: 1 },
            filter: { pageSize: 5, pageNum: 1 },
            con: {}
        }
    }
    componentWillMount = () => {
        this.setState({ loading: true });
        this.sms_signature_list(this.state.filter);
    }
    // 获取签名模板
    sms_signature_list = async (filter) => {
        let res = await api.sms_signature_list(filter);
        // console.log(res)
        if (res.code === 200) {
            this.setState({ list_data: res.dataMap })
        } else {
            message.error(res.message)
        }
        this.setState({ loading: false })
    }
    //新增&修改签名
    handleSubmit = async (values) => {
        let val = {};
        this.setState({ loading1: true })
        if (this.state.con.id) {
            val = Object.assign(this.formRef.current.getFieldsValue(), { id: this.state.con.id })
        } else {
            val = values
        }

        let res = await api.sms_signature_post(val);
        // console.log(res)
        if (res.code === 200) {
            this.sms_signature_list(this.state.filter);
            if (this.state.con.id) {
                message.success("修改成功")
            } else {
                message.success("新增成功")
            }
            this.handleCancel()
        } else {
            message.error(res.message)
        }
        this.setState({ loading1: false, })
    }
    //删除签名
    sms_signature_delete = async (id) => {
        this.setState({ loading: true })
        let res = await api.sms_signature_delete(id);
        if (res.code === 200) {
            message.success("删除成功");
            this.sms_signature_list(this.state.filter);
        } else {
            message.error(res.message)
        }
        this.setState({ loading: false })
    }

    showConfirm2 = (obj) => {
        let This = this
        confirm({
            title: '您是否确认要删除该签名:',
            content: obj.context,
            onOk() {
                This.sms_signature_delete(obj.id)
            },
            onCancel() { },
            okText: '确定',
            cancelText: '取消'
        });
    }
    pagechange = (pageNum, pageSize) => {
        this.setState({ filter: { pageNum, pageSize } });
        this.sms_signature_list({ pageNum, pageSize });
    }
    handleCancel = () => {
        this.setState({ visible: false, visible1: false, visible2: false, con: {} })
    }
    showModal = () => {
        this.setState({ visible: true })
    }
    showModal1 = (obj) => {
        // this.formRef.current.resetFields();
        // this.formRef.current.setFieldsValue({
        //     webSite: 'Hello world!',
        //     context: 'male',
        // });
        this.setState({ loadding1: true, visible1: true, con: obj })
        this.formRef.current.setFieldsValue({
            webSite: obj.webSite,
            context: obj.context,
        });
    }

    showModal2 = (obj) => {
        this.setState({ visible2: true, con: obj })
    }

    render() {
        const columns = [
            {
                title: '签名调用ID',
                dataIndex: 'id',
                key: 'id',
                width: 150,
                render: id => <span>{id}</span>,
            },
            {
                title: '签名内容',
                dataIndex: 'context',
                key: 'context',
                // width: 300,
                render: context => <span>{context}</span>,
            },
            {
                title: '关联网站',
                dataIndex: 'webSite',
                key: 'webSite',
                // width: 300,
                render: webSite => <span>{webSite}</span>,
            },
            {
                title: '签名状态',
                dataIndex: 'state',
                key: 'state',
                width: 200,
                render: state => <span>{
                    state === 1 ?
                        (<span style={{ color: 'orange' }}>未审核</span>)
                        : state === 2 ?
                            (<span style={{ color: 'green' }}>审核通过</span>)
                            : state === 3 ?
                                (<span style={{ color: 'red' }}>审核未通过</span>)
                                : (<span style={{ color: 'green' }}>历史签名</span>)}
                </span>,
            },
            {
                title: '说明',
                dataIndex: 'reason',
                key: 'reason',
                render: (reason) => {
                    return <span>{reason}</span>
                },
            },
            {
                title: '申请时间',
                dataIndex: 'creatTime',
                key: 'creatTime',
                width: 200,
                render: (creatTime) => {
                    return <span>{fun.timeTrans(creatTime)}</span>
                },
            },

            {
                title: '操作',
                key: 'key',
                width: 200,
                render: (index) => {
                    return <span>
                        <Button type="link" onClick={this.showConfirm2.bind(this, index)}>删除</Button>
                        {
                            index.state !== 2 ?
                                <Button type="link" onClick={this.showModal1.bind(this, index)}>编辑</Button>
                                :
                                <Button type="link" onClick={this.showModal2.bind(this, index)}>查看</Button>
                        }

                    </span>
                },
            },
        ];
        return (
            <Spin spinning={this.state.loading}>
                <div>
                    <Button type="primary" onClick={this.showModal}>新增签名</Button>
                    <div style={{ marginTop: '15px' }}>
                        <Table
                            rowKey={record => record.id}
                            columns={columns}
                            dataSource={this.state.list_data.records}
                            pagination={{
                                onChange: this.pagechange,
                                defaultCurrent: 1,
                                pageSize: this.state.list_data.pageSize,
                                pageNo: this.state.list_data.pageNo,
                                total: this.state.list_data.totalRecodes
                            }}
                        />
                    </div>
                    <Modal
                        forceRender
                        title="新增签名"
                        centered
                        visible={this.state.visible}
                        footer={null}
                        onCancel={this.handleCancel}
                        width="400px"
                    >
                        <Form ref={this.formRef} labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onFinish={this.handleSubmit}>
                            <Form.Item label="网站：" name="webSite" rules={[{ required: true, message: '必须填写' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="短信签名：" name="context"
                                rules={[{ required: true, message: '必须填写' }, { pattern: /^.{3,20}$/, message: '签名长度为2-10个字符' }]}
                                help="签名长度为2-10个字符"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 23 }} style={{ textAlign: 'right', marginBottom: 0 }}>
                                <Button type="primary" htmlType="submit"> 确定 </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Modal
                        forceRender
                        title="编辑签名"
                        centered
                        visible={this.state.visible1}
                        onCancel={this.handleCancel}
                        footer={null}
                        width="400px"
                    >
                        <Form ref={this.formRef} labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onFinish={this.handleSubmit} >
                            <Form.Item label="网站：" name="webSite" rules={[{ required: true, message: '必须填写' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="短信签名：" name="context" rules={[{ required: true, message: '必须填写' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 23 }} style={{ textAlign: 'right', marginBottom: 0 }}>
                                <Button type="primary" htmlType="submit"> 确定 </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Modal
                        forceRender
                        title="查看签名"
                        centered
                        visible={this.state.visible2}
                        footer={null}
                        onCancel={this.handleCancel}
                        width="400px"
                    >
                        <Spin spinning={this.state.loading1}>
                            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onFinish={this.handleSubmit}
                                initialValues={{ 'context': this.state.con.context, 'webSite': this.state.con.webSite }}>
                                <Form.Item label="网站：" name="webSite" rules={[{ required: true, message: '必须填写' }]}>
                                    <Input disabled />
                                </Form.Item>
                                <Form.Item label="短信签名：" name="context" rules={[{ required: true, message: '必须填写' }]}>
                                    <Input disabled />
                                </Form.Item>
                            </Form>
                        </Spin>
                    </Modal>
                </div>
            </Spin>
        );
    }
}
class Tab2 extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false,
            loading1: false,
            list_data: { pageSize: 20, pageNum: 1 },
            filter: { pageSize: 20, pageNum: 1 },
            con: {}
        }
    }

    componentWillMount = () => {
        this.sms_template_list(this.state.filter);
    }
    //模板列表
    sms_template_list = async (filter) => {
        this.setState({ loading: true })
        let res = await api.sms_template_list(filter);
        // console.log(res)
        if (res.code === 200) {
            this.setState({ list_data: res.dataMap })
        } else {
            message.error(res.message);
        }
        this.setState({ loading: false })
    }


    showModal = () => {
        this.setState({ visible: true, })
    }
    handleOk = async (values) => {
        this.setState({ loading1: true })
        let val = {};
        if (this.state.con.id) {
            val = Object.assign(this.formRef.current.getFieldsValue(), { id: this.state.con.id })
        } else {
            val = values
        }
        let res = await api.sms_template_post(val);
        // console.log(res)
        if (res.code === 200) {
            this.sms_template_list(this.state.filter);
            if (this.state.con.id) {
                message.success("修改成功")
            } else {
                message.success("新增成功")
            }
            this.handleCancel()
        } else {
            message.error(res.message)
        }
        this.setState({ loading1: false })
    }

    showModal1 = (obj) => {
        this.setState({ visible1: true, con: obj })
        this.formRef.current.setFieldsValue({
            context: obj.smsContext,
        });
    }
    handleCancel = () => {
        this.setState({ visible: false, visible1: false })
    }
    sms_template_delete = async (id) => {
        this.setState({ loading: true })
        let res = await api.sms_template_delete(id);
        if (res.code === 200) {
            message.success("删除成功")
            this.sms_template_list(this.state.filter)
        } else {
            message.error(res.message)
        }
        this.setState({ loading: false })
    }
    showConfirm2 = (d) => {
        let This = this
        confirm({
            title: '您是否确认要删除该模板:',
            content: d.smsContext,
            onOk() {
                This.sms_template_delete(d.id)
            },
            onCancel() { },
            okText: '确定',
            cancelText: '取消'
        });
    }
    showConfirm3 = (d) => {
        confirm({
            title: '短信模板内容:',
            content: d.smsContext,
            onOk() {
            },
            onCancel() { },
            okText: '确定',
            cancelText: '取消'
        });
    }
    pagechange = (pageNum, pageSize) => {
        this.setState({ filter: { pageNum, pageSize } });
        this.sms_template_list({ pageNum, pageSize });
    }
    render() {
        const columns = [
            {
                title: '短信模板类型',
                key: 'key',
                width: 150,
                render: index => <span>{
                    index.userId === -1 ? (<Tag color="#f50">公共</Tag>) : (<Tag color="#108ee9">自己</Tag>)
                }</span>,
            },
            {
                title: '短信模板ID',
                dataIndex: 'id',
                key: 'id',
                width: 150,
                render: id => <span>{id}</span>,
            },
            {
                title: '短信内容',
                dataIndex: 'smsContext',
                key: 'smsContext',

                render: smsContext => <span>{smsContext}</span>,
            },

            {
                title: '模板状态',
                dataIndex: 'state',
                key: 'state',
                width: 200,
                render: state => <span>{
                    state === 0 ?
                        (<span style={{ color: 'orange' }}>未审核</span>)
                        : state === 1 ?
                            (<span style={{ color: 'green' }}>审核通过</span>)
                            : (<span style={{ color: 'red' }}>审核未通过</span>)}
                </span>,
            },
            {
                title: '说明',
                dataIndex: 'reason',
                key: 'reason',
                render: (reason) => {
                    return <span>{reason}</span>
                },
            },
            {
                title: '创建时间',
                dataIndex: 'creatTime',
                key: 'creatTime',
                width: 200,
                render: (creatTime) => {
                    return <span>{fun.timeTrans(creatTime)}</span>
                },
            },
            {
                title: '操作',
                key: 'key',
                width: 200,
                render: (index) => {
                    return <span>
                        {
                            index.userId !== -1 ? (<span>
                                <Button type="link" onClick={this.showConfirm2.bind(this, index)}>删除</Button>
                                {
                                    index.state !== 1 ? (<Button type="link" onClick={this.showModal1.bind(this, index)}>编辑</Button>)
                                        : (<Button type="link" onClick={this.showConfirm3.bind(this, index)}>查看</Button>)
                                } </span>) : ''
                        }

                    </span>
                },
            },
        ];

        return (
            <div>
                <Spin spinning={this.state.loading}>
                    {/* <Button type="primary" onClick={this.showModal}>新增模板</Button> */}
                    <div className="" style={{ marginTop: '15px' }}>
                        <Table
                            rowKey={record => record.id}
                            columns={columns}
                            dataSource={this.state.list_data.records}
                            pagination={{
                                onChange: this.pagechange,
                                defaultCurrent: 1,
                                pageSize: this.state.list_data.pageSize,
                                pageNo: this.state.list_data.pageNo,
                                total: this.state.list_data.totalRecodes
                            }}
                        />
                    </div>
                </Spin>
                <Modal
                    forceRender
                    title="新增模板"
                    centered
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                    width="400px"
                >
                    <Spin spinning={this.state.loading1}>
                        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onFinish={this.handleOk}>
                            <Form.Item label="模板内容：" name="context" rules={[{ required: true, message: '必须填写' }]} help="变量请使用{s数字}">
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 23 }} style={{ textAlign: 'right', marginBottom: 0 }}>
                                <Button type="primary" htmlType="submit"> 确定 </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Modal>

                <Modal
                    forceRender
                    title="编辑签名"
                    centered
                    visible={this.state.visible1}
                    onCancel={this.handleCancel}
                    footer={null}
                    width="400px"
                >
                    <Form ref={this.formRef} labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onFinish={this.handleOk}
                    >
                        <Form.Item label="模板内容：" name="context" rules={[{ required: true, message: '必须填写' }]} extra="变量请使用{s数字}">
                            <TextArea rows={4} />
                        </Form.Item>
                    </Form>
                </Modal>


            </div>
        );
    }
}
class Tab3 extends React.Component {
    state = {
        loading: false,
        list_data: { pageSize: 5, pageNum: 1 },
        filter: { pageSize: 5, pageNum: 1 },
    }
    componentWillMount = () => {
        this.getSendRecord(this.state.filter);
    }
    getSendRecord = async (filter) => {
        this.setState({ loading: true })
        let res = await api.getSendRecord(filter);
        // console.log(res)
        if (res.code === 200) {
            this.setState({ list_data: res.dataMap })
        } else {
            message.error(res.message);
        }
        this.setState({ loading: false })
    }

    pagechange = (pageNum, pageSize) => {
        this.setState({ filter: { pageNum, pageSize } });
        this.getSendRecord({ pageNum, pageSize });
    }
    render() {
        const columns = [
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile',
                width: 250,
                render: mobile => <span>{mobile}</span>,
            },
            {
                title: '短信内容',
                dataIndex: 'context',
                key: 'context',
                render: context => <span>{context}</span>,
            },

            {
                title: '发送状态',
                dataIndex: 'state',
                key: 'state',
                width: 200,
                render: state => <span>{
                    state === 0 ?
                        (<span style={{ color: 'green' }}>发送成功</span>)
                        : (<span style={{ color: 'red' }}>发送失败</span>)}
                </span>,
            },
            {
                title: '发送时间',
                dataIndex: 'creatTime',
                key: 'creatTime',
                width: 200,
                render: (creatTime) => {
                    return <span>{fun.timeTrans(creatTime)}</span>
                },
            }
        ];

        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <div className="">
                        <Table
                            rowKey={record => record.id}
                            columns={columns}
                            dataSource={this.state.list_data.records}
                            pagination={{
                                onChange: this.pagechange,
                                defaultCurrent: 1,
                                pageSize: this.state.list_data.pageSize,
                                pageNo: this.state.list_data.pageNo,
                                total: this.state.list_data.totalRecodes
                            }}
                        />
                    </div>
                </Spin>

            </div>
        );
    }
}
const { RangePicker } = DatePicker;
class Tab4 extends React.Component {
    state = {
        loading: false,
        value: [],
        dv: [],
        startTime: "",
        endTime: "",
        yuliang: 0
    }
    componentWillMount = () => {
        this.setState({ loading: true })
        this.getthisdate(-7);
        // this.getById()
    }
    getthisdate = (num) => {
        var date1 = new Date();
        //今天时间
        var theDate = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
        var date2 = new Date(date1);
        date2.setDate(date1.getDate() + num);
        //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
        var theDate1 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
        this.setState({ value: [moment(theDate1, 'YYYY-MM-DD'), moment(theDate, 'YYYY-MM-DD')], startTime: theDate1, endTime: theDate });
        this.getUserData({ startTime: theDate1, endTime: theDate });
    }
    // getById = async () => {
    //     let res = await api.getById();
    //     // console.log(res)
    //     if (res.code === 200) {
    //         this.setState({ yuliang: res.dataMap })
    //         this.setState({ loading: false })
    //     } else {
    //         message.error(res.message)
    //         this.setState({ loading: false })
    //     }
    // }
    getUserData = async (data) => {
        let res = await api.getUserData(data);
        // console.log(res)
        if (res.code === 200) {
            // this.setState({ dv: res.dataMap })
            this.setdata(res.dataMap)
            this.setState({ loading: false,yuliang: res.dataMap[0] ? res.dataMap[0].reduceTotal : 0})
        } else {
            message.error(res.message)
            this.setState({ loading: false })
        }
    }

    handleChange = (date, dateString) => {
        // console.log(date, dateString)
        this.setState({ startTime: dateString[0], endTime: dateString[1] });
    };

    handleSubmit = e => {
        this.setState({ loading: true })
        this.getUserData({ startTime: this.state.startTime, endTime: this.state.endTime })
    };
    setdata = (data) => {
        // // 数据源
        if (!Array.isArray(data)) {
            return false
        }
        data = data.reverse();
        data.map((item, index) => {
            if (data[index].data) {
                let str = item.data;
                data[index]['listdate'] = str.slice(0, 7) + str.slice(7, 10) + ' ';
            } else {
                data[index]['listdate'] = item.month;
            }

        })
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ['发送消息'],
            // 展开字段集
            key: "type",
            // key字段
            value: "value" // value字段
        });
        this.setState({ dv })
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 5 },
                lg: { span: 2 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        // 定义度量
        // let chartIns = null;
        // const getG2Instance = (chart) => {
        //     let chartIns = chart;
        // };


        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <div style={{ margin: '15px 0 ', background: '#dddddd26', padding: '20px' }}>
                        <Form {...formItemLayout} onFinish={this.handleSubmit} initialValues={{
                            'date1':  this.state.value ,
                        }}>
                            <Form.Item label='搜索时间' name="date1">
                                <RangePicker
                                    placeholder={['开始时间', '结束时间']}
                                    format="YYYY-MM-DD"
                                    onChange={this.handleChange}
                                    locale={locale}
                                    ranges={{
                                        '今天': [moment(), moment()],
                                        '一周': [moment().startOf('week'), moment().endOf('week')],
                                        '一个月': [moment().startOf('month'), moment().endOf('month')],
                                        // '一季度': [moment().startOf('quarter'), moment().endOf('quarter')],
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    xs: { span: 24, offset: 0 },
                                    sm: { span: 8, offset: 8 },
                                    md: { span: 5, offset: 5 },
                                    lg: { span: 2, offset: 2 }
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    查看
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Card width="100%">
                        <p className="pb-3">短信余量：<span className="fs-20 text-danger">{this.state.yuliang}</span></p>
                        <p>短信数量变化</p>

                        <div id="container">
                            <Chart height={400} forceFit={true} data={this.state.dv} padding="auto"
                            // onGetG2Instance={getG2Instance}
                            >
                                <Legend
                                    custom
                                    allowAllCanceled
                                    items={[
                                        { value: '成功发送', marker: { symbol: 'square', fill: '#41a2fc', radius: 5 } },
                                    ]}
                                />
                                <Axis name="listdate" />
                                <Axis name="total" position={'left'} />
                                <Tooltip />
                                <Geom
                                    type="line"
                                    position="listdate*total"
                                    size={4}

                                    color={['type', (total) => {
                                        if (total === 'send') {
                                            return '#3182bd';
                                        }
                                    }]}
                                />
                            </Chart>
                        </div>
                    </Card>
                </Spin>
            </div>
        );
    }
}
