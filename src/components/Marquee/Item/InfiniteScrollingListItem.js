import React, { Component } from 'react';

import './style.css';


class InfiniteScrollingListItem extends Component {
  render() {
    const { dataItem } = this.props;
    return (
          <li class="li">
            <a>{dataItem.name}</ a>
            <em className = 'time'>{dataItem.time}</em>
            <em className = 'city'>{dataItem.address}</em>          
          </li>
    );
  }
}

export default InfiniteScrollingListItem;
