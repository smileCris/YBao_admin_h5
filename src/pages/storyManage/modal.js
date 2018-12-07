import { Modal, Button, Form, Input, Upload, Icon, message } from 'antd'

const FormItem = Form.Item
const Dragger = Upload.Dragger

class MyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    }
  }

  handleSubmit = () => {
    this.props.onOk()
  }

  handleAddCancel = () => {
    this.props.onCancel()
  }

  handleChange = ({ fileList }) => this.setState({ fileList })
  handlePicCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
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

    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange(info) {
        const status = info.file.status
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      },
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
            label="故事名："
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入故事名!' }],
            })(
              <Input placeholder="请输入故事名" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="故事封面："
          >
            <div className="clearfix">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handlePicCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="故事文件："
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">单击或拖动文件到该区域上传</p>
              <p className="ant-upload-hint">请上传故事文件</p>
            </Dragger>
          </FormItem>
        </Form>
      </Modal >
    )
  }
}

export default Form.create()(MyModal)