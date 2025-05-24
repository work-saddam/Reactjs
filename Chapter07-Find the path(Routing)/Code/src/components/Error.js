import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
      <h1>OOPS!!</h1>
      <h3>Somthing went wrong!!</h3>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
