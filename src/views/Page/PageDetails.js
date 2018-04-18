import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import 'react-router-modal/css/react-router-modal.css';

import { pagePropType } from '../SideMenu/reducer';
import './style.css';

const PageDetails = (props) => {
  const { page } = props;
  const { author } = page._embedded;
  const featuredMedia = page._embedded['wp:featuredmedia'];

  return (
    <Container className="page">
      <Helmet>
        <link rel="canonical" href={page.link} />
      </Helmet>
      <Header dividing>
        <Link to="/">
          <Button size="huge" icon="close" />
        </Link>
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      </Header>
      <Header.Subheader>
        &nbsp;{props.texts.TEXTS && props.texts.TEXTS.BY_AUTHOR}&nbsp;
        <b>{author[0].name}</b>,&nbsp;
        <Moment format="MMMM DD, YYYY">{page.date}</Moment>
      </Header.Subheader>
      {featuredMedia ? <Image src={featuredMedia[0].source_url} /> : ''}
      <Container textAlign="justified">
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </Container>
    </Container>
  );
};

PageDetails.defaultProps = {
  texts: {
    TEXTS: {
      BY_AUTHOR: 'by',
    },
  },
};
PageDetails.propTypes = {
  page: pagePropType.isRequired,
  texts: PropTypes.shape({
    TEXTS: PropTypes.shape({
      BY_AUTHOR: PropTypes.string,
    }),
  }),
};

export default PageDetails;
