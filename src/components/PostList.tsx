import { useEffect, useState } from "react";
import axios from "axios";
//yarn add axios

interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/*
  use* hooks  
    useState
    useEffect
    useCallback
*/
export default function PostList() {
  const [data, setData] = useState<PostModel[]>(); // generic
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);
  const [total, setTotal] = useState(0);
  //fetch
  useEffect(() => {
    //async/await

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((resp) => console.log(resp));

    // const main = async () => {
    //   const resp = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   console.log(resp);
    // };
    // main();

    //Immediately Invoked Function Expression, IIFE

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

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < total / 10) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={prev}>
              Previous
            </a>
          </li>

          {new Array(total / 10).fill(0).map((_: any, idx: number) => (
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#" onClick={next}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <thead>
          <th>#</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {loading && <h2>Loading...</h2>}
          {data &&
            data.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
