import React from 'react';
import MenuItem from '../menu-item/MenuItem';

import MENU_SECTIONS from '../../data/MenuSections';
import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: MENU_SECTIONS,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
