interface ButtonOptions {
    name?: string
    textLabel?: string
    forLabel?: string
    classNameLabel?: string
    idButtonOptions?: string
    value: string
    classNameButtonOptions?: string
    onClick?: (valueInput: any) => void
    children: any
    classNameButton?: string
    }

export default function ButtonOptions (props: ButtonOptions) {
    return (
    <div>
        <div className="flex flex-col mb-2">
        <button
            type="button" 
            className={`inline-block w-28 h-10 py-auto mb-2 ml- border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-xl shadow-lg hover:bg-[#284fac] hover:shadow-lg hover:text-white focus:bg-[#284fac] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#284fac] active:shadow-lg transition duration-150 ease-in-out ${props.classNameButton}`}
            value= {props.value} 
            onClick={props.onClick}
            children={props.children}
        />
        </div>
    </div>
    )
}