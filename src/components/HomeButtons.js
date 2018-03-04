import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Popup } from 'semantic-ui-react';

import { toggleView } from '../actions';

const mapStateToProps = ({ view }) => ({ view });
const mapDispatchToProps = dispatch => bindActionCreators({ toggleView }, dispatch);

class HomeButtons extends Component {
  handleClick = (e, type) => {
    this.props.toggleView(type);
  }

  handleExport = () => {
    this.props.exportList()
  }

  render() {
    const { view } = this.props;
    return (
      <div>
        <Popup trigger={<Button icon="upload" onClick={this.handleExport} color="olive" />} content="Export User Database" />
        <Button.Group>
          <Popup trigger={<Button icon="grid layout" onClick={(e) => this.handleClick(e, 'grid')} color="teal" className={view == 'grid' ? 'active' : ''} />} content="Grid view" />
          <Popup trigger={<Button icon="list layout" onClick={(e) => this.handleClick(e, 'list')} color="teal" className={view == 'list' ? 'active' : ''} />} content="List view" />
        </Button.Group>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeButtons);