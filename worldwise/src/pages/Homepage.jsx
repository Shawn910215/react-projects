import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      {/* use traditional anchor, it will reload whole page,which means send request to server. */}
      {/* <a href="/pricing">Pricing</a> */}

      {/* Use <Link> can build the navigate on client side */}
      {/* <Link to="/pricing">Pricing</Link> */}
    </div>
  );
}

export default Homepage;
