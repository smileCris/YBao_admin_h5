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
      visible
    } = this.props

    return (
      <Modal
        title={title}
        visible={visible}
        footer={null}
        onCancel={this.handleCancel}
      >
        <Row>
          <Col span={5} offset={3} style={styles.font}>所属主题：</Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={5} offset={3} style={styles.font}>发布用户：</Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={5} offset={3} style={styles.font}>发布时间：</Col>
          <Col span={12}></Col>
        </Row>
      </Modal>
    )
  }
}

export default MyModal