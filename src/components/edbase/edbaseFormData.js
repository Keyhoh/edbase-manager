export default class EdbaseFormData {
  contents = {}

  constructor(form) {
    const formData = new FormData(form)
    for (let [key, value] of formData.entries()) {
      this.contents[key] = this.contents[key] || []
      value && this.contents[key].push(value)
    }
  }

  toCsv() {
    let header = []
    let record = []
    for (let [key, value] of Object.entries(this.contents)) {
      header.push(key)
      record.push(`"${value.map(s => s.replace(/"/g, "\"\"")).join(",")}"`)
    }
    return header.join(",") + "\n" + record.join(",")
  }

  show() {
    console.log(this.contents)
  }
}
