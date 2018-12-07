import { Component } from 'react'
import { Card, Table, Divider, Button, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    theme: `主题 ${i}`,
    username: `用户 ${i}`,
    ctime: `发布时间 no. ${i}`,
  })
}

class Dynamic extends Component {
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
    title: '所属主题',
    dataIndex: 'theme',
  }, {
    title: '发布用户',
    dataIndex: 'username',
  }, {
    title: '发布时间',
    dataIndex: 'ctime',
  }, {
    title: '操作',
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
      title: '你确定要删除这条动态吗？',
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
        title="动态管理"
        content="对妈妈圈动态的查询，删除"
      >
        <Card
          bordered={false}
          title="动态管理"
        >
          <Table
            columns={this.columns}
            dataSource={data}
          />
        </Card>
        <MyModal
          title="动态详情"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default Dynamic