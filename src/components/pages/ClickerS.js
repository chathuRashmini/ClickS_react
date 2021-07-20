import React from 'react';
import '../../App.css';
import '../Card.css';
import CardItem from '../CardItem';

export default function ClickerS() {
  return (
    <div className='cards'>
      <h1>Awesome ClickerS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1604815312727-26da18679e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
              text='Guillermo Mota'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              text='Amelia Renaldi'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1550937428-659d277973ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=620&q=80'
              text='Bousbia Kadhem'
              path='SingleClicker'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1591631126157-99ea501b7cfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              text='Kylie Kadhemia'
              path='SingleClicker'
            />
          </ul>
          <ul className='cards__items'>
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