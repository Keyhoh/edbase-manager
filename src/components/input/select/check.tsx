import * as React from "react"
import { FormEvent } from "react"
import { Form } from "react-bootstrap"
import { Set } from "core-js"
import { v4 as uuid } from "uuid"

type PropTypes = {
  name: string,
  entries: { label?: string, value: string | number | string[], disabled?: boolean }[]
  required?: boolean,
  inline?: boolean,
}

type StateTypes = {
  entries: { key: string, label?: string, value: string | number | string[], disabled?: boolean }[]
  value: Set<string>
}

export default class Check extends React.Component<PropTypes, StateTypes> {

  constructor(props) {
    super(props)
    this.state = {
      value: new Set<string>(),
      entries: props.entries.map(entry => {
        return { key: uuid().toString(), ...entry }
      })
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e: FormEvent) {
    const checkbox: HTMLInputElement = e.target as HTMLInputElement
    let value = this.state.value
    if (checkbox.checked) {
      value.add(checkbox.value)
    } else {
      value.delete(checkbox.value)
    }
    this.setState({ value: value })
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

  render() {
    return (
      <Form.Group>
        {this.getChecks()}
      </Form.Group>
    )
  }
}
