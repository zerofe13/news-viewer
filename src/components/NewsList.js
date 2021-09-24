import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NeswListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width:786px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9c0ad2fb8da4426a9db10f55b2b5d9b8`,
    );
  }, [category]);

  if (loading) {
    return <NeswListBlock>대기 중...</NeswListBlock>;
  }
  if (!response) return null;
  if (error) {
    return <NeswListBlock>에러발생</NeswListBlock>;
  }
  const { articles } = response.data;
  return (
    <NeswListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NeswListBlock>
  );
};
export default NewList;
