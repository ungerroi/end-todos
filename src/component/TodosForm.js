import React, {useState, useRef} from 'react'

const TodosForm = ({addTask}) => {

    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    return (
        <div>
            <form>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    ref={inputRef}
                    placeholder="new task..."
                />
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addTask(inputValue)
                        inputRef.current.value = ''
                        inputRef.current.focus()
                        }}>Add</button>
            </form>
        </div>
    )
}

export default TodosForm
