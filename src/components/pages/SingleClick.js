import React from 'react';
import '../../App.css';
import './SingleClick.css';
import CardItem from '../CardItem';

export default function SingleClick() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVwaWMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Explore the hidden nature beauties in Switzerland'
              label='Switzerland'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1604815312727-26da18679e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='A click by Guillermo Mota'
              path='SingleClicker' 
            />
            <CardItem
              src='https://images.unsplash.com/photo-1532152934380-321e9a99fe20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBjb2xsYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='More from Guillermo Mota'
              path='SingleClicker' 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}