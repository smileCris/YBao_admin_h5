import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item
const TextArea = Input.TextArea

class MyModal extends React.Component {
  handleSubmit = () => {
    this.props.onOk()
  }

  handleAddCancel = () => {
    this.props.onCancel()
  }

  render() {
    const {
      title,
      visible,
      detail,
      form: { getFieldDecorator }
    } = this.props

    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15,
        offset: 1
      }
    }

    return (
      <Modal
        title={title}
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={this.handleAddCancel}
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="内容："
          >
            {getFieldDecorator('context', {
              rules: [{ required: true, message: '请输入通知内容!' }],
            })(
              <TextArea placeholder="请输入通知内容" />
            )}
          </FormItem>
          {
            detail ?
              <FormItem
                {...formItemLayout}
                label="发布账号："
              >
                <p></p>
              </FormItem> : ''
          }
          {
            detail ?
              <FormItem
                {...formItemLayout}
                label="创建时间："
              >
                <p></p>
              </FormItem> : ''
          }
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(MyModal)