import React, { useRef } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import s from './style/index.module.scss'
import { defaultTheme } from './Theme';

const containerStyle = {
    width: '100%',
    height: '100%'
};

interface IMap {
    center: any,
    isLoaded: any
}

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl:false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControll: false,
    styles: defaultTheme
}

// const API_KEY = process.env.REACT_APP_API_MAPS_GOOGLE

const Map = ({ center, isLoaded }: IMap) => {
    // const [map, setMap] = React.useState(null)
    const mapRef = useRef(undefined)



    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = undefined;
    }, [])

    return (
        <div className={s.container}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    options={defaultOptions}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            ) : <>ghbdtn</>}
        </div>
    )
}

export default Map