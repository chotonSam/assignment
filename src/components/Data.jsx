import { useEffect, useState } from "react";
import Cards from "./Cards";

const Data = () => {
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);
  const [getUser, setGetUser] = useState(false);

  useEffect(() => {
    const url = "https://reqres.in/api/users?page=1";

    if (getUser) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const result = await response.json();
          setGetData(result.data);
          console.log(result.data);
        } catch (err) {
          console.log(err.message);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [getUser]);

  return (
    <div>
      <Cards getData={getData} loading={loading} setGetUser={setGetUser} getUser={getUser}
      />
    </div>
  );
};

export default Data;
