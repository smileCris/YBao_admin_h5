import { Component } from 'react'
import { connect } from 'dva'
import { Card, Table, Divider, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import styles from './index.less'
import MyModal from './modal'

const confirm = Modal.confirm

class UserManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      record: ''
    }
  }

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
      title: record.status == 0 ? '确认启用该账号吗?' : '确认停用该账号吗?',
      content: record.status == 0 ? '启用的账号可以登录系统。' : '停用账号后，可再次启用。',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch({
          type: 'sysuser/stop',
          payload: {
            id: record.id,
            status: record.status == 0 ? 1 : 0
          }
        })
      },
      onCancel() { }
    })
  }

  render() {
    const { sysuser: { listData } } = this.props
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      render: (text, record, index) => `${index + 1}`,
    }, {
      title: '用户名',
      dataIndex: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '住址',
      dataIndex: 'address',
    }, {
      title: '创建时间',
      dataIndex: 'ctime',
    }, {
      title: 'Action',
      dataIndex: 'operation',
      render: (text, record) => (
        <span>
          <a onClick={() => this.showModal(record)}>详情</a>
          <Divider type="vertical" />
          <a onClick={() => this.showConfirm(record)}>{record.status === 1 ? '停用' : record.status === 0 ? '启用' : ''}</a>
        </span>
      ),
    }]
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
            columns={columns}
            dataSource={listData}
            rowKey={record => record.id}
            rowClassName={(record, index) => record.status === 0 ? styles.unabletr : ''}
          />
        </Card>
        <MyModal
          title="用户详情"
          visible={this.state.visible}
          record={this.state.record}
          onCancel={this.handleCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default connect(({ sysuser }) => ({ sysuser }))(UserManage)