// import './App.css'
// import React, {Component} from 'react';
// import Home from './containers/Home';


// export default class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Home/>
//             </div>
//         )
//     }
// }




////-------------Piaic----

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Users } from './actions/users';

function App(props) {
  let desc="Welcome to Aziat University of Engineerig & Tech"
//   useEffect(() => {
//     props.dispatch(Users({desc}) )
//   }, [])
  

  console.log(props.users, 'users');
  return (
    <div className="App">
        {props.users.name} {props.users.lastName} {props.users.desc}
    </div>
  );
}
function mapStateToProps({users}) {
  return{
    users
  }
}
const mapDispatchToProps = (dispatch) => ({
    
    Users: (users) => dispatch(Users(users))
    
  })
export default connect(mapStateToProps, mapDispatchToProps)(App);

