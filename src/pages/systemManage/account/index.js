import { Component } from 'react'
import { Card, Table, Divider, Modal, Button } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addVisible: false,
      detailVisible: false
    }
  }

  columns = [{
    title: '序号',
    dataIndex: 'id',
    render: (text, record, index) => `${index + 1}`,
  }, {
    title: '账号',
    dataIndex: 'name',
  }, {
    title: '邮箱',
    dataIndex: 'email',
  }, {
    title: '地址',
    dataIndex: 'address',
  }, {
    title: 'Action',
    dataIndex: 'operation',
    render: (text, record) => (
      <span>
        <a onClick={this.showDetailModal}>详情</a>
        <Divider type="vertical" />
        <a onClick={this.stopConfirm}>停用</a>
        <Divider type="vertical" />
        <a onClick={this.deleteConfirm}>删除</a>
      </span>
    ),
  }]

  showAddModal = () => {
    this.setState({
      addVisible: true,
    })
  }

  addCancel = () => {
    this.setState({
      addVisible: false,
    })
  }

  addSure = () => {
    this.setState({
      addVisible: false,
    })
  }

  showDetailModal = () => {
    this.setState({
      detailVisible: true,
    })
  }

  detailCancel = () => {
    this.setState({
      detailVisible: false,
    })
  }

  detailSure = () => {
    this.setState({
      detailVisible: false,
    })
  }

  deleteConfirm = () => {
    confirm({
      title: '你确定要删除这个账号吗？',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() { },
      onCancel() { }
    })
  }

  stopConfirm = () => {
    confirm({
      title: '你确定要停用这个账号吗？',
      content: '停用后可再次启用！',
      okText: '确定',
      cancelText: '取消',
      onOk() { },
      onCancel() { }
    })
  }

  render() {
    return (
      <PageHeaderWrapper
        title="账号管理"
        content="对管理员账号的增加，删除，禁用"
      >
        <Card
          title="账号管理"
          bordered={false}
          extra={
            <Button type="primary" onClick={this.showAddModal}>添加</Button>
          }
        >
          <Table
            columns={this.columns}
            dataSource={data}
          />
        </Card>
        <MyModal
          title="添加账号"
          visible={this.state.addVisible}
          onOk={this.addSure}
          onCancel={this.addCancel}
        />
        <MyModal
          title="账号详情"
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          onCancel={this.detailCancel}
          detail={true}
        />
      </PageHeaderWrapper>
    )
  }
}

export default Account