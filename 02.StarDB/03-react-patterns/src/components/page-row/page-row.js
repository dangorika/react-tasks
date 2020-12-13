import React from 'react';
import PropTypes from 'prop-types';

import './page-row.sass';

const PageRow = ({ left, right }) => {
  return (
    <div className="page-row row">
      <div className="page-row__col col-sm-6">
        {left}
      </div>
      <div className="page-row__col col-sm-6">
        {right}
      </div>
    </div>
  );
};

PageRow.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default PageRow;