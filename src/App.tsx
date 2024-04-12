import { useState } from "react"
import DatePicker from "./components/DatePicker/DatePicker"

import { DragAndDrop } from "./components/DragDrop/DragAndDrop"
import SearchBtn from "./components/SearchBtn/SearchBtn"
import MeatballMenu from "./components/meatballMenu/MeatballMenu"
import BentoMenu from "./components/BentoMenu/BentoMenu"
import Spinner from "./components/Spinner/Spinner"
import Calender from "./components/Calender/Calender"
import RadioButton from "./components/RadioButton/RadioButton"
// import CheckBox from "./components/CheckBox/CheckBox"
import List from "./components/List/List"
import Progressbar from "./components/Progressbar/Progressbar"
import Navbar from "./components/Navbar/NavBar"


//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

//------------------------------------------------------------------------------------------//

function App() {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }

  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <h1>Komponenter</h1>
      <BentoMenu />
      <MeatballMenu />
      <Progressbar />
      <List />
      {/* <CheckBox /> */}
      <RadioButton />
      <Calender setDateChosed={setDateChosed} />
      <Spinner />
      <DatePicker
        labelText={"Pick your date!"}
        buttonText="Select Date!"
        minDate="2024-04-10"
        maxDate="2025-05-14"
        setDateChosed={setDateChosed}
        datePickerStyleRow={false}
      />
      <p>{date}</p>
      <DragAndDrop />
      <SearchBtn placeholder="test" />
    </>
  )
}

export default App
