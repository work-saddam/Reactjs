import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // API call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/work-saddam");
    const json = await data.json();
    // console.log(json)
    setUserInfo(json);
  };

  const { name, location } = props;

  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: Email@gmail.com</h3>
      <h3>login: {userInfo.login}</h3>
      <h3>Public repos: {userInfo.public_repos}</h3>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default User;
