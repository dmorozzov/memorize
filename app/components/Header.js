import React from "react";
import { Link } from "react-router-dom";
import jQuery from "jquery";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.showWordAppender = this.showWordAppender.bind(this);
  }

  showWordAppender() {
    $(".ui.modal")
      .modal({
        closable: true,
        transition: "horizontal flip",
        onDeny: function() {
          return true;
        },
        onApprove: function() {}
      })
      .modal("show");
  }

  render() {
    return (
      <div className="ui huge fixed borderless teal menu">
        <div className="ui text container">
          <Link className="header item" to="/">
            <i className="pencil alternate icon" />
            Memorize
          </Link>
          <a href="#" className="item" onClick={this.showWordAppender}>
            New word
          </a>
          <Link className="item" to="/training">
            Training
          </Link>
          <div className="ui right small item search">
            <form className="ui left small icon input">
              <input className="prompt" type="text" placeholder="Search word" />
              <i className="search icon" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
