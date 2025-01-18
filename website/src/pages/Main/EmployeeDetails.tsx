import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Personnel, Organization } from "../../types/api";
import { organizationsClient } from "../../api";

function EmployeeDetails() {
  const { id: entityId, employeeId } = useParams<{ id: string; employeeId: string }>();
  const [entity, setEntity] = useState<Organization | null>(null);
  const [employee, setEmployee] = useState<Personnel | null>(null);

  useEffect(() => {
    if (!entityId || !employeeId) return;

    const fetchData = async () => {
      try {
        // Fetch the entity
        const fetchedEntity = await organizationsClient.getOrganizationById(entityId);
        setEntity(fetchedEntity);

        // Find the employee within the entity
        const fetchedEmployee = fetchedEntity.personnel?.find((emp) => emp.id === Number(employeeId));
        if (!fetchedEmployee) {
          throw new Error(`Employee with ID ${employeeId} not found in entity ${entityId}`);
        }

        setEmployee(fetchedEmployee);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [entityId, employeeId]);

  if (!entity || !employee) return <p>Loading...</p>;

  return (
    <div className="space-y-6 w-8/12 mx-auto">
      <div className="flex">
        <div className="flex-initial mx-4">
          <img
            src={
              employee.portrait
                ? employee.portrait
                : employee.gender?.toLowerCase() === "female"
                ? "/woman-police-officer.png"
                : "/man-police-officer.png"
            }
            alt="Employee Image"
            className="w-48 rounded-md"
          />
        </div>
        <div className="flex-auto">
          <h1 className="text-3xl font-bold mx-4">
            {employee.firstName} {employee.lastName}
          </h1>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-4">
            <h3 className="text-2xl font-semibold flex items-center space-x-4">
              <Link to={`/entities/${entityId}`} className="text-blue-400 hover:underline">
                {entity.name}
              </Link>
            </h3>
            {employee.positionTitle && <p><strong>Position:</strong> {employee.positionTitle}</p>}
            {employee.department && <p><strong>Department:</strong> {employee.department}</p>}
            {employee.salary && <p><strong>Salary:</strong> ${employee.salary.toLocaleString()}</p>}
            {employee.gender && <p><strong>Gender:</strong> {employee.gender}</p>}
            {employee.ethnicity && <p><strong>Ethnicity:</strong> {employee.ethnicity}</p>}
            {(employee.complaints ?? 0) > 0 && <p><strong>Complaints:</strong> {employee.complaints}</p>}
            {(employee?.sustainedComplaints ?? 0) > 0 && (
              <p><strong>Sustained Complaints:</strong> {employee.sustainedComplaints}</p>
            )}
            {(employee?.pendingComplaints ?? 0) > 0 && (
              <p><strong>Pending Complaints:</strong> {employee.pendingComplaints}</p>
            )}
            {(employee.commendations ?? 0) > 0 && (
              <p><strong>Commendations:</strong> {employee.commendations}</p>
            )}
            {employee.dateHired && (
              <p><strong>Date Hired:</strong> {new Date(employee.dateHired).toLocaleDateString()}</p>
            )}
            {employee.separationDate && (
              <p>
                <strong>Separation Date:</strong> {new Date(employee.separationDate).toLocaleDateString()}
              </p>
            )}
            {employee.certifiedOfficer !== undefined && (
              <p className="flex items-center">
                <strong className="mr-2">Certified Officer:</strong>
                {employee.certifiedOfficer ? (
                  <i className="fas fa-check text-green-500" title="Certified Officer"></i>
                ) : (
                  <i className="fas fa-times text-red-500" title="Not Certified"></i>
                )}
              </p>
            )}
            {employee.accrualProfile && <p><strong>Accrual Profile:</strong> {employee.accrualProfile}</p>}
            {employee.currentlyEmployed !== undefined && (
              <p>
                <strong>Employment Status:</strong>{" "}
                {employee.currentlyEmployed ? "Currently Employed " : "Separated "}
                {employee.currentlyEmployed ? (
                  <i className="fas fa-check text-green-500" title="Currently Employed"></i>
                ) : (
                  <i className="fas fa-times text-red-500" title="Separated"></i>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
