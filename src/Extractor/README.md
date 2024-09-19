# Blue Ethics Project - Spreadsheet Parser

## Overview

This project is a helper tool to assist in converting excel spreadsheets into JSON files for easier handling of data in other BlueEthicsProject tools. This project is a command line tool that takes a number of parameters.

-o, --output-path    Required. Directory to save output file.
-f, --file           Required. Excel file to be parsed.
-p, --parser         Required. Parser type to be used.
-w, --worksheet      Worksheet name or index to be parsed.
--header             Indicates if the first row is a header (default: true).
--help               Display this help screen.
--version            Display version information.

### Examples

`dotnet run -- --file "../../data/TEXAS/Bedford/data/Jan2024/20240119_Complaints.xls" --parser "Jan24Roster1" --worksheet "report" -o "../../data/TEXAS/Bedford/data/Officers"`
`dotnet run -- --file "../../data/TEXAS/Bedford/data/Jan2024/20240119_Complaints.xls" --parser "Jan24Complaints" --worksheet "records" -o "../../data/TEXAS/Bedford/data/Officers"`
`dotnet run -- --file "../../data/TEXAS/Bedford/data/Jan2024/20240119_PDEmployeeRoster.xls" --parser "Jan24Roster1" -o "../../data/TEXAS/Bedford/data/Officers"`
`dotnet run -- --file "../../data/TEXAS/Bedford/data/Jan2024/20240119_EmployeeRosterPolice.xls" --parser "Jan24Roster2" -o "../../data/TEXAS/Bedford/data/Officers"`

### Parsers

#### Jan24Roster1

An excel spreadsheet with the following columns:

A) Department
B) Employee ID
C) First Name
D) Last Name
E) Position
F) Ethnicity
G) Gender
H) Date Hired
I) Salary

#### Jan24Roster2

A) Last Name
B) First Name
C) Position Title
D) Accrual Profile
E) Employee Status
F) Gender
G) Ethnicity
H) Salary

#### Jan24Complaints

An excel spreadsheet with the following columns:

A) Name
B) Department
C) Position
D) Certified Officer
E) Currently Employed
F) Complaints
G) Sustained Complaints
H) Commendations

#### Sept24Roster1

A) Department
B) Last Name
C) First Name
D) Job Title
E) Gender
F) Ethnicity
G) Hired Date
H) Separation Date
I) Salary


## Contributing

This project is intended to take XLSX or XLS files and parse them to JSON. The way it does this is through the IExcelParser interface. Each concrete implementation of the IExcelParser is intended to pair up with an excel spreadsheet format. Since these excel spreadsheets are typically responsive records to a FOIA (freedom of information act) request, the government entity can respond with any format of file or spreadsheet that they wish. This tool is to help consolidate all this data into a common JSON data format. This common JSON data format is represented in this repository in `Record.cs`. All current concrete implementations of IExcelParser is located in the `./Parsers` directory. If you encounter a new format, please create a new concrete implementation in `./Parsers`.

## LICENSE

