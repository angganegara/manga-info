import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';

import { enterSearch, searchManga } from '../actions';

const mapStateToProps = ({ search, searchResult }) => {
  return { search, searchResult };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ enterSearch, searchManga }, dispatch);
}

class HeaderSearch extends Component {
  handleChange = (e) => {
    this.props.enterSearch(e.target.value);
  }

  handleSubmit = (e) => {
    const {history} = this.props;
    if (history.location.pathname != '/search') {
      history.push("/search");
    }
    this.props.searchManga(this.props.search);
  }

  render() {
    return (
      <div className="search">
        <form action="javascript:" onSubmit={this.handleSubmit}>
          <Input
            value={this.props.search}
            onChange={this.handleChange}
            action
            size="small"
            placeholder="Enter manga title"
          >
            <input />
            <Button type="submit" size="small" icon="search" />
          </Input>
        </form>
      </div>
    )
  }
}

HeaderSearch = connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);

export default HeaderSearch;