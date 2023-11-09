enum Measurements {
    metric,
    imperial
}


//These have to be defined as strings or async storage won't work
enum AsyncKeys {
    lat = "LATITUDE",
    lon = "LONGITUDE"
    
}

export { Measurements, AsyncKeys }