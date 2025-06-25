import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// React lifecycle method:-
// Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// Mounting
// Constructor call => render call => React update the DOM => componentDidMount call(api & setState)

// Updating
// setState() => render call => React update the DOM => componentDidUpdate call

// Unmounting
//  componenetWillUnmount()

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent Component did mount")
  }

  render() {
    // console.log("Parent Render function")

    return (
      <div className="about m-4">
        <h1 className="font-semibold text-2xl">About us</h1>
        <h2 className=" text-l pb-3">Trusted food ordering website</h2>
        <h2 className="font-semibold text-xl ">Our Team Members</h2>
        {/* <User name={"Alex (Function)"} location={"California"} /> */}
        <UserClass name={"Bob (Class)"} location={"New York"} />
        <UserClass name={"Elon (Class)"} location={"United State"} />
      </div>
    );
  }
}

/**
 - Parent Constructor
 - Parent Render

    - Bob Constructor
    - Bob Render

    - Elon Constructor
    - Elon Render

                                        // Why componentDidMount not call after each child, instead they call together. 
    < DOM UPDATED - IN SINGLE BATCH >   //Because DOM manipulation is very heavy task.
                                        //React is optimising by batching the render phase then updated the DOM in one time.
    - Bob componentDidMount
    - Elon componentDidMount

 - Parent componenetDidMount
 */

export default About;
