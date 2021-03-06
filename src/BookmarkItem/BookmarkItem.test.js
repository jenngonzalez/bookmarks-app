import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkItem from './BookmarkItem';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '123',
    title: 'test title',
    url: 'https://www.testurl.com',
    description: 'test description',
    rating: 1,
    onClickDelete: () => {}
  }
  ReactDOM.render(
    <BrowserRouter>
      <BookmarkItem {...props}/>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
