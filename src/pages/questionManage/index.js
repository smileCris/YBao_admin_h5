import { Component } from 'react'
import { Card, Table, Divider, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    question: `Edward King ${i}`,
    answerData: 32,
    accountId: 32,
    ctime: `London, Park Lane no. ${i}`,
  })
}

class QuestionManage extends Component {
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
    title: '问题',
    dataIndex: 'question',
  }, {
    title: '回复数据',
    dataIndex: 'answerData',
  }, {
    title: '发布账号',
    dataIndex: 'accountId',
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
      title: '你确定要删除这个问题吗？',
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
        title="育儿问答"
        content="对育儿问答的查询，删除"
      >
        <Card
          bordered={false}
          title="育儿问答"
        >
          <Table
            columns={this.columns}
            dataSource={data}
          />
        </Card>
        <MyModal
          title="问答详情"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default QuestionManage