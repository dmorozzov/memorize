import React from "react";
import ReactDOM from "react-dom";

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { original: "", translation: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.onClick(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui tiny modal">
        <i className="close icon" />
        <div className="header">Add new word</div>
        <div className="content">
          <form className="ui form">
            <div className="required field">
              <label>Original:</label>
              <input
                type="text"
                name="original"
                value={this.state.original}
                onChange={this.handleChange}
              />
            </div>
            <div className="required field">
              <label>Translation:</label>
              <input
                type="text"
                name="translation"
                value={this.state.translation}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        <div className="actions">
          <div className="ui button cancel">Cancel</div>
          <div className="ui button ok" onClick={this.handleSubmit}>
            OK
          </div>
        </div>
      </div>
    );
  }
}

export { WordAdder as default };
