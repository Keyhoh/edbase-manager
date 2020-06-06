import React from "react"
import { Button } from "react-bootstrap"

const object2csv = obj => {
  let header = []
  let record = []
  for (let [key, value] of Object.entries(obj)) {
    header.push(key)
    record.push(`"${value.map(s => s.replace(/"/g, "\"\"")).join(",")}"`)
  }
  console.log(header.join(",") + "\n" + record.join(","))
}

class CsvExport extends React.Component {
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
  }

  show() {
    const form = document.querySelector("form")
    const formData = new FormData(form)
    let data = {}
    for (let [key, value] of formData.entries()) {
      data[key] = data[key] || []
      value && data[key].push(value)
    }
    console.log(object2csv(data))
  }

  render() {
    return (
      <Button type="button" onClick={this.show}>csv出力</Button>
    )
  }
}

export default CsvExport
