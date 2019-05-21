import React from "reactn";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.global.stuffINeverWannaDo.map((stuff, i) => (
          <li key={i}>{stuff}</li>
        ))}
      </ul>
    );
  }
}

export default List;
