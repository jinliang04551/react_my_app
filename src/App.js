import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CLASS } from 'postcss-selector-parser';
import Reservation from './Reservation'
import Calculator from './Calculator'
import SignUpDialog from './Dialog'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


function App() {
  return (
    <div>
      <Welcome name=" Sara" />
      <Welcome name=" Cahal" />
      <Welcome name=" Edite" />
      <Clock />
      <LoginControl />
      <MailBox unreadMessages={messages}/>
      <Page />
      <NumberList numbers ={numbers}/>
      <Blog posts={posts}/>
      <NameForm />
      <FlavorForm />
      <Reservation />
      <Calculator />
      <SignUpDialog />
  
      </div>
  );
}

export default App;

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

// function actionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('This link was clicked');
//   }
// }

function actionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()}
    
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {this.tick()}, 1000);
  };
  

  componentWillUnmount() {
    clearInterval(this.timerID);
     console.log("unmount");
  }

  tick (){
    this.setState({date: new Date()});
  }

  render(){
    return (
       <div>
         <h1>Hello,world</h1>
         <FormattedDate date = {this.state.date}/>
         {/* <a href="http://www.baidu.com" onClick={actionLink}>click me</a> */}
         <Toggle/>
       </div>
    );
  }
}


class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(){
     this.setState(state =>({
       isToggleOn :!this.state.isToggleOn
     }));
   }

   render(){
     return(
       <button onClick={this.handleClick}>
         {this.state.isToggleOn ? 'ON' : 'OFF'}
       </button>
     );
   }
}

class LoggingButton extends React.Component {
   // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。

  handleClick = () =>{
    console.log('this is:',this);
  }

  render(){
    return (
        <button onClick={this.handleClick}>Click me</button>
    );
  }
}

function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;
   if(isLoggedIn){
     return <h1>hello user</h1>
   }else {
     return <h1>please sign up</h1>
   }
}



function LoginButton(props) {
  return(
      <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick (){
    this.setState({isLoggedIn:true});
  }

  handleLogoutClick () {
    this.setState({isLoggedIn:false});
  }

  render(){
    const isLoggedIn =  this.state.isLoggedIn;
    let button;

    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }else {
       button = <LoginButton onClick={this.handleLoginClick}/>;
    }

    return (
      <div>
          <Greeting isLoggedIn={isLoggedIn}/>;
          {button}
      </div>
    );
  }
}

function MailBox(props) {
   const unreadMessages =  props.unreadMessages;
   return (
     <div>
       <h1>Hello!</h1>
       {unreadMessages.length > 0 && 
        <h2>you have {unreadMessages.length} unread messages</h2>
       }
       <b>this is a b label </b>
     </div>
   );
}

// const messages = ['React', 'Re: React', 'Re:Re: React'];
const messages = [];



function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className= "warning">Warning</div>
  );
}


class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick (){
    this.setState( state =>({
      showWarning: !this.state.showWarning
    }));
  }

  componentDidMount(){

  }
  
  render (){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ?'hide':'show'}
        </button>
      </div>
    );
  }
}

function ListItem(props) {
  //这里不需要指定key
  return <li>{props.value}</li>
}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(
     //这里需要指定key
        (number) =>
        <ListItem key={number.toString()} value={number}/>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];



function Blog(props) {
  const sideBar = (
    <ul>
      {props.posts.map((post) =>
      <li key={post.id}>
         {post.title}
      </li>
      )}
    </ul>
  );


  const content = props.posts.map((post)=>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sideBar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value.toUpperCase()});
  }

  handleSubmit(event){
    alert('提交的名字:'+this.state.value);
    event.preventDefault();
  }
  
  render (){
    return (
       <form onSubmit= {this.handleSubmit}>
          <label >
            名字:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
            <input type="submit" value="提交"/>
       </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props){
     super(props);
     this.state = {value:'cocount'};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    alert('你喜欢的风味是:'+ this.state.value);
    event.preventDefault();
  }

  render(){
     return (
         <form onSubmit={this.handleSubmit}>
             <label>
               选择你喜欢的风味:
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="grapefruit">柚子</option>
                  <option value="lime">酸橙</option>
                  <option value="cocount">椰子</option>
                  <option value="mango">芒果</option>
               </select>
             </label>
             <input type="submit" value="提交"/>
         </form>
     );
  }
}




function SplitPane(props) {
  return(
     <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
     </div>
  );
}



