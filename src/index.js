import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       posts: ['hello', 'world'],
//     }
//   }

//   componentDidMount() {
//     // this.timerID = setInterval(() => {
//     //   console.log(this.timerID)
//     //   this.tick()
//     // }, 1000)
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({
//           posts: ['hello', 'guys'],
//         })
//       })

//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then((response) => response.json())
//     //   .then((json) => {
//     //     this.setState({
//     //       posts: json,
//     //     })
//     //   })
//   }

//   componentWillUnmount() {}

//   // tick() {
//   //   this.setState((state, props) => ({
//   //     date: new Date(),
//   //     name:
//   //       'hello ibad' + ' ' + state.date.toLocaleTimeString() + ' ' + props.bro,
//   //     bro: 'prop updated',
//   //   }))
//   // }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.posts}.</h2>
//         <ul>
//           {this.state.posts.map((post) => {
//             return <li>{post}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// Clock

// function OuterProp(props) {
//   return <div className='outerProp'>{props.name}</div>
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       one: 'hello',
//       two: 'world',
//     }
//   }
//   componentDidMount() {
//     console.log(this)
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }

//   tick() {
//     this.setState({
//       two: 'changed',
//     })
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.one}</div>
//         <div>
//           <OuterProp name={this.state.two} />
//         </div>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById('root'))

// Toggle component

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       istoggleOn: true,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     // console.log(this) refers to toggle class..
//     this.setState((state) => ({
//       istoggleOn: !state.istoggleOn,
//     }))
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.istoggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById('root'))

// Greeting //

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // isLoggedIn: false,
//       // isLoggedIn: this.props.bro,
//     }
//   }

//   // this.setState khud se bhi property create karraha ha wtf surprised...

//   LogIn = () => {
//     this.setState((state) => ({
//       isLoggedIn: !state.isLoggedIn,
//     }))
//   }

//   render() {
//     if (this.state.isLoggedIn === true) {
//       return (
//         <div>
//           <UserGreeting />
//           <button onClick={this.LogIn}>logOut</button>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <GuestGreeting />
//           <button onClick={this.LogIn}>login</button>
//         </div>
//       )
//     }
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById('root'))

//======================================//

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn
//   if (isLoggedIn) {
//     return <UserGreeting />
//   }
//   return <GuestGreeting />
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//     this.state = { isLoggedIn: false }
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true })
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false })
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn
//     let button
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

// ReactDOM.render(<LoginControl />, document.getElementById('root'))

// ============================

// function Mailbox(props) {
//   const unreadMsg = props.unreadMessages
//   return (
//     <div>
//       <h1>Hello broh!</h1>
//       {unreadMsg.length > 0 && <h2>unreadMessages are greater than zero</h2>}
//     </div>
//   )
// }

// const msg = ['wdnjdnw']

// ReactDOM.render(
//   <Mailbox unreadMessages={msg} />,
//   document.getElementById('root')
// )

// ========================

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null
//   }

//   return <div className='warning'>Warning!</div>
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { showWarning: true }
//     this.handleToggleClick = this.handleToggleClick.bind(this)
//   }

//   handleToggleClick() {
//     this.setState((state) => ({
//       showWarning: !state.showWarning,
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Page />, document.getElementById('root'))

//============================

// function ListItemEach(props) {
//   return <li>{props.value}</li>
// }

// function ListGenerate(props) {
//   var numbers = props.number
//   var listItem = numbers.map((number) => (
//     // <li key={number.toString()}>{number}</li>
//     <ListItemEach key={number.toString()} value={number} />
//   ))

//   return <ul>{listItem}</ul>
// }

// const num = [1, 2, 3, 4, 5]

// ReactDOM.render(<ListGenerate number={num} />, document.getElementById('root'))

//=================================//
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: 'hello yawrrr' }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value })
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input
//               type='text'
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type='submit' value='Submit' />
//         </form>
//         <div>{this.state.value}</div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<NameForm />, document.getElementById('root'))

// ==================================

// class Refs extends React.Component {
//   constructor(props) {
//     super(props)
//     this.inputValue = React.createRef()
//     this.state = {
//       appendedValue: '',
//     }
//   }

//   componentDidMount = () => {
//     this.inputValue.current.focus()
//     console.log(this.inputValue)
//   }

//   handleChange = () => {
//     this.setState({
//       appendedValue: this.inputValue.current.value,
//     })
//   }

//   clickMethod = () => {
//     alert(this.inputValue.current.value)
//   }

//   render() {
//     return (
//       <div>
//         <input type='text' value={this.state.appendedValue} />
//         <br />
//         <input
//           type='text'
//           ref={this.inputValue}
//           onChange={this.handleChange}
//         ></input>
//         <button onClick={this.clickMethod}>click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Refs></Refs>, document.getElementById('root'))

//======================================

// function Page(props) {
//   return (
//     <div>
//       <div>{props.left}</div>
//       <div>{props.right}</div>
//     </div>
//   )
// }

// function LeftDiv(props) {
//   return <div>Hello {props.leftChild}</div>
// }

// function RightDiv(props) {
//   return <div>ho {props.rightChild}</div>
// }

// function App() {
//   return (
//     <Page
//       left={<LeftDiv leftChild='kese'></LeftDiv>}
//       right={<RightDiv rightChild='yawrrr'></RightDiv>}
//     ></Page>
//   )
// }

// ReactDOM.render(<App></App>, document.getElementById('root'))

// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this)
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>
//   }
// }

// ReactDOM.render(<LoggingButton />, document.getElementById('root'))
