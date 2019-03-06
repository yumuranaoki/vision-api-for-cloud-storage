import React from 'react';
import firebase from 'firebase';

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      textArray: []
    }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
    })

    const db = firebase.firestore();
    db.collection("receipt").get()
    .then(querySnapShot => {
      const textArray = [];
      console.log(querySnapShot);
      querySnapShot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data().text}`);
        textArray.push(doc.data().text)
      })
      return textArray;
    }).then(res => this.setState({ textArray: res }));
  }

  render() {
    const list = [];
    for (let i = 0; i < this.state.textArray.length; i++) {
      list.push(<div key={i}>{this.state.textArray[i]}</div>)
    }
    console.log(this.state.textArray)
    return (
      <div>
        <h2>List</h2>
        { list }
      </div>
    )
  } 
}

export default List;
