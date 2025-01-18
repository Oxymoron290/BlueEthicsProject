import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-96 space-y-8">
      <h2 className="text-2xl">Advocating Transparency and Accountability</h2>
        <ul className="flex space-x-6">
          <li><Link to="entities" className="text-lg text-blue-300 hover:text-blue-400">Government Entities</Link></li>
          <li><Link to="report" className="text-lg text-blue-300 hover:text-blue-400">Submit a Report</Link></li>
          <li><Link to="publications" className="text-lg text-blue-300 hover:text-blue-400">Publications</Link></li>
        </ul>
    </div>
  );
}

export default Home;