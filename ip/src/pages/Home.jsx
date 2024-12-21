import Header from "../components/Header";
import Body from "../components/Body";
import { useEffect, useState } from "react";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      alert("Please fill the required field");
      return;
    }

    fetchIPData(searchInput.trim());
    setSearchInput("");
  };

  const handleOnchange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const fetchIPData = async (input) => {
    try {
      const response = await fetch(`https://ipapi.co/${input}/json`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setDatas(data);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (!searchInput) return;
    fetchIPData(searchInput);
  }, [searchInput]);

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
