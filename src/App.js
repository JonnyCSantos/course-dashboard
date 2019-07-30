import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar'
import Video from './components/video/video'
import FirebaseService from './services/firebaseServices'

class App extends Component {
  state = {
    data: []
  };

  componentDidMount(){
    FirebaseService.getDataList('clients', (dataReceived) => this.setState({data: dataReceived}))
  }
  
  render(){
    return (
      <div className="App">
        <Video/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
