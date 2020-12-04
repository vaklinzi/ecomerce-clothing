import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import SHOP_DATA from '../../data/ShopData';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionItems }) => (
          <CollectionPreview key={id} {...otherCollectionItems} />
        ))}
      </div>
    );
  }
}
