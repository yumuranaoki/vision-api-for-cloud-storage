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

    const db = initializedFirebase.firestore();
    this.unsubscribe = db.collection("receipt").onSnapshot(querySnapshot => {
      const textArray = [];
      querySnapshot.forEach(doc => {
        textArray.push(doc.data().text);
      })
      console.log('list: ', textArray.join(', '));
      if (this.isMounted) {
        this.setState({ textArray })
      }
    })
  }

  componentWillUnmount() {
    this.isMounted = false;
    this.unsubscribe();
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
