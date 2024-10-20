import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import { Carousel } from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)
  const items = [
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 1' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 2' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 3' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 4' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 1' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 2' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 3' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 4' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 1' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 2' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 3' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 4' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 1' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 2' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 3' },
    { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 4' },
  ];
  return (

    <div className='w-screen overflow-visible'>
      <Carousel items={items}/>
    </div>
    
  )
}

export default App
