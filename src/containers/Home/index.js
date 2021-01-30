import './style.css'
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component{
    render(){
        console.log("Props", this.props);
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students
})
export default connect(mapStateToProps, null)(Home);

