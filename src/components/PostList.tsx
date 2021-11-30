import { useEffect } from "react";
import axios from "axios";

export default function PostList() {
  //fetch
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => console.log(resp));
  return <div>PostList</div>;
}
