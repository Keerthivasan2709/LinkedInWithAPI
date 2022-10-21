import axios from "axios"

export const sendLikeRequest = async (id, type) => {
    let data = await axios.post(`${process.env.REACT_APP_API_KEY}/post/like`, {
        "postid": `${id}`,
        "type": `${type}`,
    },
        {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).then((res) => res.data)
    return data;
}

// export const feedRequest = async () => {
//     let data = axios.get(`${process.env.REACT_APP_API_KEY}/post`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//     }).then((res) => res.data )
//     return data;
// }