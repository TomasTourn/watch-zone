import React from 'react'

import { Carousel } from '../components/Carousel'
export const Home = () => {
    const items = [
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/07/11/44ba10e4-4b1f-3f32-a2ed-7ebc82725b6f.jpeg', alt: 'Item 1', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/10/15/131ed661-c961-36e0-ad1a-0f0f5420a8da.jpeg', alt: 'Item 2', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/06/10/00de14a3-a513-35b3-ad97-918a780b320a.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/08/21/427d2f13-2b92-3cb2-887f-f1c19374a06d.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/08/14/d71b6ddc-cfd2-3393-9917-693cce0ac874.jpeg', alt: 'Item 1', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/10/17/10d3cdaf-ba86-3c58-9d96-f941e19b84fc.jpeg', alt: 'Item 2', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/05/28/a2803291-d037-3a43-97a9-7a097434231d.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/03/06/ef25a935-cc72-33e2-8450-f260ce3fa9f5.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/02/13/c88a2551-119e-38f3-b08e-6655a8d2949a.jpeg', alt: 'Item 1', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/25/9747a581-fca7-3998-8d08-162e883259b1.jpeg', alt: 'Item 2', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/11/21/6db525fe-9009-3a5c-b2f1-7f0e9a0d8fde.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/25/9747a581-fca7-3998-8d08-162e883259b1.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/06/25/d309a61c-e200-3be1-83e5-13e224cbb8ef.jpeg', alt: 'Item 1', link:"watch" },
      ];
      return (
    
        <div className='w-screen overflow-visible'>
          <Carousel items={items} title="Destacado"/>
        </div>
        
      )
}
