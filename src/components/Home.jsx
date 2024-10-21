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
      const collection=[
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/d2f70538-e9d7-4e04-ac97-6e8f599c6a35.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/847e0c4c-5148-480a-b701-fe806e4aa736.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/01/29/394dd390-eed0-4ebd-84df-0751337f1d4d.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/05/09/8e716382-1456-4ae9-a3ff-ddb81bab7263.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/15/1f74a4c2-d2f9-4597-8fd7-86ee7e219e62.jpeg', alt: 'Item 1', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/23/d82b9947-4ba5-4e35-ae03-e61479695e86.jpeg', alt: 'Item 2', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/06/10/a340c1dd-8d5b-4f2a-a0a7-fbc74ec20e63.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/04/01/94e58a7e-f3df-4ab5-ae72-94dba34b24bf.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/08/16/a741dba9-6016-4ee6-8487-091df5acbb07.jpeg', alt: 'Item 1', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/20/36aa1dbe-d4ad-487a-a6e3-cca7f864a6cd.jpeg', alt: 'Item 2', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/08/66cbf55b-6680-436e-a749-81a3dcb055f2.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/03/06/0a0b4f27-5cb2-4a9c-ac83-5a2cabc2a2b4.jpeg', alt: 'Item 1', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/01/30/d51cff40-0922-49fb-8f3a-ab17bfd6b0e5.jpeg', alt: 'Item 2', link:"watch"}
      ]
      const categories=[
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/01/29/9355a008-572d-469d-ba47-174c460474ad.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/fbaad856-6ec0-4b8a-8d64-f2913c80aa95.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/d1e28d8f-ee05-4ef8-b2f9-6fb1a656c45c.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/0db527bb-70ff-4582-99c7-d5937b606a8d.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/01/25/20ba0aed-71da-426b-bc5d-670f6544e9b3.jpeg', alt: 'Item 1', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/08/beeb3885-fe76-4bff-9802-fae80e46e63b.jpeg', alt: 'Item 2', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/01/29/44728649-e5db-46d2-83d2-fd496259e1d0.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/fdc67bff-4d72-4a0e-861c-f22015c72b24.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/ae72bc42-ebc4-4756-beb2-cd51bb828a14.jpeg', alt: 'Item 2', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/05/07/50a6e7e9-9059-4d6f-a120-30fbcd3911de.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/14/ae050188-e781-4190-96dd-e136a5d6e2f5.jpeg', alt: 'Item 1', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/15/1e138037-cf7e-4951-aa8f-86da3fc3bead.jpeg', alt: 'Item 2', link:"watch"}
      ]
      const forYou=[
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/09/14/ad15f751-47af-3d34-800d-2835afaabed5.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/11/25/569ca38f-c39b-3e22-b5c1-1c667bcf5df5.jpeg', alt:'item', link:'sfds'},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/04/17/ee8de8d1-1745-36c7-b228-385ae00c9637.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/06/27/5ef96221-9d71-317d-aebb-c03e3b7639a1.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/28/92b3c5ac-85d1-30db-8d4e-a7e4cb98a1f5.jpeg', alt: 'Item 1', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/12/18/c485e31c-7573-33ea-9b96-4a560187ae13.jpeg', alt: 'Item 2', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/09/18/409b7d07-29e3-3afb-ab75-5055d7814028.jpeg', alt: 'Item 3', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2023/09/15/d8b96ea6-e059-3d34-a095-19cb2788d0ac.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/02/26/fa9de5e7-ffaf-3d45-b1bf-e76284a11c9e.jpeg', alt: 'Item 2', link:"watch"},
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/10/07/2c882d77-d9c6-3b1e-a586-0f6dcecd3609.jpeg', alt: 'Item 4', link:"watch" },
        { imageUrl: 'https://images.cdn.prd.api.discomax.com/2024/09/18/55e60073-a29c-36fe-9092-9e35ae700b4b.jpeg', alt: 'Item 1', link:"watch"}
      ]
      return (
    
        <div className='w-screen'>
          <Carousel items={items} title="Destacado"/>
          <Carousel items={forYou} title="Para Ti"/>
          <Carousel items={collection} title="Nuestra Colección"/>
          <Carousel items={categories} title="Categorias"/>
        </div>
        
      )
}
