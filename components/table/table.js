export const Table = (props) => {
  return (
    <>
      <table className="table-auto rounded-lg whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-left border-b border-gray-200 bg-gray-100">
            {props.tableHeaders}
          </tr>
        </thead>
        <tbody>{props.tableRows}</tbody>
      </table>
    </>
  );
};

export default Table;
