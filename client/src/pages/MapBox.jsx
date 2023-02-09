import { useEffect, useRef } from "react"
import mapBoxApi from "../mapBoxApi"

export default function MapBox() {
  const mapRef = useRef()

  useEffect(() => {
    mapBoxApi()
    console.log(mapRef.current.children)
  }, [])
  return (
    <>
      <div className='hobby-mapbox'>
        <div ref={mapRef} id='map'>
          {mapRef.current?.children ? null : (
            <h1 style={{ marginTop: "10vh", textAlign: "center" }}>
              不显示原因：<div>梯子没连/梯子线路信号不好</div>
              <div>解决办法：连梯子，再重新打开浏览器</div>
            </h1>
          )}
        </div>
      </div>
    </>
  )
}
