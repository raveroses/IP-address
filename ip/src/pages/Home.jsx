import Header from "../components/Header";
import Body from "../components/Body";
import { useEffect, useState } from "react";
const Home = () => {
  const [datas, setDatas] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      alert("Please fill the required field");
    }
  };
  const handleOnchange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };
  console.log(searchInput);
  useEffect(() => {
    const APIfetching = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=at_p1K8U48b8CDGI5C0uQH0BEGoXXYsq&ipAddress=${searchInput}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setDatas(data);
      } catch (err) {
        alert(err.message);
      }
    };

    APIfetching();
  }, []);

  return (
    <>
      <Header
        handleSubmission={handleSubmission}
        handleOnchange={handleOnchange}
        searchInput={searchInput}
      />
      <Body datas={datas} />
    </>
  );
};
export default Home;
