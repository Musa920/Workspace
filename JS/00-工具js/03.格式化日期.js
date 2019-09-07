function formatTime(date, separator, timeSeparator) {
  if (!(date instanceof Date)) {
    console.error("不是一个合法的日期对象");
    return;
  }
  let year = date.getFullYear(),
    month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0'),
    hour = date.getHours().toString().padStart(2, '0'),
    minute = date.getMinutes().toString().padStart(2, '0'),
    second = date.getSeconds().toString().padStart(2, '0')
  console.log(`${year}${separator}${month}${separator}${day} ${hour}${timeSeparator}${minute}${timeSeparator}${second}`)
}

formatTime("asdasd", '/', ':')