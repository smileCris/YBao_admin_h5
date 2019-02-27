import { Modal, Row, Col } from 'antd'

const styles = {
  font: {
    lineHeight: '3em'
  }
}

class MyModal extends React.Component {
  handleCancel = () => {
    this.props.onCancel()
  }

  render() {
    const {
      title,
      visible,
      record
    } = this.props

    let data = eval('(' + record.answer + ')')  // 字符串转JSON对象
    // JSON对象转数组
    let answerInfo = []
    let index = 0
    for (let i in data) {
      let obj = {
        id: '',
        user: '',
        data: ''
      }
      obj.id = index
      obj.user = i
      obj.data = data[i]
      answerInfo.push(obj)
      index ++
    }

    return (
      <Modal
        title={title}
        visible={visible}
        footer={null}
        onCancel={this.handleCancel}
      >
        <Row style={styles.font}>
          <Col span={5} offset={3}>问题：</Col>
          <Col span={12}>{record.question}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>回复数据：</Col>
          <Col span={12}>{record.answerData}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>发布账号：</Col>
          <Col span={12}>{record.accountName}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>发布时间：</Col>
          <Col span={12}>{record.ctime}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>回复详情：</Col>
          <Col span={12}>
            {
              answerInfo.map(v => 
                <p key={v.id}>{v.user} : {v.data}</p>
              )
            }
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default MyModal