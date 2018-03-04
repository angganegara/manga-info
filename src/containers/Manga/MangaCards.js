import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Card, Image, Transition } from 'semantic-ui-react';

import PinManga from './PinManga';

import animation from './animation';

class MangaCards extends Component {
  componentDidMount() {
    animation.show('.manga-card');
  }

  render() {
    const { result } = this.props;
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
  }
}

export default MangaCards;