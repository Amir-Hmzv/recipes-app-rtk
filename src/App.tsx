import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import { useGetRecipesMutation } from "./services/recipeApi";
import {
  MDBRow,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import Card from "./components/Card";
import Sniper from "./components/Sniper";
import Modal from "./components/Modal";

  const options  = [
      {
        label: 'Vegan',
        value: 'vegan'
      },
      {
        label: 'Vegetarian',
        value: 'vegetarian'
      },

      {
        label: 'Paleo',
        value: 'paleo'
      },
      {
        label: 'Dairy Free',
        value: 'dairy-free'
      },
      {
        label: 'Low Sugar',
        value: 'low-sugar'
      },
  ]



const App = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [health, setHealth] = useState("vegan");
  const [show, setShow] = useState(false);
  const [reciep, setReciep] = useState({});

  const [getRecipes,{isLoading,data}] =useGetRecipesMutation()

  useEffect(() => {
    getFoodRecipes()
  
    return () => {
      
    }
  }, [health,query])
  
  const  getFoodRecipes = async () => {
      await getRecipes({query,health})
  } 


    const handleSearch = () =>  {
        setQuery(value)
        setValue('')
    }

    const handleClick = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setHealth(e.target.value)
    }

    const toggleSHow = (reciep:any) => {
        setShow(!show)
        setReciep(reciep)
    }

    if (isLoading) {
      return <Sniper/>
    }

  return (
    <div
      className="App"
      style={{
        margin: "auto",
        maxWidth: "1000px",
        padding: "15px",
        alignContent: "center",
      }}>
        <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-center">
            <h5 className="fw-bold mt-2">Food Recipe App</h5>
          </MDBNavbarBrand>
        </MDBContainer>
        </MDBNavbar>
        <div className="row g-1 align-items-center mt-2">
          <MDBInput 
          wrapperClass="col-auto"
          label='search recipe'
          type={'text'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <div className="col-auto">
            <MDBBtn onClick={handleSearch} >search</MDBBtn>
          </div>
          <div className="col-auto">
            <select name="" className="categoryDroppdown" onChange={handleClick} value={health} id="">
                {options.map((option,index) => (
                  <option value={option.value || ''}>{option.label}</option>
                ))}
            </select>
          </div>
        </div>
        <MDBRow className="row-cols-1 row-cols-md-3">
          {data?.hits?.map((item:any) => (
           <Card toggleSHow={toggleSHow} recipe={item.recipe}/>
          ) )}
        </MDBRow>
        {
          show && (
            <Modal toggleSHow={toggleSHow} setShow={setShow} recipe={reciep} show={show} /> 
          )
        }
      </div>
  );
};

export default App;
