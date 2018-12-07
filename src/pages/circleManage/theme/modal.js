import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

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
            label="主题："
          >
            {getFieldDecorator('theme', {
              rules: [{ required: true, message: '请输入主题!' }],
            })(
              <Input placeholder="请输入主题" />
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