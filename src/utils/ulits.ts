export function openTabs(tabsName, className) {
  let i
  const x: any = document.getElementsByClassName("task-tab")
  const tabLabel: any = document.getElementsByClassName(className)
  console.log(tabLabel[0])
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  document.getElementById(tabsName).style.display = "block"
}
