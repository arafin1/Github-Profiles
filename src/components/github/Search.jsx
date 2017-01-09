import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Search extends Component{

  onSubmit(e){
      e.preventDefault();
      console.log('submitted');
      let username = this.refs.username.value.trim();
      if(!username){
        alert('Please enter a Username');
        return ;
      }
      this.props.onFormSubmit(username);
      this.refs.username.value='';
  }
  render(){
     
    return(
     <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <label className="label label-success">Search Github Users</label>
        <input type="text" ref="username" className="form-control"></input>
      </form>
     </div>
    )
  }
}
export default Search