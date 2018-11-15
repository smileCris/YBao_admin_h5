import { Component } from 'react';
import { Card, Table, Divider, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [{
  title: '主题',
  dataIndex: 'theme',
}, {
  title: '发布账号',
  dataIndex: 'account',
}, {
  title: '创建时间',
  dataIndex: 'ctime',
}, {
  title: '操作',
  dataIndex: 'operation',
  render: (text, record) => (
    <span>
      <a href="javascript:;">编辑</a>
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
    account: `账号 ${i}`,
    ctime: `创建时间 no. ${i}`,
  });
}

class Theme extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PageHeaderWrapper
        title="话题管理"
        content="对妈妈圈话题的发布，查询，删除，修改"
      >
        <Card
          bordered={false}
          title="话题管理"
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

export default Theme