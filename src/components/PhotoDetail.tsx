import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const PhotoDetail = () => {
  const [data, setData] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/" + id)
      .then((resp) => setData(resp.data));
  });

  return (
    <div>
      {data && (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={data.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.title}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
      <button>Go Back</button>
    </div>
  );
};
