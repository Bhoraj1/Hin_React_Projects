import { useSelector } from "react-redux";

export default function CounterResults () {
 //useSelector get slice from the store and through this we can create subscriptions
  const counter = useSelector((store) => store.count)
  return (
    <>
      <p className="lead mb-4">Counter Current Value is:{counter}</p>
    </>
  );
}
