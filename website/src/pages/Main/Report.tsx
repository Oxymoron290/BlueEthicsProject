function Report() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Submit a Report</h1>
      <p className="mb-4">Use this form to report issues or provide information about government entities and personnel. We accept complaints and commendations.</p>
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
            placeholder="Enter the subject of your report"
          />
        </div>
        <div>
          <label htmlFor="details" className="block font-semibold mb-2">Details</label>
          <textarea
            id="details"
            name="details"
            rows={6}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg"
            placeholder="Describe your report in detail"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Submit Report
        </button>
      </form>
    </div>
  );
}
export default Report;
