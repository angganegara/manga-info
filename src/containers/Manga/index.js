import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { removeManga } from '../../actions';

import MangaCards from './MangaCards';
import animation from './animation';
import HomeButtons from '../../components/HomeButtons';

const mapStateToProps = ({ books, view }) => {
  return { books, view };
}

const localData = window.localStorage.getItem('localData');

class Manga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewExport: false
    }
  }
  handleExport = (message) => {
    this.setState({ viewExport: true });
  }

  render() {
    const { books, view } = this.props;
    const { viewExport } = this.state;
    return (
      <div>
        <div className="title-flex">
          <h2>Pinned Manga</h2>
          <HomeButtons exportList={this.handleExport}/>
        </div>
        {viewExport && (
          <div className="export-wrap">
            <div className="export">{localData}</div>
            <Button color="teal" onClick={() => this.setState({ viewExport: false })}>OK</Button>
          </div>
        )}
        {books.length <= 0 && <div>You have no pinned manga. Search one to add.</div>}
        {books.length > 0 && <MangaCards result={books} view={view} />}
      </div>
    )
  }
}

Manga = connect(mapStateToProps)(Manga);

export default Manga;