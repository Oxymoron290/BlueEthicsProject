import { useEffect, useState } from "react";
import { organizationsClient } from "../../api";
import { Organization } from "../../types/api";
import EntityCard from "../../components/EntityCard";

function Entities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entities, setEntities] = useState<Organization[]>([]);
  const [error, setError] = useState<string | null>(null);

  const filteredEntities = entities.filter((entity) =>
    entity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    organizationsClient
      .getOrganizations()
      .then(setEntities)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Government Entities</h1>
      <p className="mb-4">Browse and explore government organizations and personnel information.</p>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search entities..."
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntities.length > 0 ? (
          filteredEntities.map((entity) => (
            <EntityCard
              key={entity.id}
              org={entity}
            />
          ))
        ) : (
          <p>No entities found.</p>
        )}
      </div>
    </div>
  );
}

export default Entities;
