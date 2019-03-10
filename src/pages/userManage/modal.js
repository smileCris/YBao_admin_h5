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

    return (
      <Modal
        title={title}
        visible={visible}
        footer={null}
        onCancel={this.handleCancel}
      >
        <Row style={styles.font}>
          <Col span={5} offset={3}>用户名：</Col>
          <Col span={12}>{record.username}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>状态：</Col>
          <Col span={12}>{record.status === 1 ? '启用' : '停用'}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>邮箱：</Col>
          <Col span={12}>{record.email}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>住址：</Col>
          <Col span={12}>{record.address}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>创建时间：</Col>
          <Col span={12}>{record.ctime}</Col>
        </Row>
      </Modal>
    )
  }
}

export default MyModal