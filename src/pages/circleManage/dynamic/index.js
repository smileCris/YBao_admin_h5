import { Component } from 'react'
import { connect } from 'dva'
import { Card, Table, Divider, Button, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

class Dynamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      record: ''
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
    dataIndex: 'accountName',
  }, {
    title: '发布时间',
    dataIndex: 'ctime',
  }, {
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => (
      <span>
        <a onClick={() => this.showModal(record)}>详情</a>
        <Divider type="vertical" />
        <a onClick={() => this.showConfirm(record)}>删除</a>
      </span>
    ),
  }]

  showModal = (record) => {
    this.setState({
      visible: true,
      record: record
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  showConfirm = (record) => {
    const { dispatch } = this.props
    confirm({
      title: '你确定要删除这条动态吗？',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch({
          type: 'circle/deleteDynamic',
          payload: {
            id: record.id
          }
        })
      },
      onCancel() { }
    })
  }

  render() {
    const { circle: { dynamicData } } = this.props
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
            dataSource={dynamicData}
            rowKey={record => record.id}
          />
        </Card>
        <MyModal
          title="动态详情"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          record={this.state.record}
        />
      </PageHeaderWrapper>
    )
  }
}

export default connect(({ circle }) => ({ circle }))(Dynamic)