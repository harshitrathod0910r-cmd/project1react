import React, { useState } from 'react'

export default function Todo() {
  const [text, settext] = useState('')
  const [data, setdata] = useState([])
  const [editindex, seteditindex] = useState(null)

  function handlechange(e) {
    settext(e.target.value)
  }

  function handlesubmit(e) {
    e.preventDefault()

    if (editindex != null) {
      const updatedList = [...data]
      updatedList[editindex] = text
      setdata(updatedList)
      seteditindex(null)
    } else {
      setdata([...data, text])
    }
    settext('')
  }

  function Delete(id) {
    let ans = data.filter((el, i) => i != id)
    setdata(ans)
  }

  function Edit(id) {
    settext(data[id])
    seteditindex(id)
  }

  return (
    <div className="container">
      <style>{`
        .container {
          width: 300px;
          margin: 40px auto;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        form {
          margin-bottom: 20px;
        }

        input[type="text"] {
          padding: 8px;
          width: 70%;
          margin-right: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        input[type="submit"] {
          padding: 8px 12px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="submit"]:hover {
          background-color: #45a049;
        }

        li {
          list-style: none;
          margin: 10px 0;
          font-weight: bold;
        }

        button {
          margin: 5px;
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.8;
        }

        button:nth-of-type(1) {
          background-color: #f44336;
          color: white;
        }

        button:nth-of-type(2) {
          background-color: #2196F3;
          color: white;
        }
      `}</style>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="entername"
          value={text}
          onChange={handlechange}
        />
        <input
          type="submit"
          value={editindex != null ? "update" : "add"}
        />
      </form>

      {data.map((el, i) => {
        return (
          <div key={i}>
            <li>{el}</li>
            <button onClick={() => Delete(i)}>delete</button>
            <button onClick={() => Edit(i)}>edit</button>
          </div>
        )
      })}
    </div>
  )
}