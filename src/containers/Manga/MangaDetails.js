import React, { Component } from 'react';
import axios from 'axios';

import { Button, Icon } from 'semantic-ui-react';

class MangaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://www.mangaeden.com/api/manga/${id}`)
      .then(res => this.setState({ manga: res.data }))
  }

  render() {
    if (this.state.manga) {
      let {
        title,
        description,
        categories,
        chapters_len,
        image,
        artist,
        author,
        status,
        alias
      } = this.state.manga;
      let { history } = this.props;

      return (
        <div>
          <h2><span dangerouslySetInnerHTML={{__html:title}} /></h2>
          {image && <img src={`https://cdn.mangaeden.com/mangasimg/${image}`} />}
          <hr />
          <div dangerouslySetInnerHTML={{__html: description}} />
          Author: {author}<br />
          Artist: {artist}<br />
          Chapters: {chapters_len}<br />
          Categories: {categories.join(', ')}<br />
          Status: {status === 1 ? 'ongoing' : 'completed'}
          <hr />
          <Button animated color="red" onClick={() => window.open(`https://mangaeden.com/en/en-manga/${alias}`, '_blank')}>
            <Button.Content visible>Read Online</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
          <Button animated color="grey" basic onClick={() => history.push("/")}>
            <Button.Content visible>Return</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
        </div>
      )
    }

    return <div>Loading ...</div>
  }
}

export default MangaDetails;