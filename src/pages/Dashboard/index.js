import React, { Component } from 'react'
import { connect } from 'dva'
import { Row, Col, Icon, Card, Tabs, DatePicker, Tooltip } from 'antd'
import { ChartCard, MiniProgress, Bar } from '@/components/Charts'
import numeral from 'numeral'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { getTimeDistance } from '@/utils/utils'

import styles from './index.less'

const { TabPane } = Tabs

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects[
    'chart/getAllTraffic',
    'chart/getCircleTraffic',
    'chart/getQuestionTraffic',
    'chart/getStoryTraffic'
  ],
}))
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    salesType: 'all',
    loading: true,
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'chart/getAllTraffic',
      })
      dispatch({
        type: 'chart/getCircleTraffic',
      })
      dispatch({
        type: 'chart/getQuestionTraffic',
      })
      dispatch({
        type: 'chart/getStoryTraffic',
      })
      this.timeoutId = setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 600)
    })
  }

  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch({
      type: 'chart/clear',
    })
    cancelAnimationFrame(this.reqRef)
    clearTimeout(this.timeoutId)
  }

  render() {
    const { salesType, loading: propsLoding } = this.state
    const { chart, loading: stateLoading } = this.props
    const { salesData, allVisit, allChart, circleVisit, circleChart, questionVisit, questionChart, storyVisit, storyChart } = chart
    const loading = propsLoding || stateLoading

    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    }

    return (
      <PageHeaderWrapper
        title="数据分析"
        content="数据分析记录了app访问量，活跃人数（参与妈妈圈），评论人数（参与育儿问答），收听人数（收听睡前故事）"
      >
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="总访问量"
              action={
                <Tooltip
                  title="总访问量"
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              loading={loading}
              total={numeral(allVisit).format('0,0')}
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#ff9f42" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              loading={loading}
              title="活跃人数"
              action={
                <Tooltip
                  title="参与妈妈圈"
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(circleVisit).format('0,0')}
              contentHeight={46}
            >
              <MiniProgress percent={38} strokeWidth={8} target={40} color="rgb(86, 173, 253)" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              loading={loading}
              title="评论人数"
              action={
                <Tooltip
                  title="育儿问答"
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(questionVisit).format('0,0')}
              contentHeight={46}
            >
              <MiniProgress percent={48} strokeWidth={8} target={50} color="rgb(151, 95, 228)" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              loading={loading}
              bordered={false}
              title="收听人数"
              action={
                <Tooltip
                  title="睡前故事"
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(storyVisit).format('0,0')}
              contentHeight={46}
            >
              <MiniProgress percent={58} strokeWidth={8} target={60} color="#f56e66" />
            </ChartCard>
          </Col>
        </Row>

        <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
          <div className={styles.salesCard}>
            <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
              <TabPane
                tab="总访问量"
                key="all"
              >
                <Row>
                  <Col xl={23} lg={23} md={23} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar
                        height={295}
                        title="访问量趋势"
                        data={allChart}
                        color="#ff9f42"
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab="妈妈圈"
                key="circle"
              >
                <Row>
                  <Col xl={23} lg={23} md={23} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar
                        height={292}
                        title="活跃趋势"
                        data={circleChart}
                        color="rgb(86, 173, 253)"
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab="育儿问答"
                key="question"
              >
                <Row>
                  <Col xl={23} lg={23} md={23} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar
                        height={292}
                        title="活跃趋势"
                        data={questionChart}
                        color="rgb(151, 95, 228)"
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab="睡前故事"
                key="story"
              >
                <Row>
                  <Col xl={23} lg={23} md={23} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Bar
                        height={292}
                        title="收听趋势"
                        data={storyChart}
                        color="#f56e66"
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Dashboard
