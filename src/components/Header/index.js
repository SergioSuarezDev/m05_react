import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchB from '../Search/SearchB';
import config from '../../config';

const Header = () => (
    <Menu borderless color={'black'} inverted >
      <Menu.Item><Image src={config.tmdb_logo} size={'mini'} centered/></Menu.Item>
      <Menu.Item><FontAwesomeIcon icon="film"/>&nbsp;<Link to={'/app'}>Movies</Link></Menu.Item>
      <Menu.Item><FontAwesomeIcon icon="folder"/>&nbsp;<Link to={'/collections'}>Collections</Link></Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <SearchB/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
);

export default Header;
