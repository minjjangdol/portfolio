let observer = new IntersectionObserver((e) =>  {
    e.forEach((box) => {
        if (box.isIntersecting){
            box.target.style.opacity = 1;
            box.target.style.transform = "translate(-50%,-50%)";
        }else{
            box.target.style.opacity = 0;
            box.target.style.transform = "translate(-50%, 0%)";
        }
    }) 
});

let title = document.querySelectorAll(".idx_title");
let btn = document.querySelectorAll(".btn");
observer.observe(title[0]);
observer.observe(title[1]);
observer.observe(title[2]);
observer.observe(btn[0]);
observer.observe(btn[1]);
observer.observe(btn[2]);
