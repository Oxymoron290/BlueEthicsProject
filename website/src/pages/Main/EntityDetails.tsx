import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Entity, Employee } from "../../types/api";
import { entitiesClient } from "../../api";
import HorizontalSplitBar from "../../components/HorizontalSplitBar";
import EmployeeList from "../../components/EmployeeList";

function EntityDetails() {
  const { id } = useParams<{ id: string }>();
  const [entity, setEntity] = useState<Entity | null>(null);
  const [filter, setFilter] = useState<"all" | "employed" | "separated">("all");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchEntity = async () => {
      const result: Entity = await entitiesClient.getEntityById(id);
      setEntity(result);
    };

    fetchEntity();
  }, [id]);

  useEffect(() => {
    if (!entity) return;

    let filtered = entity.employees;
    if (filter === "employed") {
      filtered = entity.employees.filter((emp) => !emp.separationDate);
    } else if (filter === "separated") {
      filtered = entity.employees.filter((emp) => emp.separationDate);
    }
    setFilteredEmployees(filtered);
  }, [entity, filter]);

  if (!entity) {
    return <p>Loading...</p>;
  }

  const totalComplaints = filteredEmployees.reduce((sum, emp) => sum + emp.complaints, 0);
  const totalCommendations = filteredEmployees.reduce((sum, emp) => sum + emp.commendations, 0);
  const medianSalary =
    filteredEmployees.length > 0
      ? filteredEmployees
          .map((emp) => emp.salary)
          .sort((a, b) => a - b)[Math.floor(filteredEmployees.length / 2)]
      : 0;

  const genderStats = filteredEmployees.reduce((acc: Record<string, number>, emp) => {
    acc[emp.gender] = (acc[emp.gender] || 0) + 1;
    return acc;
  }, {});

  const ethnicityStats = filteredEmployees.reduce((acc: Record<string, number>, emp) => {
    acc[emp.Ethnicity] = (acc[emp.Ethnicity] || 0) + 1;
    return acc;
  }, {});

  const genderCategories = Object.entries(genderStats).map(([label, count]) => ({
    label,
    percentage: (count / filteredEmployees.length) * 100,
    color: label === "Male" ? "bg-blue-500" : "bg-pink-500",
  }));

  const ethnicityCategories = Object.entries(ethnicityStats).map(([label, count], index) => ({
    label,
    percentage: (count / filteredEmployees.length) * 100,
    color: [
      "bg-green-700",
      "bg-yellow-700",
      "bg-red-700",
      "bg-purple-700",
      "bg-teal-700",
    ][index % 5],
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{entity.name}</h1>

      {/* Filter Tabs */}
      <div className="flex justify-end space-x-4">
        {["all", "employed", "separated"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-lg ${
              filter === status ? "bg-blue-500 text-white" : "bg-gray-700 text-blue-300"
            }`}
            onClick={() => setFilter(status as "all" | "employed" | "separated")}
          >
            {status === "all" && "All Employees"}
            {status === "employed" && "Currently Employed"}
            {status === "separated" && "Separated"}
          </button>
        ))}
      </div>
      
      {/* Header */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Total Employees:</strong> {filteredEmployees.length}
            </p>
            <p className="text-lg">
              <strong>Median Salary:</strong> ${medianSalary.toLocaleString()}
            </p>
            <p className="text-lg">
              <strong>Total Complaints:</strong> {totalComplaints}
            </p>
            <p className="text-lg">
              <strong>Total Commendations:</strong> {totalCommendations}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Gender Distribution</h2>
              <HorizontalSplitBar categories={genderCategories} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Ethnicity Distribution</h2>
              <HorizontalSplitBar categories={ethnicityCategories} />
            </div>
          </div>
        </div>
      </div>

      {/* Employee List */}
      <h2 className="text-2xl font-bold mt-8">Employees</h2>
      <EmployeeList entityId={id ?? ""} employees={filteredEmployees} />
    </div>
  );
}

export default EntityDetails;
