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
          <Col span={5} offset={3} style={styles.font}>用户名：</Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={5} offset={3} style={styles.font}>邮箱：</Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={5} offset={3} style={styles.font}>创建时间：</Col>
          <Col span={12}></Col>
        </Row>
        <Row>
          <Col span={5} offset={3} style={styles.font}>最近登录时间：</Col>
          <Col span={12}></Col>
        </Row>
      </Modal>
    )
  }
}

export default MyModal