import React from "react";

// React lifecycle method:-
// Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// Mounting
// Constructor call => render call => React update the DOM => componentDidMount call(api & setState)

// Updating
// setState() => render call => React update the DOM => componentDidUpdate call

// Unmounting
//  componenetWillUnmount()

class UserClass extends React.Component {
  // we recieve props in constructor function.
  constructor(props) {
    super(props); //we must have to call super method, otherwise throw error.

    //create state variable inside "this.state" object
    this.state = {
      count: 0,
      userInfo: {
        login: "Default",
        public_repos: "Default",
      },
    };
    // console.log(this.props.name +" Child constructor")
  }

  // componentDidMount() invoke after the 1st render {same as useEffect(),
  //       but its not same, there are some difference when we didn't pass dependency array to useEffect()}.
  async componentDidMount() {
    // console.log(this.props.name +" Child component did mount")
    // API call
    const data = await fetch("https://api.github.com/users/work-saddam");
    const json = await data.json();
    // console.log(json)
    this.setState({
      userInfo: json,
    });
  }

  // componentDidUpdate() invokes when the state variable changes and react re-render the component.
  componentDidUpdate() {
    // console.log(this.props.name +" Child component did update")
  }

  // componentWillUnmount() invokes when we display another component.
  componentWillUnmount() {
    // console.log("component will unmount")
  }

  render() {
    //In class component, we have to use "this" keyword.
    const { name, location } = this.props;

    // console.log(this.props.name +" Child Render function")

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: Email@gmail.com</h3>
        <h3>login: {this.state.userInfo.login}</h3>
        <h3>Public repos: {this.state.userInfo.public_repos}</h3>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}

export default UserClass;
