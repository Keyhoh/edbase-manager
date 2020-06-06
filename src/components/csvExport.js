import React from "react"
import { Button } from "react-bootstrap"
import EdbaseFormData from "./edbase/edbaseFormData"

class CsvExport extends React.Component {
  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
  }

  show() {
    const form = document.querySelector("form")
    const edbaseForm = new EdbaseFormData(form)
    console.log(edbaseForm.toCsv())
  }

  render() {
    return (
      <Button type="button" onClick={this.show}>csv出力</Button>
    )
  }
}

export default CsvExport
