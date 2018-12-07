import { Component } from 'react'
import { Form, Input, Upload, Select, Button, Card, Icon, Modal } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import GeographicView from '../component/GeographicView'

const FormItem = Form.Item
const { Option } = Select
const styles = {
  baseView: {
    width: '60%',
    minWidth: 400,
    padding: '40px 5%'
  },
  tlehed: {
    color: '#333',
    marginBottom: '30px'
  }
}

const userData = {
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  email: '102932222@qq.com',
  nickname: 'test',
  loginTime: '2017-09-25 15:00:00',
}

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

@Form.create()
class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        status: 'done',
        url: userData.avatar,
      }]
    }
  }

  handleAvatarCancel = () => this.setState({ previewVisible: false })

  handleAvatarPreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleAvatarChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const {
      form: { getFieldDecorator },
    } = this.props

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    const Avatar = (
      <div className="clearfix" style={{ marginBottom: 10 }}>
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handleAvatarPreview}
          onChange={this.handleAvatarChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleAvatarCancel}>
          <img alt="example" style={styles.img} src={previewImage} />
        </Modal>
      </div>
    )

    return (
      <PageHeaderWrapper
        title="个人中心"
        content="个人信息修改"
      >
        <Card
          bordered={false}
          title="基本设置"
        >
          <div style={styles.baseView}>
            <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
              <FormItem label="头像">
                {Avatar}
              </FormItem>
              <FormItem label="邮箱">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: "请输入您的邮箱!",
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem label="昵称">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: "请输入您的昵称!",
                    },
                  ],
                })(<Input />)}
              </FormItem>
              <FormItem label="所在省市">
                {getFieldDecorator('geographic', {
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
              <p style={styles.tlehed}>
                {`最近登录时间：2020-10-10`}
              </p>
              <Button type="primary">
                更新基本信息
                </Button>
            </Form>
          </div>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Personal