import { Link } from "react-router-dom";
import { Organization } from "../types/api";

interface EntityCardProps {
  org: Organization;
}

function EntityCard({ org }: EntityCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">
        <Link to={`/entities/${org.id}`} className="text-blue-400 hover:underline">
          {org.name}
        </Link>
      </h2>
      <p>Phone: {org.phone}</p>
      <p>Address: {org.address.address1} {org.address.city}, {org.address.state} {org.address.postalCode}</p>
      <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        Visit Website
      </a>
    </div>
  );
}

export default EntityCard;
