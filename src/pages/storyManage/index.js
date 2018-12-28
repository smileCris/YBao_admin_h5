import { Component } from 'react'
import { Card, Table, Divider, Button, Avatar, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'
import { connect } from 'dva'

const confirm = Modal.confirm
const apiPrefix = 'http://127.0.0.1:3000'

class StoryManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addVisible: false,
      detailVisible: false,
      recordDetail: ''
    }
  }

  columns = [{
    title: '序号',
    dataIndex: 'id',
    width: 80,
    render: (text, record, index) => `${index + 1}`,
  }, {
    title: '故事名',
    dataIndex: 'name',
    width: 120,
  }, {
    title: '文件',
    dataIndex: 'file',
    width: 300,
  }, {
    title: '封面',
    dataIndex: 'img',
    width: 100,
  }, {
    title: '发布时间',
    dataIndex: 'ctime',
    width: 180,
  }, {
    title: '操作',
    dataIndex: 'operation',
    width: 120,
    fixed: 'right',
    render: (text, record) => (
      <span>
        <a onClick={() => { this.showDetailModal(record) }}>编辑</a>
        <Divider type="vertical" />
        <a onClick={() => { this.showConfirm(record) }}>删除</a>
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

  showDetailModal = (record) => {
    this.setState({
      recordDetail: record,
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

  showConfirm = (record) => {
    const { dispatch } = this.props
    confirm({
      title: '你确定要删除这篇故事吗?',
      content: '删除后将不可恢复！',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        dispatch({
          type: 'story/delete',
          payload: {
            id: record.id
          }
        })
      },
      onCancel() { },
    })
  }

  render() {
    const { story: { listData } } = this.props
    const data = []
    listData.forEach(e => {
      data.push({
        id: e.id,
        name: e.name,
        file: <audio src={`${apiPrefix}/${e.file}`} controls="controls">{e.name}</audio>,
        img: <Avatar shape="square" size={64} src={`${apiPrefix}/${e.img}`} />,
        ctime: e.ctime
      })
    })
    return (
      <PageHeaderWrapper
        title="睡前故事"
        content="对睡前故事的发布，查询，删除，修改"
      >
        <Card
          bordered={false}
          title="睡前故事"
          extra={
            <Button type="primary" onClick={this.showAddModal}>添加</Button>
          }
        >
          <Table
            columns={this.columns}
            dataSource={data}
            rowKey={record => record.id}
            scroll={{ x: 1000 }}
          />
        </Card>
        <MyModal
          title="添加故事"
          visible={this.state.addVisible}
          onOk={this.addSure}
          onCancel={this.addCancel}
        />
        <MyModal
          title="故事详情"
          detail={true}
          record={this.state.recordDetail}
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          onCancel={this.detailCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default connect(({ story }) => ({ story }))(StoryManage)