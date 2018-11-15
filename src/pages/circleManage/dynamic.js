import { Component } from 'react';
import { Card, Table, Divider, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [{
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
      <a href="javascript:;">详情</a>
      <Divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
  ),
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    theme: `主题 ${i}`,
    username: `用户 ${i}`,
    ctime: `发布时间 no. ${i}`,
  });
}

class Dynamic extends Component {
  constructor(props) {
    super(props)
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

export default Dynamic