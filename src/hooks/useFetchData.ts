import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel } from "../components/PostList";

export const useFetchData = () => {
  const [data, setData] = useState<PostModel[]>(); // generic
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      setloading(true);
      setData(undefined);
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setTotal(+resp.headers["x-total-count"]);
      setData(resp.data);
      setloading(false);
    })();
  }, [page]);

  return {data, page, setPage, loading, total};
}