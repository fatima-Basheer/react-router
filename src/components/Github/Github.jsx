import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Github() {
  const location = useLocation();
  // const [data, setData] = useState(null);
  const data = useLoaderData();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className="bg-amber-950 text-white text-3xl text-center p-4">
      {data ? <>Github Followers: {data.followers}</> : "Loading..."}
       <p>Current page: {location.pathname}</p>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
