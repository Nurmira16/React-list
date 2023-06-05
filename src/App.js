import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "el",
      title: "Udemy courses",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el2",
      title: "Coursera",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el3",
      title: "FreeCode",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el3",
      title: "Bootcamp",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
  ];
  return (
    <div>
      <h2> Lets get started </h2> <Expenses items={expenses} />
    </div>
  );
}

export default App;
