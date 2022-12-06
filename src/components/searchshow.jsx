import React from 'react'

const searchshow = () => {
    // const [data, setdata] = useState([])
    const [search, setsearch] = useState()
    useEffect(() => {
      searchdata();
    }, [])
    
    const searchdata = async() =>{
        const req = await fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=0f355cac6253a891100617c2a88c70da');
        const res = await req.json();
       setsearch(res);
    } 

  return (
    <div>searchshow</div>
  )
}

export default searchshow