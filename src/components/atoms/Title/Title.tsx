import * as React from 'react';
import classnames from 'classnames';
import './Title.sass';

const Title = ({ className, heading }: any) => {
  return <h1 className={classnames('title', className)}>{heading}</h1>;
};

export default Title;
