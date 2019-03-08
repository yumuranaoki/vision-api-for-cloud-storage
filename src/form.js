import React from 'react';
import { initializedFirebase } from './util/firebase';
require('dotenv').config()

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  componentDidMount() {
    const storage = initializedFirebase.storage();
    this.storageRef = storage.ref();
  }

  handleChange = changedFiles => {
    console.log(changedFiles[0]);
    this.setState({ file: changedFiles[0] });
  };

  submit = () => {
    if (!this.state.file) {
      return
    }

    const file = this.state.file;
    
  }

  render() {
    return (
      <div>
        <form>
          <input type='file' accept='image/*' onChange={e => this.handleChange(e.target.files)} />
        </form>
        <button onClick={() => this.submit()}>
          submit
        </button>
      </div>
    );
  }
}

export default Form; 