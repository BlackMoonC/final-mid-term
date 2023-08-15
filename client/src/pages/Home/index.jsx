import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "../..//components/Tabs";
import Card from "../../components/Card";
const BASE_URL = import.meta.env.VITE_API_URL;

export default function index() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      console.log("Fetching", BASE_URL);
      const result = (await axios.get(`${BASE_URL}/contents/getAllData`)).data;
      setContents(result.data);
    };
    fetch();
  }, []);

  console.log(contents);

  return (
    <div className="bg-neutral-900 w-full h-screen p-7">
      <Tabs />
      <div className="grid grid-cols-6">
        {contents.map((content) => (
          <Card
            key={content.id}
            title={content.title}
            seller={content.seller}
            id_video= {content.idVideo}
            link={content.videos_content[0].url_image}
          />
        ))}
      </div>
    </div>
  );
}
