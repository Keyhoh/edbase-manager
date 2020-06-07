import { string } from "prop-types"

export default class EdbaseFormData {
  contents = new Map<string, string[]>()

  constructor(form: HTMLFormElement) {
    const formData: FormData = new FormData(form)
    formData.forEach((value: string, key: string) => {
      if (typeof value === "string") {
        let tmp = this.contents.get(key) || [] as string[]
        tmp.push(value)
        this.contents.set(key, tmp)
      }
    })
  }

  toCsv() {
    let header = []
    let record = []
    this.contents.forEach((value: string[], key: string) => {
      header.push(key)
      record.push(`"${value.map(s => s.replace(/"/g, "\"\"")).join(",")}"`)
    })
    return header.join(",") + "\n" + record.join(",")
  }

  show() {
    console.log(this.contents)
  }
}
