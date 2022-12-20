import "./ExpenseDate.css";

function ExpenseDate (props) {
 
   const month = props.month;
   const day = props.day;
   const year = props.year;

   return <div className="expense-date">
   <div className="expense-date__month">{month}</div>
   <div className="expense-date__year">{year}</div>
   <div className="expense-date__day">{day}</div>
 </div>;

}

export default ExpenseDate;