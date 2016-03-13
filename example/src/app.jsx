import React from 'react';
import ReactDOM from 'react-dom';
import CSSX from '../../lib/CSSX';

class Component extends React.Component {
  render() {
    return (
      <CSSX styles={ this.css() }>
        <h1>Title styled with <i>CSSX</i></h1>
        <input defaultValue='#000' type='text' onChange={ this._change.bind(this) } />
      </CSSX>
    );
  }
  css() {
    return (
      <style>
        h1 {
          color: {{ this.state ? this.state.color : '#000' }};
        }
        h1 i {
          text-decoration: underline;
        }
      </style>
    );
  }
  _change(e) {
    this.setState({ color: e.target.value });
  }
}

ReactDOM.render(<Component />, document.querySelector('#content'));