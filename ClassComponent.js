import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "N'importe quoi"
    }
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {

    return (
      <div className="App">
        <form>
          <input name="title" value={this.state.title} onChange={e => this.handleChange(e)}/>
        </form>
      </div>
    );
  }
}

export default App;
