import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const page = searchParams.get("page");

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Page: {page}</h2>

      <button className="border-2 px-50 bg-amber-500" onClick={() => setSearchParams({ category: "shirts" })}>
        Go to Shirts
      </button>
    </div>
  );
}

export default Products;