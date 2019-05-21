import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: "",
      stuffINeverWannaDo: []
    };
  }

  handleFormChange = e => {
    this.setState({ stuff: e.target.value });
  };

  handleFormReset = () => {
    this.setState({ stuffINeverWannaDo: [] });

  }

  handleSubmit = () => {
    this.setState(state => ({
      stuffINeverWannaDo: state.stuffINeverWannaDo.concat(state.stuff),
      stuff: ""
    }));
  };

  renderList = () => (
    <ul>
      {this.state.stuffINeverWannaDo.map((stuff, i) => (
        <li key={i}>{stuff}</li>
      ))}
    </ul>
  );

  renderForm = () => (
    <>
      <input onChange={this.handleFormChange} value={this.state.stuff} />
      <button onClick={this.handleSubmit}>Not gonna do</button>

      <button
        className="reset"
        disabled={this.state.stuffINeverWannaDo.length === 0}
        onClick={this.handleFormReset}
      >
        Reset {this.state.stuffINeverWannaDo.length} stuff I never wanna do
      </button>
    </>
  );

  render() {
    return (
      <div className="app">
        <h1>With state</h1>

        {this.renderList()}
        {this.renderForm()}
      </div>
    );
  }
}

export default App;
