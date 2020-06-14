import * as React from "react"
import { FormEvent } from "react"
import { Form } from "react-bootstrap"
import { v4 as uuid } from "uuid"
import { isNotBlank } from "../../../util"

type PropTypes = {
  name: string,
  entries: { label?: string, value: string | number | string[], disabled?: boolean }[]
  required?: boolean,
  inline?: boolean,
}

type StateTypes = {
  entries: { key: string, label?: string, value: string | number | string[], disabled?: boolean }[]
  selected: Set<string>
}

export default class Check extends React.Component<PropTypes, StateTypes> {

  constructor(props) {
    super(props)
    this.state = {
      selected: new Set<string>(),
      entries: props.entries.map(entry => {
        return { key: uuid().toString(), ...entry }
      })
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e: FormEvent) {
    const checkbox: HTMLInputElement = e.target as HTMLInputElement
    let value = this.state.selected
    if (checkbox.checked) {
      value.add(checkbox.value)
    } else {
      value.delete(checkbox.value)
    }
    this.setState({ selected: value })
  }

  getChecks() {
    return this.state.entries.map(({ key, label, value, disabled }) => {
      return (
        <Form.Check
          key={key}
          id={key}
          name={this.props.name}
          label={label}
          value={value}
          disabled={disabled}
          onChange={this.handleClick}
          inline={this.props.inline} />
      )
    })
  }

  isInvalid() {
    return this.props.required &&
      Array.from(this.state.selected.values())
        .filter(isNotBlank)
        .length === 0
  }

  render() {
    return (
      <Form.Group>
        <Form.Control
          isInvalid={this.isInvalid()}
          onChange={() => {}}
          hidden />
        <Form.Control.Feedback type="invalid">１つ以上選択してください</Form.Control.Feedback>
        {this.getChecks()}
      </Form.Group>
    )
  }
}
