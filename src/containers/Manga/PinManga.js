import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Icon } from 'semantic-ui-react';

import { addManga, removeManga } from '../../actions';

const mapStateToProps = ({ books }) => {
  return { books };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addManga, removeManga }, dispatch);
}

class PinManga extends Component {
  constructor(props) {
    super(props);
  }

  addManga = (e) => {
    const { manga } = this.props;
    this.props.addManga(manga);
  }

  removeManga = (e) => {
    const { manga } = this.props;
    this.props.removeManga(manga.i);
  }

  render() {
    const pinned = this.props.books.length && this.props.books.filter(book => book.i === this.props.manga.i).length;
    if (pinned) {
      return (
        <div className="pin">
          <Button size="mini" animated="fade" color="red" onClick={this.removeManga}>
            <Button.Content visible>
              <Icon name='remove' />
            </Button.Content>
            <Button.Content hidden>Remove</Button.Content>
          </Button>
        </div>
      );
    } else {
      return (
        <div className="pin">
          <Button size="mini" animated="fade" color="pink" onClick={this.addManga}>
            <Button.Content visible>
              <Icon name='plus' />
            </Button.Content>
            <Button.Content hidden>Pin</Button.Content>
          </Button>
        </div>
      );
    }
  }
}

PinManga = connect(mapStateToProps, mapDispatchToProps)(PinManga);

export default PinManga;