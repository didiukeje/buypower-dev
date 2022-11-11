
const FaqItem = ({number, title, children}) => {
  return (
    <li className="first-list">
      <div className="number"><span>{number}</span></div>
      <div className="block">
        <div className="title">{title}</div>
        <div className="text">
          {children}
        </div>
      </div>
   </li>
  )
}
export default FaqItem;
