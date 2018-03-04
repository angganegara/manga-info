import React from 'react';
import { connect } from 'react-redux';

import MangaCards from './MangaCards';

const mapStateToProps = ({ searchResult }) => {
  return { result: searchResult };
}

const MangaResult = connect(mapStateToProps, null)(({ result }) => result.length > 0 && (
  <React.Fragment>
    <h2>Search Result</h2>
    <MangaCards result={result} />
  </React.Fragment>
));

export default MangaResult;