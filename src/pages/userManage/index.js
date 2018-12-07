import { Component } from 'react'
import { Card, Table, Divider, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: `E${i}`,
    ctime: 32,
    utime: `London, Park Lane no. ${i}`,
  })
}

class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  columns = [{
    title: '序号',
    dataIndex: 'id',
    render: (text, record, index) => `${index + 1}`,
  }, {
    title: '用户名',
    dataIndex: 'name',
  }, {
    title: '邮箱',
    dataIndex: 'email',
  }, {
    title: '创建时间',
    dataIndex: 'ctime',
  }, {
    title: '最近登录时间',
    dataIndex: 'utime',
  }, {
    title: 'Action',
    dataIndex: 'operation',
    render: (text, record) => (
      <span>
        <a onClick={this.showModal}>详情</a>
        <Divider type="vertical" />
        <a onClick={this.showConfirm}>删除</a>
      </span>
    ),
  }]

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  showConfirm = () => {
    confirm({
      title: '你确定要删除这个用户吗？',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() { },
      onCancel() { }
    })
  }

  render() {
    return (
      <PageHeaderWrapper
        title="用户管理"
        content="对app用户的查询，禁用"
      >
        <Card
          bordered={false}
          title="用户管理"
        >
          <Table
            columns={this.columns}
            dataSource={data}
          />
        </Card>
        <MyModal
          title="用户详情"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default UserManage