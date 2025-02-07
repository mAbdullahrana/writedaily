function CodeEL(props) {
  return (
    <pre
      {...props.attributes}
      className="bg-gray-800 text-white p-2 rounded my-2 overflow-x-auto"
    >
      <code>{props.children}</code>
    </pre>
  );
}

export default CodeEL;
