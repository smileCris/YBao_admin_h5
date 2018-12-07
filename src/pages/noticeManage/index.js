import { Component } from 'react'
import { Card, Table, Divider, Button, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    accountName: `Edward King ${i}`,
    context: `London, Park Lane no. ${i}`,
  })
}

class NoticeManage extends Component {
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
    title: '通知内容',
    dataIndex: 'context',
  }, {
    title: '发布者',
    dataIndex: 'accountName',
  }, {
    title: 'Action',
    dataIndex: 'operation',
    width: 150,
    fixed: 'right',
    render: (text, record) => (
      <span>
        <a onClick={this.showDetailModal}>编辑</a>
        <Divider type="vertical" />
        <a onClick={this.showConfirm}>删除</a>
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

  showConfirm = () => {
    confirm({
      title: '你确定要删除这条通知吗?',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() { },
    })
  }

  render() {
    return (
      <PageHeaderWrapper
        title="系统通知"
        content="对系统通知的发布，查询，删除，修改"
      >
        <Card
          bordered={false}
          title="系统通知"
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
          title="发布通知"
          visible={this.state.addVisible}
          onOk={this.addSure}
          onCancel={this.addCancel}
        />
        <MyModal
          title="通知详情"
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          onCancel={this.detailCancel}
          detail={true}
        />
      </PageHeaderWrapper>
    )
  }
}

export default NoticeManage