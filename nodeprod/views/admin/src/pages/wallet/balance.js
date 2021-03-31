import React from 'react';
import './wallet.less';
import cookie from 'react-cookies';
import api from '../../api/index';
import { Card, Button, Select, Modal, Form, Input } from 'antd';
import { base } from '../../api/config.js';


class Balance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      freeze: 0,
      coupon: 0,
      rechargevisible: false,
      nowOrderNum: '',
      total_amount: 0,
    }
  }
  componentWillMount() {
    this.getWalletInfo()
  }
  //获取钱包信息
  getWalletInfo = async () => {
    let param = {
      // userid: cookie.load('userinfo').id
    }, res = await api.getWalletInfo(param);

    console.log(res)

    if (res && res.code === 200) {
      this.setState({
        balance: res.dataMap.money.toFixed(2),
      })
    }
  }
  /**
   * 创建商品订单
   */
  createOrderInfo = async (value) => {
    console.log(value)
    let param = {
      'authUserOrder': {
        "totalPrice": Number(value.money)
      },
      'flag': 1,
    }, res = await api.createOrderInfo(param);
    // console.log(res)
    if (res && res.code === 200) {
      this.setState({
        nowOrderNum: res.dataMap,
        total_amount: value.money,
      }, () => {
        this.getProInfo()
      })
    }
  }
  /**
   * 获取授权产品信息 价格|二维码
   */
  getProInfo = () => {
    //flag 默认固定为1   1 | 2 | 3
    let params = {
      out_trade_no: this.state.nowOrderNum,
      total_amount: this.state.total_amount,
      subject: '账号充值',
      flag: 1,
    }

    window.open(`${base}/aliPay/pay?out_trade_no=${params.out_trade_no}`)
  }

  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const layout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <div className="balance">
        <div className="balance_container">
          <div className="balance_content">
            <Card title="账户总览" className="account_overview" >
              <div className="account_header">
                <div className="mr-30px"><span >可用余额</span><span className="account_money">￥{this.state.balance}</span></div>
                <Button type="primary" className="mr-20px px-30px" onClick={() => { this.setState({ rechargevisible: true }) }}>充值</Button>
                {/* <Button className="px-30px">提现</Button> */}
              </div>
            </Card>
          </div>
        </div>

        <Modal
          title="购买"
          visible={this.state.rechargevisible}
          onOk={this.handleOk}
          onCancel={() => { this.setState({ rechargevisible: false }) }}
          footer={null}
        >
          <Form {...layout} onFinish={this.createOrderInfo}>
            <Form.Item
              label="充值金额"
              name="money"
            >
              <Input addonAfter="元" style={{ width: '80%' }} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">立即充值</Button>
            </Form.Item>
              
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Balance;