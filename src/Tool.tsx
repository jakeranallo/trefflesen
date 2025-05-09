import * as React from 'react'
import { readingList } from './data'
import type { ToolComponentProps } from '@treffwerk/types'

const Tool: React.FC<ToolComponentProps> = ({ manifest, userId }) => {
  return (
    <div className="trefflesen-tool">
      <div className="reading-list">
        {readingList.map((item, index) => (
          <div key={index} className="reading-item">
            <h3>{item.title}</h3>
            <p>{item.snippet}</p>
            <div className="tags">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tool 