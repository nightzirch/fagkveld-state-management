import React from "reactn";
import List from './List';
import SubmitButton from './SubmitButton';
import ResetButton from './ResetButton';

class App extends React.Component {
  handleFormChange = e => {
    this.setGlobal({ stuff: e.target.value });
  };

  renderForm = () => (
    <>
      <input onChange={this.handleFormChange} value={this.global.stuff} />
      <SubmitButton />
      <ResetButton />
    </>
  );

  render() {
    return (
      <div className="app">
        <h1>With ReactN</h1>

        <List />
        {this.renderForm()}
      </div>
    );
  }
}

export default App;
