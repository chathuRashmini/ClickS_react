import React from 'react';
import '../../App.css';
import './SingleClick.css';
import CardItem from '../CardItem';

export default function SingleClicker() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1604815312727-26da18679e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Guillermo Mota'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVwaWMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Explore the hidden nature beauties in Switzerland'
              label='Switzerland'
              path='SingleClick' 
            />
            <CardItem
              src='https://images.unsplash.com/photo-1532152934380-321e9a99fe20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBjb2xsYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='In the mood of collecting clicks'
              label='Clicks Collection'
              path='SingleClick' 
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
              text='Boxed Water is Better!'
              label='Quenching thirst'
              path='SingleClick' 
            />
            <CardItem
              src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              text='So I wandered like a lonely cloud, into the nature of the US'
              label='Lake Tahoe, United States'
              path='SingleClick' 
            />
          </ul>
        </div>
      </div>
    </div>
  );
}