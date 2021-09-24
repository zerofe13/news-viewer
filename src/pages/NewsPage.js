import React from 'react';
import Categories from '../components/categories';
import NewList from '../components/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
