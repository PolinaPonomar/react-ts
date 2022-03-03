import React, {FC} from 'react';
import Card, { CardVariant } from '../components/Card';
import EventsExample from '../components/EventsExample';

const MainPage:FC = () => {  
  return (
    <div>
      <h1>Развлечения</h1>
      <EventsExample/>
      <Card onClick={(num)=> {console.log('word', num)}} width='200px' height='200px' variant={CardVariant.outlined} >
        <button>Кнопка</button>
        <p>Текст</p>
      </Card>
    </div>
  )
};

export default MainPage;
