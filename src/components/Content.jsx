import React from 'react'
import ContentHeader from './ContentHeader';
import '../css/Content.scss';
import { Card } from './Card';
import { TaskList } from './TaskList';

export const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card/>
        <TaskList/>

    </div>
  )
}

export default Content;
