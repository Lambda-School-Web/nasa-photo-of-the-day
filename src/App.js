import React, { useState, useEffect } from "react";
import APOD from "./components/APOD";
import nasaAPOD from "./api/NasaAPOD";
import { NasaH1, AppDiv, DescP } from "./styles/components";

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("2019-09-12");

  useEffect(() => {
    nasaAPOD
      .get("", {
        params: { date: date }
      })
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [date]);

  const handleDateChange = date => {
    function changeMonth(date) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let monthNum = months.indexOf(date.substring(5, 8)) + 1;
      return monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
    }

    const regex = /(\w{3}) (\d{2}) (\d{4})/;
    const regex2 = /[A-Za-z]+/;

    let newDate = date
      .toString()
      .substring(4, 15)
      .replace(regex, `$3-$1-$2`);

    newDate = newDate.replace(regex2, changeMonth(newDate));

    setDate(newDate);
  };

  return (
    <AppDiv>
      <NasaH1>Nasa's Astronomy Picture of the Day</NasaH1>
      {data ? (
        <APOD data={data} date={new Date(date)} callback={handleDateChange} />
      ) : (
        <DescP>Loading...</DescP>
      )}
    </AppDiv>
  );
}

export default App;
