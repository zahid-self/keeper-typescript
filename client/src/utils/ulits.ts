export function openTabs(tabsName: string, className: string) {
  let i: number
  const x = document.getElementsByClassName("task-tab") as HTMLCollectionOf<HTMLElement>
  const tabLabels = document.querySelectorAll(".tab-label") as NodeListOf<HTMLElement>
  for (let index = 0; index < tabLabels.length; index++) {
    if (tabLabels[index].classList[0] === className) {
      tabLabels[index].style.color = "#157BFF"
    } else {
      tabLabels[index].style.color = "#898E99"
    }
  }
  for (i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.display = "none"
  }
  document.getElementById(tabsName).style.display = "block"
}
