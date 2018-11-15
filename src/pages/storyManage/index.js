import { Component } from 'react';
import { Card, Table, Divider, Button, Avatar } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [{
  title: '故事名',
  dataIndex: 'name',
}, {
  title: '文件',
  dataIndex: 'file',
}, {
  title: '封面',
  dataIndex: 'cover',
}, {
  title: 'Action',
  dataIndex: 'operation',
  render: (text, record) => (
    <span>
      <a href="javascript:;">编辑</a>
      <Divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
  ),
}];

const data = [{
  key: 1,
  name: '成都',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3">成都</a>,
  cover: <Avatar shape="square" size={64} src="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.jpg" />,
}, {
  key: 2,
  name: '我要你',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3">我要你</a>,
  cover: <Avatar shape="square" size={64} src="http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg" />,
}, {
  key: 3,
  name: '魔鬼中的天使',
  file: <a href="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3">魔鬼中的天使</a>,
  cover: <Avatar shape="square" size={64} src="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.jpg" />,
}]

class StoryManage extends Component {
  constructor(props) {
    super(props)
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
            <Button type="primary">添加</Button>
          }
        >
          <Table
            columns={columns}
            dataSource={data}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default StoryManage