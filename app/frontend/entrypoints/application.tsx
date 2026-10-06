import './application.css'
import { createRoot } from 'react-dom/client'
import { Greeting } from '../components/Greeting'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLElement>('[data-react-component="Greeting"]').forEach((el) => {
    createRoot(el).render(<Greeting {...JSON.parse(el.dataset.props ?? '{}')} />)
  })
})
