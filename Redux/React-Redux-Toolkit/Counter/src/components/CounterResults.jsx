import { useSelector } from "react-redux";

export default function CounterResults () {
 //useSelector get slice from the store and through this we can create subscriptions
  const { counterVal} = useSelector((store) => store.counter)
  return (
    <>
      <p className="lead mb-4">Counter Current Value is:{counterVal}</p>
    </>
  );
}
