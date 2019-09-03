import React from 'react';

class Badge extends React.Component {
  render() {
    return (
      <div className="drawer--button">{ this.props.text }</div>
    )
  }
}

export default Badge
