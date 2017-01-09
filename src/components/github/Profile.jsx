import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';

class Profile extends Component{

	render(){
		return(
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ID</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                      <span className="labellabel-primary">{this.props.userData.public_repos}</span>
                      <br/>
                      <span className="label label-success">{this.props.userData.public_gists}</span>
                      <span className="label label-info">{this.props.userData.public_followers}</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                   <ul className="list-group">
                      <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                    </ul>
                   </div>
                </div>
                <br/>
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
              </div>
            </div>
            <hr/>
            <h3> User Repositories </h3>
            <div><RepoList userRepos={this.props.userRepos} /></div>
          </div>
        </div>
        </div>
		)
	}
}
export default Profile