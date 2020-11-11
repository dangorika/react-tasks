import React from 'react';

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

export default PageRow;