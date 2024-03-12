import { Link } from "react-router-dom/cjs/react-router-dom.min";

function index(props) {
  return (
    <>
      <Link to={`/stream/${props.id_video}`}>
        <div
          style={{
            background: `url(${props.link})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex flex-col justify-between max-w-sm h-72 min-h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div></div>
          <div className="px-5 bg-black/50">
            <h5 className="mb-2 font-bold tracking-tight text-white dark:text-white">
              {props.title}
            </h5>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              {props.seller}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default index;
