import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item openFull={this.props.openFull} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
