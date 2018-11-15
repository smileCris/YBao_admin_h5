import { Component } from 'react';
import { Card, Table, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}, {
  title: 'Action',
  dataIndex: 'operation',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class QuestionManage extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return(
      <PageHeaderWrapper
        title="育儿问答"
        content="对育儿问答的查询，删除"
      >
        <Card bordered={false}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default QuestionManage