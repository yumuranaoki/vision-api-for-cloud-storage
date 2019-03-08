import React from 'react';
import { initializedFirebase } from './util/firebase';

class List extends React.Component {
  isMounted = false;
  constructor (props) {
    super(props);
    this.state = {
      textArray: []
    }
  }

  componentDidMount() {
    this.isMounted = true;

    this.db = initializedFirebase.firestore();
    this.db.collection("receipt").get()
    .then(querySnapShot => {
      const textArray = [];
      console.log(querySnapShot);
      querySnapShot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data().text}`);
        textArray.push(doc.data().text)
      })
      return textArray;
    }).then(res => {
        if (this.isMounted) {
          this.setState({ textArray: res })
        }
      }
    );
  }

  componentWillUnmount() {
    this.isMounted = false;
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
