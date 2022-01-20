import React, {useState, useEffect} from 'react';
import getTrending from '../apis/moviedb';
import GridItem from './GridItem';

export default function Grid(props) {
    const [gridItems, setGridItems] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const trendingMovies = await getTrending();
            console.log(trendingMovies);
            setGridItems(trendingMovies.results);
        }
        getTrendingMovies();
    }, []);

    return (
        <div className='container mt-5'>
            <div className='h4 mx-3'>Trending Movies</div>
            <div className='row'>
                <GridItem gridItems={gridItems}/>
            </div>
        </div>
    );
}
