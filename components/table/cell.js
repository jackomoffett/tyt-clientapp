export const Cell = (props) => {
  return (
    <td className="px-6 py-2 tracking-wider uppercase">{props.children}</td>
  );
};

export default Cell;
