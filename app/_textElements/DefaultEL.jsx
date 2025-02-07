function DefaultEL(props) {
  return (
    <p {...props.attributes} className="my-2">
    {props.children}
  </p>
  )
}

export default DefaultEL


