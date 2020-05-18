import React from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person : [
        {
          name : 'David Garcia',
          phone: '000-000-0000',
          DOB: '08/31/1995'
        },
        {
          name : 'Kelvin Melendez',
          phone: '000-000-0000',
          DOB: '02/19/1996'
        },
        {
          name : 'Joshua McNeill',
          phone: '000-000-0000',
          DOB: '11/08/1993'
        },
        {
          name : 'LeeAngelo Riley',
          phone: '000-000-0000',
          DOB: '03/28/2001'
        },
        {
          name : 'Kyle Faulkner',
          phone: '000-000-0000',
          DOB: '05/13/1997'
        }
      ]
    }
  }
  render() {
    return (
    <BasicInfo person={this.state.person} />
    )
  }
}


export default App;
