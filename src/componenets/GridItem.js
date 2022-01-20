import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

export default function GridItem(props) {
    return (
        props.gridItems.map((gridItem) => {
            return (
                <div key={gridItem.id} className="col-12 col-sm-6 col-xl-2">
                    <div className="card my-2 shadow p-1" style={{backgroundColor:'var(--header-white)', height:'95%'}}>
                        <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${gridItem.poster_path}`} alt="card-alt" height="128px" width="128px"  className="card-img-top" />
                        <h5 className="card-title border-top ms-1">{gridItem.title}</h5>
                        <p className="card-text ms-1">
                            <small>
                                <span className='fw-bold'>Releasd On: </span> {new Date(gridItem.release_date).toDateString()}
                                <br />
                                <span className='fw-bold'>Rating: </span> {gridItem.vote_average}
                            </small>
                        </p>
                    </div>
                </div>
            );
        })
    )
}
