import { useEffect } from "react";

function App() {
  interface user {
    name: String;
    id: Number;
  }

  const user2 = {
    name: "Bruce",
    id: 1,
  };
  useEffect(() => {
    const apicall = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const json = await res.json();
      console.dir(json);
    };

    apicall();
  }, []);

  console.dir(user2);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
