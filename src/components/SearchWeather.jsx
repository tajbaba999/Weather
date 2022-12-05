import React, { Component, useEffect, useState } from "react";

const SearchWeather = () =>  {
    const  [search, setSearch] = useState("london")
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    let componentMounted = true;

    useEffect(() => {
    const  featchWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0f355cac6253a891100617c2a88c70da`);
        if(componentMounted){
            setData(await response.json());
            console.log(data)
        }
        return () => {
           componentMounted = false;  
        }
    }
     featchWeather();
    }, [])
    

  return (
    <div>
      <div className="conatainer mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                    />
                <button type="submit" className="input-group-text" id="basic-addon2">
                    <i className="fas fa-search"></i>

                </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                <h2 className="card-title">{data.name}</h2>
                <p className="card-text lead">
                Monday, December 05, 20222
                </p>
                  
                <hr/>
              <i className="fas fa-cloud fa-4x"></i>
              <h1 className="fw-bolder mb-5">35345.78 &deg;C</h1>
              <p className="lead fw-bolder mb-0">Cloud</p>
              <p className="lead">33.01&deg;C | 35.01&deg;C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWeather;
