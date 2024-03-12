import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/Search";
import Tabs from "../../components/Tabs";
import Card from "../../components/Card";
const BASE_URL = import.meta.env.VITE_API_URL;

export default function index() {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      console.log("Fetching", BASE_URL);
      const result = (await axios.get(`${BASE_URL}/contents/getAllData`)).data;
      setContents(result.data);
    };
    fetch();
  }, []);

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="mx-4 my-4">
      <header className="px-4 pt-4 flex">
        <div className="w-full mx-auto flex justify-center">
          <Search handleSearch={handleChange} />
        </div>
        <div className="flex flex-none items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user-profile"
          />
          <div className="font-medium dark:text-white">
            <div className="text-white">Rakhel Cakra K.Sera</div>
          </div>
        </div>
      </header>

      <nav className="my-4 px-4">
        <Tabs />
      </nav>
      <main className=" py-4">
        <div className="grid grid-cols-6">
          {contents
            .filter((value) => {
              return value.title?.toLowerCase().includes(search.toLowerCase());
            })
            .map((content) => (
              <div key={content.id} className="px-4 pb-8">
                <Card
                  title={content.title}
                  seller={content.seller}
                  id_video={content.idVideo}
                  link={content.videos_content[0].url_image}
                />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
