import React from 'react';
import './PageTitle.css';

type Props = {
  text: string;
};

const PageTitle = ({ text }: Props) => {
  return <h1 className="pageTitle">{text}</h1>;
};

export default PageTitle;
