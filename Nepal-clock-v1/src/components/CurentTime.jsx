import { useEffect, useState } from "react";

export default function () {
  const [time,setTime] = useState(new Date());
  console.log("current time Printed.....")

  useEffect(() =>{
    const timerId = setInterval(() =>{
      setTime(new Date());
    },1000);
    return () => clearInterval(timerId);
    // Clean up function to prevent memory leak when component unmounts
  })
  return (
    <p className="fs-4">
      This current time is:{time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
}
