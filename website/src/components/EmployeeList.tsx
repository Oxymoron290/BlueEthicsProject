import { useNavigate } from "react-router-dom";
import { Employee } from "../types/api";

interface EmployeeListProps {
  employees: Employee[];
  entityId: string; // Pass the entity ID for navigation
}

function EmployeeList({ employees, entityId }: EmployeeListProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-left text-sm text-blue-200">
        <thead>
          <tr>
            <th className="py-2 px-4">Last Name</th>
            <th className="py-2 px-4">First Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate(`/entities/${entityId}/employees/${employee.id}`)}
            >
              <td className="py-2 px-4">{employee.lastName}</td>
              <td className="py-2 px-4">{employee.firstName}</td>
              <td className="py-2 px-4">{employee.positionTitle}</td>
              <td className="py-2 px-4">${employee.salary?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
