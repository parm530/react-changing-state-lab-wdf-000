const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    return (
      <div className="status">
        <p>{winner ? `${winner} wins` : 'Tie'}</p>
      </div>
    );
  }
}

module.exports = Status;
