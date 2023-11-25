
import React from 'react'
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import Navbar from "./Navbar";



const SearchBar = () => {
    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    return (
        <>
            <div className="container">
                <Navbar />
                <SearchBar />
                <div className="left-content">
                    <Card
                        pokemon={pokeData}
                        loading={loading}
                        infoPokemon={(poke) => setPokeDex(poke)}
                    />

                    <div className="btn-group">
                        {prevUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl(prevUrl);
                                }}
                            >
                                Previous
                            </button>
                        )}

                        {nextUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl(nextUrl);
                                }}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    );
};


export default SearchBar;