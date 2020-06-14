import * as React from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { PlusSquare, X } from "react-bootstrap-icons"
import { v4 as uuid } from "uuid"
import { isNotBlank } from "../../util"

type PropTypes = {
  name: string,
  required?: boolean,
}

type StateTypes = {
  entered: Map<string, string>
}

const Option = ({ name, deletable, value, handleChange, handleDelete }) => (
  <InputGroup>
    <Form.Control name={name} value={value} onChange={handleChange} />
    <InputGroup.Append>
      <Button disabled={!deletable} onClick={handleDelete} type="button" variant="outline-secondary" aria-label="Close">
        <X />
      </Button>
    </InputGroup.Append>
  </InputGroup>
)

export default class MultipleText extends React.Component<PropTypes, StateTypes> {
  constructor(props) {
    super(props)
    const entered = new Map<string, string>()
    entered.set(uuid().toString(), "")
    this.state = { entered: entered }
  }

  set(key: string = uuid().toString(), value: string = "") {
    this.setState({ entered: this.state.entered.set(key, value || "") })
  }

  delete(key: string) {
    const entered = this.state.entered
    entered.delete(key)
    this.setState({ entered: entered })
  }

  getOptions() {
    const deletable = this.state.entered.size > 1
    return (
      Array.from(this.state.entered.entries()).map(([key, value]: [string, string]) => (
        <Option
          key={key}
          name={this.props.name}
          deletable={deletable}
          value={value}
          handleDelete={() => this.delete(key)}
          handleChange={(e: React.FormEvent<HTMLInputElement>) => this.set(key, e.currentTarget.value)}
        />
      ))
    )
  }

  isInvalid() {
    return this.props.required &&
      Array.from(this.state.entered.values())
        .filter(isNotBlank)
        .length === 0
  }

  render() {
    return (
      <>
        <Form.Group>
          <Form.Control
            isInvalid={this.isInvalid()}
            onChange={() => {}}
            hidden />
          <Form.Control.Feedback type="invalid">必須項目です</Form.Control.Feedback>
          <InputGroup>{this.getOptions()}</InputGroup>
        </Form.Group>
        <Button block type="button" onClick={() => this.set()}><PlusSquare /></Button>
      </>
    )
  }
}
