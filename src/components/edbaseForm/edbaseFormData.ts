import { isNotBlank } from "../../util"
import { Parser } from "json2csv"

export default class EdbaseFormData {
  contents = new Map<string, string[]>()
  readonly form: HTMLFormElement

  constructor(form: HTMLFormElement) {
    this.form = form
    const formData: FormData = new FormData(form)
    formData.forEach((value: string, key: string) => {
      if (typeof value === "string") {
        let tmp = this.contents.get(key) || [] as string[]
        isNotBlank(value) && tmp.push(value)
        this.contents.set(key, tmp)
      }
    })
  }

  isInvalid() {
    return this.form.getElementsByClassName("is-invalid").length > 0
  }

  toCsv() {
    let data = {}
    this.contents.forEach((value: string[], key: string) => {
      data[key] = value.length === 0 ? null : value
    })
    const fields = Object.keys(data)
    return new Parser({ fields }).parse(data)
  }
}
