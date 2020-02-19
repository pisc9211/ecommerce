import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, ContentContainer, BackgroundImageContainer, ContentSubtitle, ContentTitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    size={size}
  >
    <BackgroundImageContainer 
      imageUrl={imageUrl}
      className='background-image'
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem);