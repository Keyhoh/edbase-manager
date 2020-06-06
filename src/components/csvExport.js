import React from "react"
import { Button } from "react-bootstrap"

class CsvExport extends React.Component {
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
  }

  show() {
    const form = document.querySelector("form")
    const formData = new FormData(form)
    let data = {}
    for(let [key, value] of formData.entries()) {
      data[key] = data[key] || []
      value && data[key].push(value)
    }
    console.log(data)
  }

  render() {
    return (
      <Button type="button" onClick={this.show}>csv出力</Button>
    )
  }
}

export default CsvExport
