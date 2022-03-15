import React, { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { getData } from '../utils/data';

export default function Characters() {
    const ENDPOINT = 'characters';
    const URL = 'https://hp-api.herokuapp.com/api/'
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        let data = getLocalStorage(ENDPOINT);
        if (data.length > 0) {
            setCharacters(data);
        } else {
            getData(URL, ENDPOINT)
                .then((data) => {
                    setCharacters(data);
                    setLocalStorage(ENDPOINT, data);
                })
        }
    }, []);
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <h2 className='mb-4'>Pure Blood Characters</h2>
                    <table className="table table-hover" style={{ maxwidth: '600px' }}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>House</th>
                                <th>Ancestry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.filter(character => character.ancestry === 'pure-blood' && character.image).map((character, i) => <Character key={`${i}${character.name}`} character={character} />)}
                        </tbody>
                    </table>
                    <h2 className='mb-4'>Half Blood Characters</h2>
                    <table className="table table-hover" style={{ maxwidth: '600px' }}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>House</th>
                                <th>Ancestry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.filter(character => character.ancestry === 'half-blood' && character.image).map((character, i) => <Character key={`${i}${character.name}`} character={character} />)}
                        </tbody>
                    </table>
                    <h2 className='mb-4'>Muggleborn Characters</h2>
                    <table className="table table-hover" style={{ maxwidth: '600px' }}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>House</th>
                                <th>Ancestry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.filter(character => character.ancestry === 'muggleborn' && character.image).map((character, i) => <Character key={`${i}${character.name}`} character={character} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

const Character = ({ character }) => {
    return (
        <tr>
            <td><img src={character.image}></img></td>
            <td>{character.name}</td>
            <td>{character.house}</td>
            <td>{character.ancestry}</td>
        </tr>
    )
}