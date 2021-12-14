import { useFetchData } from "../hooks/useFetchData";
//yarn add axios

export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/*
  Refactoring
  بهینه کردن ساختار بدون تغییر در رفتار کد
*/
export default function PostList() {
  const { page, setPage, data, total, loading } =
    useFetchData<PostModel>("posts");

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
            <button className="page-link" onClick={prev}>
              Previous
            </button>
          </li>

          {new Array(total / 10).fill(0).map((_: any, idx: number) => (
            <li key={idx} className="page-item">
              <button className="page-link" onClick={() => setPage(idx + 1)}>
                {idx + 1}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button className="page-link" onClick={next}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={100}>
                <h2>Loading...</h2>
              </td>
            </tr>
          )}
          {data &&
            data.map((post) => (
              <tr key={"post-" + post.id}>
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
