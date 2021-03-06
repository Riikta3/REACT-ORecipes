import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = ({ recipes, title }) => (
  <Page>
    <AppHeader />
    <Content
      title={title}
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={recipes}
    />
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Home;
