
const Button = ({text, customClass}) =>  {
    return(
       <button className={`bg-purple-700 px-3 py-2 text-sm text-white rounded-md   ${customClass}`}> {text}</button>
    )
}
export default Button