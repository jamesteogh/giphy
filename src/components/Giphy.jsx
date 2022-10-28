import React, {useEffect, useState} from "react";
import axios from "axios"

const Giphy = () => {

        const [data, setData] = useState([])
        const [search, setSearch] = useState("");
    useEffect(()=> {
        const fetchData = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "rCOHuGVSPlSsrAS0IX5XOPczdQkZgq0b"
                }
            })
            console.log(results)
            setData(results.data.data)
        }

        fetchData()

    }, [])

    const renderGifs = () => {
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url}/>
                </div>
            )
        })
    }

    const handleSearchChange = event => {
        setSearch(event.target.value);
        };
    
    const handleSubmit = async event => {
        event.preventDefault();
    }
    
    return (
        <div className="m-2">
            <form className="form-inline justify-content-center m-2">
                <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="search"
                className="form-control"
                />
                <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary mx-2"
                >
                Go
                </button>
            </form>
            <div className="container gifs">{renderGifs()}</div>
        </div>
    )
}

export default Giphy;