import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el2",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el3",
      title: "Kareta",
      amount: 94.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: "el3",
      title: "Kareta",
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
