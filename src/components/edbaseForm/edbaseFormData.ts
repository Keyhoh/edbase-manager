export default class EdbaseFormData {
  contents = new Map<string, string[]>()
  readonly form: HTMLFormElement

  constructor(form: HTMLFormElement) {
    this.form = form
    const formData: FormData = new FormData(form)
    formData.forEach((value: string, key: string) => {
      if (typeof value === "string") {
        let tmp = this.contents.get(key) || [] as string[]
        tmp.push(value)
        this.contents.set(key, tmp)
      }
    })
  }

  isInvalid(){
    return this.form.getElementsByClassName('is-invalid').length > 0
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
}
