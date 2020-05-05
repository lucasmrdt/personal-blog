import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';

import ArticlesHero from '@theme/sections/articles/Articles.Hero';
import AuthorHero from '@theme/sections/author/Author.Hero';
import ArticlesList from '@theme/sections/articles/Articles.List';

import {Template} from '@types';

const ArticlesPage: Template = ({location, pageContext}) => {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <AuthorHero author={authors[0]} />
      <ArticlesHero />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{show: boolean}>`
  ${p => p.show && `margin-top: 95px;`}
`;