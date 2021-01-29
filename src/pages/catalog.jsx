import { useState } from 'react'
import './catalog.less'

const mockData = [
  { id: '1', name: '1', data: [1, 2, 3, 4, 5] },
  { id: '2', name: '2', data: [1, 2, 3, 4, 5] },
  { id: '3', name: '3', data: [1, 2, 3, 4, 5] },
  { id: '4', name: '4', data: [1, 2, 3, 4, 5] },
  { id: '5', name: '5', data: [1, 2, 3, 4, 5] },
  { id: '6', name: '6', data: [1, 2, 3, 4, 5] },
  { id: '7', name: '7', data: [1, 2, 3, 4, 5] },
]

export default () => {
  const [activeItemId, setActiveItemId] = useState(mockData[0].id)
  return (
    <div className="catalog">
      <ul className="title">
        {mockData.map(item => (
          <li
            key={item.id}
            className={activeItemId === item.id ? 'active' : ''}
            onClick={() => {
              setActiveItemId(item.id)
            }}
          >
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="content">
        {mockData.map(item => (
          <section id={`${item.id}`} key={item.id}>
            {item.data.map(subItem => (
              <div key={subItem}>{subItem}</div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
