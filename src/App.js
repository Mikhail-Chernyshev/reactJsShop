import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Items from './components/Items.js';
import Categories from './components/Categories.js';
import FullItem from './components/FullItem.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Rose',
          img: 'rose.jpeg',
          desc: 'lorum ipsum dolor sit amet, consectetur',
          category: 'rose',
          price: '2.99',
        },
        {
          id: 2,
          title: 'Pion',
          img: 'pions.jpeg',
          desc: 'lorum ipsum dolor sit amet, consectetur',
          category: 'pions',
          price: '3.99',
        },
        {
          id: 3,
          title: 'Gerber',
          img: 'gerbers.jpeg',
          desc: 'lorum ipsum dolor sit amet, consectetur',
          category: 'gerbers',
          price: '1.99',
        },
        {
          id: 4,
          title: 'Orchedy',
          img: 'orchedy.jpeg',
          desc: 'lorum ipsum dolor sit amet, consectetur',
          category: 'orchedy',
          price: '9.99',
        },
        {
          id: 5,
          title: 'Rulyunculus',
          img: 'rulyunculus.jpeg',
          desc: 'lorum ipsum dolor sit amet, consectetur',
          category: 'rulyunculus',
          price: '5.99',
        },
      ],
      fullItem: false,
      objectFullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.openFullItem = this.openFullItem.bind(this);
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories onChoose={this.chooseCategory} />
        <Items
          openFull={this.openFullItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.fullItem && (
          <FullItem
            escapeOutside={this.handleEscapeOutside}
            openFull={this.openFullItem}
            item={this.state.objectFullItem}
            onAdd={this.addToOrder}
          />
        )}
        <Footer />
      </div>
    );
  }

  openFullItem(item) {
    this.setState({ objectFullItem: item });
    this.setState({ fullItem: !this.state.fullItem });
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {});
  }
}

export default App;
