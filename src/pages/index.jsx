import React from 'react'
import { Link } from 'umi'
import { Button } from 'antd-mobile'
import { NavBar, Icon } from '@/components'
import styles from './index.less'
import { Row, Col } from '@/components/grid'

export default () => {
  return (
    <div className={styles.wrap}>
      <Row gap={20}>
        <Col span={8}>
          <div>1</div>
        </Col>
        <Col span={8}>
          <div>1</div>
        </Col>
        <Col span={8}>
          <div>1</div>
        </Col>
        <Col span={8}>
          <div>1</div>
        </Col>
      </Row>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        NavBar
      </NavBar>

      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon type="icleftcircle" color="#ff0" />,
          <Icon type="icleftcircle" color="#ff0" />,
        ]}
      >
        NavBar
      </NavBar>
      <Button>default</Button>
      <Button disabled>default disabled</Button>
      <Button type="primary">primary</Button>
      <Button type="primary" disabled>
        primary disabled
      </Button>
      <Icon type="icleftcircle" color="#ff0" />

      <Button type="warning">warning</Button>
      <Button type="warning" disabled>
        warning disabled
      </Button>

      <Button loading>loading button</Button>
      <h1 className={styles.title}>Hello World</h1>
      <Link to="/calendar-comp-test">calendar</Link>
    </div>
  )
}
