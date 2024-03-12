import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_API_URL;

import CardProduct from "../../components/Card/Product";
import CardComment from "../../components/Card/Comment";
import InputComment from "../../components/Input/Comment";
import { useParams } from "react-router-dom";
const socket = io("http://localhost:3001");
const exit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="ml-4 w-12 h-12 text-white hover:bg-slate-500 hover:rounded-lg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export default function index() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const formRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const fetchAsyncData = async () => {
      await Promise.all([
        (await axios.get(`${BASE_URL}/products/getAllData/${id}`)).data,
        (await axios.get(`${BASE_URL}/videos/getData/${id}`)).data,
      ]).then((values) => {
        const [data1, data2] = values;
        setProducts(data1.data);
        setVideo(data2.data[0]);
      });
    };

    fetchAsyncData();
    socket.emit("id rooms", id);
    socket.on("received history comments", (allComment) => {
      setComments(allComment);
    });
    socket.on("received comment", (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => {
      socket.off("received history comments");
      socket.off("received comments");
    };
  }, []);

  // * Important: DIsini scrollheight perlu mengetahui apakah data telah ada
  useEffect(() => {
    // Scroll to bottom whenever the 'comments' state updates
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [comments]);

  const postComment = (event) => {
    event.preventDefault();
    const dataPost = {
      id_video: id,
      username: formRef.current.username.value,
      comment: formRef.current.message.value,
    };
    socket.emit("send message", dataPost);
  };

  return (
    <div className="mx-2 my-8">
      <Link to={"/"}>
        <div className="mb-8">{exit}</div>
      </Link>
      <div className="flex justify-between mt-6">
        <div className="basis-2/12  mr-4 bg-secondary">
          <h1 className="text-xl font-bold text-black">Our Product</h1>
          <div className="overflow-y-auto">
            {products.map((product) => (
              <div key={product._id} className="mt-4 w-full">
                <CardProduct
                  title={product.title}
                  img={product.img}
                  price={product.price}
                  link={product.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-8/12 mx-4">
          <iframe
            className="w-full"
            height="400"
            src={video.thumbnail}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className="basis-2/12 grid grid-cols-1 content-between h-screen ml-4">
          <h1 className="text-xl font-bold text-white">Chat:</h1>
          <div
            ref={messagesContainerRef}
            className="bg-white rounded-md overflow-y-auto ">
            {comments.map((user) => (
              <div key={user._id} className="mt-4 mx-2.5 ">
                <CardComment comment={user.comment} username={user.username} />
              </div>
            ))}
          </div>
          <div className="mt-7">
            <InputComment getDataForm={postComment} formRef={formRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
