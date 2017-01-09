          import React, {Component} from 'react';
          import ReactDOM from 'react-dom';
          import Profile from './github/Profile.jsx';
          import Search from './github/Search.jsx';

          class App extends Component{
          constructor(props){
          	super(props);
          	this.state = {
          		username: 'Arafin9',
          		userData: [],
          		userRepos: [],
          		perPage: 5
          	}
          }
            //Get user Data from github

            getUserData(){
            	$.ajax({
            		url: 'https://api.github.com/users/'+this.state.username
            		+'?client_id='+this.props.clientId+'&client_secret='
            		+this.props.clientSecret,
            		dataType: 'json',
            		cache: false,
            		success:function(data){
            			this.setState({
            				userData: data
            			});
            			console.log(data);
            			}.bind(this),
            				error: function(xhr,status,err){
            					this.setState({userName: null});
            					alert(err);

            				}.bind(this)

            	});
            }

            getUserRepos(){
              $.ajax({
                url: 'https://api.github.com/users/'+this.state.username
                +'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
                dataType: 'json',
                cache: false,
                success:function(data){
                  this.setState({
                    userRepos: data
                  });
                  console.log(data);
                  }.bind(this),
                    error: function(xhr,status,err){
                      this.setState({userName: null});
                      alert(err);

                    }.bind(this)

              });
            }
            componentDidMount(){
            		this.getUserData();
                this.getUserRepos();
            }

            handleFormSubmit(username){
              this.setState({username: username},
                  function(){
                    this.getUserData();
                    this.getUserRepos();
                 
              });
            }

          	render(){
          		return(
          			<div>
                  <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
          				<Profile {...this.state}/>
          			</div>
          		)
          	}
          }

          App.propTypes = {
          	clientId: React.PropTypes.string,
          	clientSecret: React.PropTypes.string
          }

          App.defaultProps = {
          	clientId: '7a894203c09e3b6210ee',
          	clientSecret:'08529db9afc894f26308ef61aab93caa9e34b84e'
          }
          export default App