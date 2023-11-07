

export default function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number){
    const a = Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(lon1 * Math.PI / 180) * Math.cos(lon2 * Math.PI / 180)
    const b = Math.cos(lat1 * Math.PI / 180) * Math.sin(lon1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(lon2 * Math.PI / 180)
    const c = Math.sin(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180)
    
    const R_mi = 3960
    const R_km = 6370

    const dist = Math.acos(a + b + c) * R_mi

    return dist

}