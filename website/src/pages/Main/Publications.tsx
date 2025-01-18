import PublicationCard from "../../components/PublicationCard";

const mockPublications = [
  {
    title: "Understanding Public Accountability",
    date: "January 15, 2025",
    excerpt: "Explore the key principles of public accountability and how it shapes trust in governance.",
    link: "#",
  },
  {
    title: "The Ethics of Transparency in Government",
    date: "February 10, 2025",
    excerpt: "A deep dive into the role of transparency in building ethical governance frameworks.",
    link: "#",
  },
  // Add more publications as needed
];

function Publications() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      <p className="mb-4">Stay informed with articles and blogs published by the Blue Ethics Project.</p>
      <div className="space-y-6">
        {mockPublications.map((publication, index) => (
          <PublicationCard
            key={index}
            title={publication.title}
            date={publication.date}
            excerpt={publication.excerpt}
            link={publication.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Publications;
