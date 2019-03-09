import { Modal, Form, Input } from 'antd'
import { connect } from 'dva'

const FormItem = Form.Item
const TextArea = Input.TextArea

class MyModal extends React.Component {
  // 新增
  handleCreate = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.accountName = localStorage.getItem('accountName')
      this.props.dispatch({
        type: 'notice/add',
        payload: values
      })
      this.props.form.resetFields()
    })
    this.props.onOk()
  }

  // 编辑
  handleSubmit = (id) => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.id = id
      this.props.dispatch({
        type: 'notice/edit',
        payload: values
      })
      this.props.form.resetFields()
    })
    this.props.onOk()
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  render() {
    const {
      title,
      visible,
      detail,
      record,
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
        onOk={detail ? () => this.handleSubmit(record.id) : this.handleCreate}
        onCancel={this.handleCancel}
      >
        <Form onSubmit={detail ? this.handleSubmit : this.handleCreate}>
          <FormItem
            {...formItemLayout}
            label="内容："
          >
            {getFieldDecorator('content', {
              initialValue: detail && record ? record.content : null,
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
                <p>{record ? record.accountName : null}</p>
              </FormItem> : ''
          }
          {
            detail ?
              <FormItem
                {...formItemLayout}
                label="创建时间："
              >
                <p>{record ? record.ctime : null}</p>
              </FormItem> : ''
          }
        </Form>
      </Modal>
    )
  }
}

export default connect(({notice}) => ({notice}))(Form.create()(MyModal))