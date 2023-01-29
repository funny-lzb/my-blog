import {useEffect} from 'react'
import mapBoxApi from '../mapBoxApi'

export default function MapBox() {

    useEffect(() => {
        mapBoxApi()
      }, [])
  return (
    <>
        <div className='hobby-mapbox'>
          <div  id='map'></div>
        </div>
    </>
  )
}
