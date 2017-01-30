const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;

    const validPlayer = (player === "X" || player == "O") ? true : false
    return (
      <button className="field" disabled={validPlayer} onClick={onClick}>
        { player }
      </button>
    );
  }
}

module.exports = Field;
