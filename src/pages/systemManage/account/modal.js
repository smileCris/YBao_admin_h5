import { Modal, Form, Input } from 'antd'
import { connect } from 'dva'
import GeographicView from '../component/GeographicView'

const FormItem = Form.Item

const validatorGeographic = (rule, value, callback) => {
  if (!value) {
    const info = {
      province: {
        key: '',
        label: ''
      },
      city: {
        key: '',
        label: ''
      }
    }
    value = info
  }
  const { province, city } = value
  if (!province.key) {
    callback('请选择所在的省份！')
  }
  if (!city.key) {
    callback('请选择所在的城市！')
  }
  callback()
}

class MyModal extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      } else {
        values.address = `${values.address.province.label}${values.address.city.label}`
        this.props.dispatch({
          type: 'account/add',
          payload: values
        })
        this.props.onOk()
        this.props.form.resetFields()
      }
    })
  }

  handleAddCancel = () => {
    this.props.onCancel()
    this.props.form.resetFields()
  }

  render() {
    const {
      title,
      visible,
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
            label="账号："
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input placeholder="请输入账号" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码："
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input placeholder="请输入密码" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱："
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: '请输入邮箱!' }],
            })(
              <Input placeholder="请输入邮箱" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="所在省市"
          >
            {getFieldDecorator('address', {
              rules: [
                {
                  required: true,
                  message: "请选择所在省市！",
                },
                {
                  validator: validatorGeographic,
                },
              ],
            })(<GeographicView />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default connect(({account}) => ({account}))(Form.create()(MyModal))