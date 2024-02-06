import * as React from 'react';
import classnames from 'classnames';
import './Title.sass';

const Title = ({ className, children }: any) => {
  return <h1 className={classnames('title', className)}>{children}</h1>;
};

export default Title;
