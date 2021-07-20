import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
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
          <h1 className="Clickers">Awesome ClickerS!</h1>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1604815312727-26da18679e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Guillermo Mota'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Le Shantin'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1586796676778-2c50b6bc3937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Emrecan Arık'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1542729412-5dca7c2367c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBwaG90b2dyYXBoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Tessa Young'
              path='SingleClicker'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;