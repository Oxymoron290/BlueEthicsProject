import { Link } from "react-router-dom";
import { Entity } from "../types/api";

interface EntityCardProps {
  entity: Entity;
}

function EntityCard({ entity }: EntityCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">
        <Link to={`/entities/${entity.id}`} className="text-blue-400 hover:underline">
          {entity.name}
        </Link>
      </h2>
      <p>Phone: {entity.phone}</p>
      <p>Address: {entity.address}</p>
      <a href={entity.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        Visit Website
      </a>
    </div>
  );
}

export default EntityCard;
