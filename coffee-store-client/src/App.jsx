import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffeeList = useLoaderData();
  console.log(loadedCoffeeList);
  const [coffees, setCoffees] = useState(loadedCoffeeList);
  return (
    <div className="container mx-auto px-12 ">
      <h1 className="text-center font-bold text-5xl my-8">
        Available Coffee : {loadedCoffeeList.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {loadedCoffeeList.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
      <div className="text-center mt-24">
        <Link to="/addcoffee">
          <button
            className="px-4 py-2 bg-yellow-200
       text-blue-400 hover:text-yellow-300 hover:bg-black "
          >
            Add Coffee.
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
