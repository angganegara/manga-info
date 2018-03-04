import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeManga } from '../../actions';

import MangaCards from './MangaCards';
import animation from './animation';

const mapStateToProps = ({ books }) => {
  return { books };
}

class Manga extends Component {
  handleClick = () => {
    animation.show('.manga-card');
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        <h2>Pinned Manga. <a href="javascript:" onClick={this.handleClick}>Stagger</a></h2>
        {books.length <= 0 && <div>You have no pinned manga. Search one to add.</div>}
        {books.length > 0 && <MangaCards result={books} />}
      </div>
    )
  }
}

Manga = connect(mapStateToProps)(Manga);

export default Manga;