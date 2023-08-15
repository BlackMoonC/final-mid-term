import axios from "axios";
import { useEffect, useState, useRef } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

import CardProduct from "../../components/Card/Product";
import CardComment from "../../components/Card/Comment";
import InputComment from "../../components/Input/Comment";
import { useParams } from "react-router-dom";

export default function index() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchAsyncData = async () => {
      await Promise.all([
        (await axios.get(`${BASE_URL}/products/getAllData/${id}`)).data,
        (await axios.get(`${BASE_URL}/videos/getData/${id}`)).data,
        (await axios.get(`${BASE_URL}/comments/getAllData/${id}`)).data,
      ]).then((values) => {
        const [data1, data2, data3] = values;
        setProducts(data1.data);
        setVideo(data2.data[0]);
        setComments(data3);
      });
    };
    fetchAsyncData();
  }, []);

  const postCommnet = (event) => {
    event.preventDefault();
    const data =
      {
        "username": "misui",
      "comment": "test"
}
    
     axios.post(`${BASE_URL}/comments/post/${id}`, {
      username : formRef.current.username.value,
      comment : formRef.current.message.value
     })
     .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="flex justify-between p-7">
      <div className="overflow-y-auto h-screen mr-4">
        {products.map((product) => (
          <div key={product._id} className="mt-4">
            <CardProduct
              title={product.title}
              price={product.price}
              link={product.link}
            />
          </div>
        ))}
      </div>
      <div className="w-9/12 mx-4">
        <iframe
          className="w-full"
          height="400"
          src={video.thumbnail}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <div className="grid grid-cols-1 content-between h-screen ml-4">
        <div className="overflow-y-auto">
          {comments.map((user) => (
            <div key={user._id} className="mt-4 mx-2.5">
              <CardComment
                comment={user.comment}
                username={user.username}
              />
            </div>
          ))}
        </div>
        <div className="mt-7">
          <InputComment getDataForm={postCommnet} formRef={formRef} />
        </div>
      </div>
    </div>
  );
}
