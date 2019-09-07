let countFlag = 0 // 计数器

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('ok')

    countFlag++
    if (countFlag === 5) {
      console.log('五个延时器执行完了')
    }
  }, 1000)
}