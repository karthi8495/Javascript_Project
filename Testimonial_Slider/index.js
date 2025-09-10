const testimonial = [
    {
        name:"Cheristina G",
        photoUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
    {
        name:"Annie F",
        photoUrl:"https://images.unsplash.com/photo-1584016235603-290a5f94af4a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Everyone’s on the same page. Many of our people are not very organized naturally, so jobs is a godsend!"
    },
     {
        name:"Rosetta Q",
        photoUrl:"https://images.unsplash.com/photo-1620075225255-8c2051b6c015?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been using consultant for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx=0;
updateTestimonial()

function updateTestimonial(){
    const {name,photoUrl,text} = testimonial[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()

    },10000);
}