export function Range({onChange,value,min,max}){
    return <div className="form-check">
        <input type="range" value={value} min={min} max={max} onChange={(e) =>  onChange(e.target.value)}/>
    </div>
}