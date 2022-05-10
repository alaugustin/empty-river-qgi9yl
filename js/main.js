const tableCellHolder = document.getElementsByClassName('tableColumn');

document.addEventListener("DOMContentLoaded", function (e) {

  let mqls = [
    window.matchMedia("(max-width: 599px)"),
    window.matchMedia("(min-width: 600px) and (max-width: 971px)"),
    window.matchMedia("(min-width: 972px)")
  ]

  const mqh = () => {
    if (mqls[0].matches) {
      for (const box of tableCellHolder) {
        box.classList.remove('tablet');
        box.classList.remove('desk');
        box.classList.add('mobile');
        console.log("this is mobile");
      }
      console.log("CALLBACK (max-width: 400px)");
      document.body.style.background = "green";
    } else if (mqls[1].matches) {
      for (const box of tableCellHolder) {
        box.classList.remove('mobile');
        box.classList.remove('desk');
        box.classList.add('tablet');
        console.log("this is tablet");
      }
      console.log("CALLBACK (max-width: 600px)");
      document.body.style.background = "red";
    } else if (mqls[2].matches) {
      for (const box of tableCellHolder) {
        box.classList.remove('mobile');
        box.classList.remove('tablet');
        box.classList.add('desk');
        console.log("this is desk");
      }
    }
    console.log("window.innerWidth: " + window.innerWidth);
  }

  const map1 = mqls.map(
    x => x.addListener(mqh)
  );
  // console.log(map1);

  mqh();
});