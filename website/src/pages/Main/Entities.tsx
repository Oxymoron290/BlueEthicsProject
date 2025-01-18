import { useState } from "react";
import EntityCard from "../../components/EntityCard";

const mockEntities = [
  {
    name: "Bedford Police Department",
    phone: "+18179522440",
    address: "2121 L Don Dodson Dr, Bedford, TX 76021",
    website: "https://bedfordtx.gov/174/Police-Department",
  },
  {
    name: "Fort Worth Fire Department",
    phone: "+18179520000",
    address: "123 Main St, Fort Worth, TX 76102",
    website: "https://fortworthtexas.gov/fire/",
  },
  // Add more entities as needed
];

function Entities() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEntities = mockEntities.filter((entity) =>
    entity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          filteredEntities.map((entity, index) => (
            <EntityCard
              key={index}
              name={entity.name}
              phone={entity.phone}
              address={entity.address}
              website={entity.website}
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
