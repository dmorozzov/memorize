import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class WordList extends React.Component {

    render() {
        let today = new Date();
        let loading = this.props.pageInfo.requestSent;
        let words = this.props.words.map(word =>
            <Word key={word.wordDTO.id} word={word} today={today.setHours(0,0,0,0)}/>
        );
        return (
          <div className="ui text container">
            <h2 className="ui header">
              <i className="clone icon"></i>
              <div className="content">
                Saved words
              </div>
            </h2>
            <table id="wordList" className="ui single teal line selectable table" style={{}}>
                <thead>
                    <tr>
                        <th>Original Word</th>
                        <th>Translation</th>
                        <th>Created date</th>
                    </tr>
                </thead>
                <tbody>
                    {words}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="3">
                      <div className="ui icon green tiny message">
                        <i className={(loading ? "spinner loading" : "check") + " icon"}></i>
                        <div className="content">
                          <div className="header">
                            {loading ? "Just one second" : "Fetched"}
                          </div>
                          <p>{loading ? "We`re fetching words for you." : (words.length + " from " + this.props.pageInfo.totalElements)}</p>
                        </div>
                      </div>
                    </th>
                  </tr>
                </tfoot>
            </table>
          </div>
        )
    }
}

class Word extends React.Component {
    constructor(props) {
      super(props);
      this.convertDate = this.convertDate.bind(this);
      this.shortTimeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      this.fullTimeOptions = {
        ...this.shortTimeOptions,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
    }

    convertDate(stringDate) {
      if (!stringDate) {
        return '-';
      }
      const ms = Date.parse(stringDate);
      const date = new Date(ms);
      const startDay = new Date(ms).setHours(0,0,0,0);
      return date.toLocaleString("ru-RU", (this.props.today - startDay === 0) ? this.shortTimeOptions : this.fullTimeOptions);
    }

    render() {
        return (
            <tr>
                <td>{this.props.word.wordDTO.original}</td>
                <td>{this.props.word.wordDTO.translation}</td>
                <td>{this.convertDate(this.props.word.createDate)}</td>
            </tr>
        )
    }
}
