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
          <Col span={5} offset={3}>动态详情：</Col>
          <Col span={12}>{record.detail}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>所属主题：</Col>
          <Col span={12}>{record.theme}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>发布用户：</Col>
          <Col span={12}>{record.accountName}</Col>
        </Row>
        <Row style={styles.font}>
          <Col span={5} offset={3}>发布时间：</Col>
          <Col span={12}>{record.ctime}</Col>
        </Row>
      </Modal>
    )
  }
}

export default MyModal