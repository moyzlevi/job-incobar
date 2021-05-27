const today = new Date();

export default function actualDate(format) {
  const map = {
      mm: today.getMonth() + 1,
      dd: today.getDate(),
      yy: today.getFullYear().toString().slice(-2),
      yyyy: today.getFullYear()
  }

  return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}

