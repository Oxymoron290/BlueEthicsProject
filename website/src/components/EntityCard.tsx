interface EntityCardProps {
    name: string;
    phone: string;
    address: string;
    website: string;
  }
  
  function EntityCard({ name, phone, address, website }: EntityCardProps) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Visit Website
        </a>
      </div>
    );
  }
  
  export default EntityCard;
  