import React, { Component } from 'react';

export class FullItem extends Component {
// 
  render() {
    return (
      <div className='full-item'>
        <div
          onClick={(e) =>
            e.currentTarget === e.target && this.props.openFull(this.props.item)
          }
        >
          <div className='overlay'>
            <img
              src={'./img/' + this.props.item.img}
                onClick={() => this.props.openFull(this.props.item)}
            />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div
              onClick={() => this.props.onAdd(this.props.item)}
              className='add-to-cart'
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullItem;
