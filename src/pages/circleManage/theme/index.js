import { Component } from 'react'
import { connect } from 'dva'
import { Card, Table, Divider, Button, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

class Theme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addVisible: false,
      detailVisible: false,
      record: ''
    }
  }

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

  showDetailModal = (record) => {
    this.setState({
      detailVisible: true,
      record: record
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

  showConfirm = (record) => {
    const { dispatch } = this.props
    confirm({
      title: '你确定要删除该主题吗?',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch({
          type: 'circle/deleteTheme',
          payload: {
            id: record.id
          }
        })
      },
      onCancel() { },
    })
  }

  columns = [{
    title: '序号',
    dataIndex: 'id',
    render: (text, record, index) => `${index + 1}`,
  }, {
    title: '主题',
    dataIndex: 'theme',
  }, {
    title: '发布账号',
    dataIndex: 'accountName',
  }, {
    title: '创建时间',
    dataIndex: 'ctime',
  }, {
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => (
      <span>
        <a onClick={() => this.showDetailModal(record)}>编辑</a>
        <Divider type="vertical" />
        <a onClick={() => this.showConfirm(record)}>删除</a>
      </span>
    ),
  }]

  render() {
    const { circle: { themeData } } = this.props
    return (
      <PageHeaderWrapper
        title="话题管理"
        content="对妈妈圈话题的发布，查询，删除，修改"
      >
        <Card
          bordered={false}
          title="话题管理"
          extra={
            <Button type="primary" onClick={this.showAddModal}>添加</Button>
          }
        >
          <Table
            columns={this.columns}
            dataSource={themeData}
            rowKey={record => record.id}
          />
        </Card>
        <MyModal
          title="添加话题"
          visible={this.state.addVisible}
          onOk={this.addSure}
          onCancel={this.addCancel}
        />
        <MyModal
          title="话题详情"
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          record={this.state.record}
          onCancel={this.detailCancel}
          detail={true}
        />
      </PageHeaderWrapper>
    )
  }
}

export default connect(({ circle }) => ({ circle }))(Theme)