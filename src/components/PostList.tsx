import { useEffect, useState } from "react";
import axios from "axios";
//yarn add axios

interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostList() {
  const [data, setData] = useState<PostModel[]>();
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
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(resp);
      setData(resp.data);
    })();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <th>#</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Body</th>
      </thead>
      <tbody>
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
  );
}
