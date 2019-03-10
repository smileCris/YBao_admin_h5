import { Component } from 'react'
import { connect } from 'dva'
import { Card, Table, Divider, Modal, Button, message } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import styles from './index.less'
import MyModal from './modal'
import DetailModal from './detail'

const confirm = Modal.confirm

class Account extends Component {
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

  deleteConfirm = (record) => {
    const { dispatch } = this.props
    if (record.status === 1) {
      message.warning('已启用的账号不可删除，请先停用再删除！')
    } else {
      confirm({
        title: '你确定要删除这个账号吗？',
        content: '删除后将不可恢复！',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          dispatch({
            type: 'account/delete',
            payload: {
              id: record.id
            }
          })
        },
        onCancel() { }
      })
    }
  }

  stopConfirm = (record) => {
    const { dispatch } = this.props
    confirm({
      title: record.status === 1 ? '你确定要停用这个账号吗？' : '你确定要启用这个账号吗？',
      content: record.status === 1 ? '停用后可再次启用！' : '启用的账号可以登录系统。',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch({
          type: 'account/stop',
          payload: {
            id: record.id,
            status: record.status === 0 ? 1 : 0
          }
        })
      },
      onCancel() { }
    })
  }

  render() {
    const { account: { listData } } = this.props
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      render: (text, record, index) => `${index + 1}`,
    }, {
      title: '账号',
      dataIndex: 'username',
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
          <a onClick={() => this.showDetailModal(record)}>详情</a>
          <Divider type="vertical" />
          <a onClick={() => this.stopConfirm(record)}>{record.status === 1 ? '停用' : '启用'}</a>
          <Divider type="vertical" />
          <a onClick={() => this.deleteConfirm(record)}>删除</a>
        </span>
      ),
    }]
    return (
      <PageHeaderWrapper
        title="账号管理"
        content="对管理员账号的查看，增加，删除，禁用"
      >
        <Card
          title="账号管理"
          bordered={false}
          extra={
            <Button type="primary" onClick={this.showAddModal}>添加</Button>
          }
        >
          <Table
            columns={columns}
            dataSource={listData}
            rowKey={record => record.id}
            rowClassName={(record, index) => record.status === 0 ? styles.unabletr : ''}
          />
        </Card>
        <MyModal
          title="添加账号"
          visible={this.state.addVisible}
          onOk={this.addSure}
          onCancel={this.addCancel}
        />
        <DetailModal
          title="账号详情"
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          onCancel={this.detailCancel}
          record={this.state.record}
        />
      </PageHeaderWrapper>
    )
  }
}

export default connect(({ account }) => ({ account }))(Account)