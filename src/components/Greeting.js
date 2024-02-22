import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGreeting } from "../redux/greetings/greetingsSlice";

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greetings);
 

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, 
  [dispatch]);

  const handleClick = () => {
    dispatch(fetchRandomGreeting());
  };

  if (isLoading) {
    return (
    <>
    <div className="loading">....isLoading</div>
    </>
    );
  }

  if (error) {
    return (
    <>
    <div className="loading">
      Something went wrong
    </div>
    </>
    );
  }

  return (
    <>
    <div className="title">Random Greeting</div>
    <div className="greeting">{greeting}</div>
    <button type="button" onClick={handleClick}>Get New Greeting</button>
    </>
  );
}

export default Greeting;
