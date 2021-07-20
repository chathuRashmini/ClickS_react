import React from 'react';
import '../../App.css';
import '../Card.css';
import CardItem from '../CardItem';

export default function ClickS() {
  return (
    <div className='cards'>
      <h1>EPIC ClickS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVwaWMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Explore the hidden nature beauties in Switzerland'
              label='Switzerland'
              path='SingleClick'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1501476169777-98e35e112625?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXBpYyUyMGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='US is not just buildings!'
              label='Glacier National Park, United States'
              path='SingleClick'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1516368703560-076d597296a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvc2VzJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Explore the beauty of Nuwara Eliya Sri Lanka'
              label='Roses'
              path='SingleClick'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1501908734255-16579c18c25f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              text='Explore the hidden waterfalls in Iceland'
              label='Seljalandsfoss, Iceland'
              path='SingleClick'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1588001832198-c15cff59b078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              text='Feel the breeze and enjoy the waves'
              label='Tylösand, Halmstad, Suède'
              path='SingleClick'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
              text='Into the blues'
              label='Balos Beach, Griechenland'
              path='SingleClick'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}