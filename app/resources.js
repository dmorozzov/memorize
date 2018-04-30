import axios from "axios";

export default class Resourses {
  constructor() {}

  static createFakeData(startKey, counter) {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    var i = 0;
    var data = [];
    for (i = 0; i < counter; i++) {
      var fakeData = {
        id: startKey + i,
        original: "admire",
        translation: "admire",
        createDate: new Date().toLocaleString("ru", options)
      };
      data.push(fakeData);
    }

    return data;
  }

  static fetchWords(params) {
    const self = this;
    return axios({
      method: "post",
      url: "api/person/word-list",
      data: params
    });
    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: self.createFakeData(count, 20)
    //     });
    //   }, 3000);
    // });
    // return promise;
  }

  static saveWord(request) {
    return axios({
      method: "post",
      url: "api/word/save",
      data: request
    });
  }
}
