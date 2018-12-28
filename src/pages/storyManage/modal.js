import { Modal, Button, Form, Input, Upload, Icon, message } from 'antd'
import { connect } from 'dva'

const FormItem = Form.Item
const Dragger = Upload.Dragger

class MyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      storyFile: [],
      imgFile: []
    }
  }

  // 编辑
  handleSure = (id) => {
    this.props.form.validateFields((err, values) => {
      values.id = id
      this.props.dispatch({
        type: 'story/edit',
        payload: values
      })
      this.props.form.resetFields()
    })
    this.props.onOk()
  }

  // 新增
  handleCreate = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      values.img = this.state.imgFile
      values.file = this.state.storyFile
      this.props.dispatch({
        type: 'story/add',
        payload: values
      })
      this.props.form.resetFields()
    })
    this.props.onOk()
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  handleChange = ({ file, fileList }) => {
    if (file.status == 'done') {
      this.setState({
        imgFile: file.response.data.img
      })
      message.success(`${file.name} 文件上传成功！`)
    } else if (status === 'error') {
      message.error(`${file.name} 文件上传失败！`)
    }
    this.setState({ fileList })
  }
  handlePicCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  fileChange = (info) => {
    const status = info.file.status
    if (status === 'done') {
      this.setState({
        storyFile: info.file.response.data.file
      })
      message.success(`${info.file.name} 文件上传成功！`)
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败！`)
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    const {
      visible,
      title,
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
        onOk={detail ? () => { this.handleSure(record.id) } : this.handleCreate}
        onCancel={this.handleCancel}
      >
        <Form onSubmit={detail ? this.handleSure : this.handleCreate}>
          <FormItem
            {...formItemLayout}
            label="故事名："
          >
            {getFieldDecorator('name', {
              initialValue: detail && record ? record.name : null,
              rules: [{ required: true, message: '请输入故事名!' }],
            })(
              <Input placeholder="请输入故事名" />
            )}
          </FormItem>
          {
            detail ? '' :
              <FormItem
                {...formItemLayout}
                label="故事封面："
              >
                <div className="clearfix">
                  <Upload
                    action="http://localhost:8000/api/story/addPic"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    accept="image/*"
                  >
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                  <Modal visible={previewVisible} footer={null} onCancel={this.handlePicCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </div>
              </FormItem>
          }
          {
            detail ? '' :
              <FormItem
                {...formItemLayout}
                label="故事文件："
              >
                <Dragger
                  name="file"
                  action="http://localhost:8000/api/story/addFile"
                  onChange={this.fileChange}
                  accept="audio/*"
                >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">单击或拖动文件到该区域上传</p>
                  <p className="ant-upload-hint">请上传故事文件</p>
                </Dragger>
              </FormItem>
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
      </Modal >
    )
  }
}

export default connect(({ story }) => ({ story }))(Form.create()(MyModal))