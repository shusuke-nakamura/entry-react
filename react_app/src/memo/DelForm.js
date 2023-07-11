import React, {useState, useEffect} from "react"
import usePersist from "../Persist"

function DelForm(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [num, setNum] = useState(0)

    const doChange = (e) => {
        setNum(e.target.value)
    }

    const doAction = (e) => {
        let res = memo.filter((item, key) => {
            return key != num
        })
        setMemo(res)
        setNum(0)
    }

    let items = memo.map((value, key) =>(
        <option key={key} value={key}>
            {value.message.substr(0, 10)}
        </option>
    ))

    return (
        <form onSubmit={doAction}>
            <div className="form-group row">
                <select name="item" id="item" className="form-control-sm col" defaultValue="-1" onChange={doChange}>
                    {items}
                </select>
                <input type="submit" value="Del" className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
    )
}

export default DelForm