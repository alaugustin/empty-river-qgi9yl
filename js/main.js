const tableCellHolder = document.getElementsByClassName('tableColumn');

document.addEventListener("DOMContentLoaded", function (e) {

  let mqls = [
    window.matchMedia("(max-width: 767px)"),
    window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
    window.matchMedia("(min-width: 992px)")
  ]

  const mqh = () => {
    if (mqls[0].matches) {
      console.log("this is mobile");
      console.log("CALLBACK (max-width: 767px)");

    } else if (mqls[1].matches) {

      console.log("this is tablet");
      console.log("CALLBACK (min-width: 768px)");
    } else if (mqls[2].matches) {

      console.log("this is desk");
      console.log("CALLBACK (min-width: 992px)");
    }
    console.log("window.innerWidth: " + window.innerWidth);
  }

  const map1 = mqls.map(
    x => x.addListener(mqh)
  );
  // console.log(map1);

  mqh();
});