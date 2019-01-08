import { Modal, Form, Input } from 'antd'
import { connect } from 'dva'

const FormItem = Form.Item

class MyModal extends React.Component {
  // 新增
  handleCreate = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.accountName = localStorage.getItem('accountName')
      this.props.dispatch({
        type: 'circle/addTheme',
        payload: values
      })
      this.props.form.resetFields()
    })
    this.props.onOk()
  }

  // 编辑
  handleSubmit = (id) => {
    this.props.form.validateFields((err, values) => {
      values.id = id
      this.props.dispatch({
        type: 'circle/editTheme',
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
        onOk={detail ? () => { this.handleSubmit(record.id) } : this.handleCreate}
        onCancel={this.handleCancel}
      >
        <Form onSubmit={detail ? this.handleSubmit : this.handleCreate}>
          <FormItem
            {...formItemLayout}
            label="主题："
          >
            {getFieldDecorator('theme', {
              initialValue: detail && record ? record.theme : null,
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
                <p>{record.accountName}</p>
              </FormItem> : ''
          }
          {
            detail ?
              <FormItem
                {...formItemLayout}
                label="创建时间："
              >
                <p>{record.ctime}</p>
              </FormItem> : ''
          }
        </Form>
      </Modal>
    )
  }
}

export default connect(({ circle }) => ({ circle }))(Form.create()(MyModal))