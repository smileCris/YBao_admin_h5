import { Modal, Form, Input } from 'antd'
import GeographicView from '../component/GeographicView'

const FormItem = Form.Item

const validatorGeographic = (rule, value, callback) => {
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
            label="账号："
          >
            {getFieldDecorator('account', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input placeholder="请输入账号" />
            )}
          </FormItem>
          {
            detail ? '' : <FormItem
              {...formItemLayout}
              label="密码："
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input placeholder="请输入密码" />
              )}
            </FormItem>
          }
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

export default Form.create()(MyModal)