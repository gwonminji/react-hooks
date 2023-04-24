
import useAxios from './useAxios';

function Axios() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(loading, JSON.stringify(data), error);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default Axios;