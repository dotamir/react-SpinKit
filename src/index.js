import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Loader extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    innerClassName: PropTypes.string
  };
  static defaultProps = {
    type: 'rotating-plane'
  };
  render() {
    const divLength = range(Types[this.props.type]);
    const classes = classnames(['spinner', this.props.type]);
    return (
      <div className={classes} style={this.props.style}>
        {divLength.map(number => {
          const divClasses = classnames([
            `${this.props.type}${number}`,
            `${this.props.type}-child`
          ]);
          return <div key={number} className={divClasses} />;
        })}
      </div>
    );
  }
}

export default Loader;

export const Types = {
  'rotating-plane': 0,
  'double-bounce': 1,
  rect: 5,
  cube: 2,
  pulse: 0,
  dot: 2,
  bounce: 3,
  'sk-circle': 12,
  'sk-fading-circle': 12,
  'sk-cube': 9,
  'sk-folding-cube': 4
};

const range = x => {
  let i = 0,
    arr = [];
  while (i++ < x) {
    arr.push(i);
  }
  return arr;
};
