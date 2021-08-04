import * as React from 'react'
import { Button, Space } from 'antd-mobile/es'

export default () => (
  <>
    <Space wrap>
      <Button
        onClick={() => {
          alert('hello.')
        }}
      >
        Default
      </Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </Space>

    <Button block color="primary" size="large">
      Block Button
    </Button>

    <Space wrap>
      <Button color="primary" fill="solid">
        Solid
      </Button>
      <Button color="primary" fill="outline">
        Outline
      </Button>
      <Button color="primary" fill="none">
        None
      </Button>
    </Space>

    <Space wrap align="center">
      <Button size="mini" color="primary">
        Mini
      </Button>
      <Button size="small" color="primary">
        Small
      </Button>
      <Button size="middle" color="primary">
        Middle
      </Button>
      <Button size="large" color="primary">
        Large
      </Button>
    </Space>

    <Space wrap>
      <Button disabled>Disabled</Button>
      <Button disabled color="primary">
        Disabled
      </Button>
    </Space>

    <Space wrap>
      <Button loading color="primary" loadingText="加载中" size="mini">
        Loading
      </Button>
      <Button loading color="primary" loadingText="加载中" size="small">
        Loading
      </Button>
      <Button loading color="primary" loadingText="加载中" size="middle">
        Loading
      </Button>
      <Button loading color="primary" loadingText="加载中" size="large">
        Loading
      </Button>
      <Button loading>Loading</Button>
      <Button loading color="primary" fill="outline">
        Loading
      </Button>
    </Space>
  </>
)
