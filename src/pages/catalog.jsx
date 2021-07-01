import { each, reverse, findIndex } from 'lodash'
import { PureComponent, createRef } from 'react'

import './catalog.less'

const mockData = [
  { id: 'a1', name: '1', data: [1, 1, 1, 1, 1] },
  { id: 'a2', name: '2', data: [2, 2, 2, 2, 2] },
  { id: 'a3', name: '3', data: [3, 3, 3, 3, 3] },
  { id: 'a4', name: '4', data: [4, 4, 4, 4, 4] },
  { id: 'a5', name: '5', data: [5, 5, 5, 5, 5] },
  { id: 'a6', name: '6', data: [6, 6, 6, 6, 6] },
  { id: 'a7', name: '7', data: [7, 7, 7, 7, 7] },
]

export default class Catalog extends PureComponent {
  state = {
    activeItemId: mockData[0].id,
  }

  contentRef = createRef()

  componentDidMount() {
    this.sectionDoms = [...document.querySelectorAll('.section-wrap h3')]
    this.lastScrollTop = this.contentRef.current.scrollTop

    this.io = new IntersectionObserver(entries => {
      console.log(entries)
      const newScrollTop = this.contentRef.current.scrollTop
      each(reverse(entries), entry => {
        const entryId = entry.target.dataset.id
        const entryIndex = findIndex(mockData, { id: entryId })
        if (entry.isIntersecting) {
          // active
          this.setState({ activeItemId: entryId })
        } else if (this.state.activeItemId === entryId) {
          // 对应的导航元素高亮
          if (newScrollTop > this.lastScrollTop) {
            // scroll to bottom
            if (mockData[entryIndex + 1]) {
              this.setState({ activeItemId: mockData[entryIndex + 1].id })
            }
          } else {
            // scroll to top
            this.setState({ activeItemId: mockData[entryIndex - 1].id })
          }
        }
      })

      this.lastScrollTop = newScrollTop
    })
    each(this.sectionDoms, item => {
      this.io.observe(item)
    })
  }

  componentWillUnmount() {
    // 停止观察
    each(this.sectionDoms, item => {
      this.io.observe(item)
    })
    // 关闭观察器
    this.io.disconnect()
  }

  onTitleClick = e => {
    this.setState({ activeItemId: e.currentTarget.dataset.id })
  }

  render() {
    const { activeItemId } = this.state
    return (
      <div className="catalog">
        <ul className="title">
          {mockData.map(item => (
            <li
              key={item.id}
              data-id={item.id}
              className={activeItemId === item.id ? 'active' : ''}
              onClick={this.onTitleClick}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="content" ref={this.contentRef}>
          {mockData.map(item => (
            <section className="section-wrap" key={item.id}>
              <h3 id={item.id} data-id={item.id}>
                {item.name}
              </h3>
              {item.data.map((subItem, index) => (
                <div key={index}>{subItem}</div>
              ))}
            </section>
          ))}
        </div>
      </div>
    )
  }
}
