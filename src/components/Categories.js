import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'All',
        },
        {
          key: 'rose',
          name: 'Rose',
        },
        {
          key: 'gerbers',
          name: 'Gerbers',
        },
        {
          key: 'pions',
          name: 'Pions',
        },
        {
          key: 'orchedy',
          name: 'Orchedy',
        },
        {
          key: 'rulyunculus',
          name: 'Rulyunculus',
        },
      ],
    };
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.onChoose(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
