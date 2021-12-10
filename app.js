const img = document.getElementById("anh");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prev = document.getElementsByClassName("prev-btn")[0];
const next = document.getElementsByClassName("next-btn")[0];
const random = document.getElementsByClassName("random-btn")[0];
var a = 0;
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      }
]
// console.log( reviews.length);
// them mot bien nua la gi nen load gia tri dau tien thi honw nhie

function load(){
    img.src = reviews[0].img;
    author.textContent = reviews[0].name;
    job.textContent = reviews[0].job;
    info.textContent = reviews[0].text;
}
load();
// khoi tao bien a roi h chi can viec chia lay du no la duoc nhi
prev.addEventListener("click", function(){
    a = (a - 1)%4;
    if( a < 0) {
        a = a + 4;
    }
    console.log(a);
    let b = a;
    img.src = reviews[b].img;
    author.textContent = reviews[b].name;
    job.textContent = reviews[b].job;
    info.textContent = reviews[b].text;    
});
next.addEventListener("click", function(){
    a = (a + 1)%4;
    let b = a;
    img.src = reviews[b].img;
    author.textContent = reviews[b].name;
    job.textContent = reviews[b].job;
    info.textContent = reviews[b].text;    
});
random.addEventListener("click", function(){
    a = Math.floor( Math.random()*4);
    
    let b = a;
    img.src = reviews[b].img;
    author.textContent = reviews[b].name;
    job.textContent = reviews[b].job;
    info.textContent = reviews[b].text;
});