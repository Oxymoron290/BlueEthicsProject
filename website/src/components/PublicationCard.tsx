interface PublicationCardProps {
    title: string;
    date: string;
    excerpt: string;
    link: string;
  }
  
  function PublicationCard({ title, date, excerpt, link }: PublicationCardProps) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">Published on {date}</p>
        <p className="mt-2">{excerpt}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          Read More
        </a>
      </div>
    );
  }
  
  export default PublicationCard;
  