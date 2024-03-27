import React, { useEffect, useState } from "react";
import "../searchSuggestion/style.css";
import InputComponent from "./InputeComponent";
import Suggestions from "./suggestions";
export default function SearchSuggestion() {
  const [users, setUser] = useState("");
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.users.length > 0) {
      //console.log(data.users);
      setUser(data && data.users.map((item) => item.firstName));
    }
  };

  useEffect(() => {
    if (value.length > 1) {
      const filtered = users.filter(
        (item) => item.toLowerCase().indexOf(value.toLowerCase()) > -1
      );

      //filtered && setFilteredData(filtered)
      setFilteredData(filtered);
      setShowSuggestion(true);
    }
    if (value.length < 2) {
      setShowSuggestion(false);
    }
  }, [value]);
  useEffect(() => {
    fetchData("https://dummyjson.com/users");
  }, [value]);
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "15px"}}>
      <p>Search suggestion {value.length}</p>
      <InputComponent users={users} value={value} setvalue={setValue} />
      <Suggestions
        filteredText={filteredData}
        setShowSuggestion={setShowSuggestion}
        toggleSuggestion={showSuggestion}
        setValue={setValue}
      />
    </div>
  );
}
