import { Component } from 'react'
import { Row, Col, Card } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'

const styles = {
  baseView: {
    width: '60%',
    minWidth: 400,
    padding: '40px 5%'
  },
  avatar: {
    width: '80%',
    border: '1px solid #bbb',
    borderRadius: 10,
    padding: '10px'
  },
  font: {
    lineHeight: '4em'
  },
  tlehed: {
    color: '#333',
    marginBottom: '30px'
  }
}

const userData = {
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  email: '102932222@qq.com',
  nickname: 'Serati Ma',
  address: '安徽合肥',
  ctime: '2018-09-25 15:00:00',
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

class Personal extends Component {
  render() {
    return (
      <PageHeaderWrapper
        title="个人中心"
        content="个人信息查询"
      >
        <Card
          bordered={false}
          title="基本设置"
        >
          <div style={styles.baseView}>
            <Row style={styles.font}>
              <Col span={5} offset={3}>头像：</Col>
              <Col span={12}>
                <div className="clearfix" style={{ width: 150 }}>
                  <img style={styles.avatar} src={userData.avatar} />
                </div>
              </Col>
            </Row>
            <Row style={styles.font}>
              <Col span={5} offset={3}>账号：</Col>
              <Col span={12}>{userData.nickname}</Col>
            </Row>
            <Row style={styles.font}>
              <Col span={5} offset={3}>邮箱：</Col>
              <Col span={12}>{userData.email}</Col>
            </Row>
            <Row style={styles.font}>
              <Col span={5} offset={3}>地址：</Col>
              <Col span={12}>{userData.address}</Col>
            </Row>
            <Row style={styles.font}>
              <Col span={5} offset={3}>创建时间：</Col>
              <Col span={12}>{userData.ctime}</Col>
            </Row>
            
          </div>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Personal