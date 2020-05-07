import React from 'react';
import { Table, Button, message } from 'antd';
import api from '../../api';


class MList extends React.Component {
    state = {
        list:[],
        data:{},
        filter: { pageNum: 1, pageSize:20}
    }
    componentWillMount = () => {
        this.setState({ loading: true })
        this.getlist(this.state.filter);
    }
    getlist = async(filter)=>{
        this.setState({ loading: true })
        let res = await api.getFileUrl(filter);
        if (res.code === 200) {
            message.success('获取成功');
            this.setState({ data: res.dataMap, list:res.dataMap.records})
            this.setState({ loading: false })
        } else {
            message.error(res.message);

        }
    }
    pages=(pagen,pagesize)=>{
        this.getlist({ pageNum: pagen,pageSize:pagesize})
    }
    delete = async(id)=>{
        console.log(id)
            this.setState({ loading: true })
        let res = await api.delete(id);
        if (res.code === 200) {
            message.success('删除成功');
            this.getlist(this.state.filter);
            this.setState({ loading: false })
        } else {
            message.error(res.message);

        }
    }
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'url',
                dataIndex: 'url',
                key: 'url',
            },
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'createTime',
                key: 'createTime',
                dataIndex: 'createTime',
                render: createTime => (
                    <span>{createTime}</span>
                ),
            },
            {
                title: '操作',
                key: 'createTime',
                dataIndex: 'createTime',
                render: (createTime, index) => (
                    <span>
                        <Button className="btn" onClick={this.delete.bind(this,index.id)}>
                            删除
                    </Button>
                    </span>
                ),
            }
        ];

        return (
            <div>
                <Table rowKey={record => record.id} columns={columns} dataSource={this.state.list}
                position={{ onChange: this.pages, current: this.state.data.pageNo, total: this.state.data.totalRecodes,pageSize:this.state.filter.pageSize}}  />
            </div>
        );
    }
}
export default MList;
