import React from 'react';

const Title = props => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1>
          {props.name} <strong className="text-blue">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
