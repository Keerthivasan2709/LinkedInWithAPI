import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useFetch = (url, functionName) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}${url}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        dispatch(functionName(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);
};

export default useFetch;
export const sendLikeRequest = async (id, type) => {
  let data = await axios
    .post(
      `${process.env.REACT_APP_API_KEY}/post/like`,
      {
        postid: `${id}`,
        type: `${type}`,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then((res) => res.data);
  return data;
};
