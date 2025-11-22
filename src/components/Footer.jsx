import React, { useState } from 'react'
import { Youtube, Instagram, X } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const [hovered, setHovered] = useState(null)

  const icons = [
    { id: 'youtube', Icon: Youtube, label: 'YouTube' },
    { id: 'instagram', Icon: Instagram, label: 'Instagram' },
    { id: 'threads', Icon: X, label: 'Threads' },
  ]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">Peter McKinnon On Social Media</p>

        <div className="footer-icons">
          {icons.map((it, i) => {
            const Icon = it.Icon
            const muted = hovered !== null && hovered !== i

            return (
              <button
                key={it.id}
                aria-label={it.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`icon-button ${muted ? 'muted' : ''}`}
              >
                <Icon size={14} />
              </button>
            )
          })}
        </div>
      </div>
    </footer>
  )
}