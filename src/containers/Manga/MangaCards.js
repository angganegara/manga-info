import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Card, Image, Transition } from 'semantic-ui-react';

import PinManga from './PinManga';

import animation from './animation';

class MangaCards extends Component {
  componentDidMount() {
    const { view } = this.props;
    if (view == 'grid') {
      animation.show('.manga-card');
    } else {
      animation.showList('.listview-item');
    }
  }

  render() {
    const { result, view } = this.props;
    if (view == 'grid') {
      return (
        <Card.Group itemsPerRow={8} centered>
          {result.map((manga, index) => (
            <Card key={index} className="manga-card">
              <PinManga manga={manga} />
              {manga.im && <Link to={`/manga/${manga.i}`}><Image src={`https://cdn.mangaeden.com/mangasimg/${manga.im}`} /></Link>}
              <Card.Content>
                <Card.Header><Link to={`/manga/${manga.i}`}><span dangerouslySetInnerHTML={{ __html: manga.t }} /></Link></Card.Header>
                <Card.Meta>{manga.c.join(', ')}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      );
    } else {
      return (
        <div className="listview-group">
          {result.map((manga, index) => (
            <Link to={`/manga/${manga.i}`} className="listview-item" key={`list-${index}`}>
              <PinManga manga={manga} />
              <span dangerouslySetInnerHTML={{ __html: manga.t }} className="listview-title"/>
              <span className="listview-categories">{manga.c.join(', ')}</span>
            </Link>
          ))}
        </div>
      );
    }
  }
}

export default MangaCards;