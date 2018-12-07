import { Component } from 'react'
import { Card, Table, Divider, Button, Avatar, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import MyModal from './modal'

const confirm = Modal.confirm

const data = [{
  key: 1,
  name: '成都',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3">成都</a>,
  ctime: '2018-10-20',
  cover: <Avatar shape="square" size={64} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1551647393,1159936429&fm=26&gp=0.jpg" />,
}, {
  key: 2,
  name: '我要你',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3">我要你</a>,
  ctime: '2018-10-20',
  cover: <Avatar shape="square" size={64} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2953975679,280304173&fm=26&gp=0.jpg" />,
}, {
  key: 3,
  name: '魔鬼中的天使',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3">魔鬼中的天使</a>,
  ctime: '2018-10-20',
  cover: <Avatar shape="square" size={64} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3302635922,3699719560&fm=26&gp=0.jpg" />,
}, {
  key: 4,
  name: '理想',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3">理想</a>,
  ctime: '2018-10-20',
  cover: <Avatar shape="square" size={64} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3211990804,911877752&fm=26&gp=0.jpg" />,
}]

class StoryManage extends Component {
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
    title: '故事名',
    dataIndex: 'name',
  }, {
    title: '文件',
    dataIndex: 'file',
  }, {
    title: '封面',
    dataIndex: 'cover',
  }, {
    title: '发布时间',
    dataIndex: 'ctime',
  }, {
    title: 'Action',
    dataIndex: 'operation',
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
      title: '你确定要删除这篇故事吗?',
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
          visible={this.state.detailVisible}
          onOk={this.detailSure}
          onCancel={this.detailCancel}
        />
      </PageHeaderWrapper>
    )
  }
}

export default StoryManage