const title= document.getElementById("title");
const description= document.getElementById("description");
const form= document.querySelector("form");
const container= document.querySelector(".container");

const task =localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];

smallTasks();

function smallTasks(){
    task.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText=value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText='-';

        btn.addEventListener("click",()=>{
            removetaks();
            task.splice(index,1);
            localStorage.setItem("task",JSON.stringify(task));
            smallTasks();
        })
        
        innerDiv.append(btn);
        container.append(div);
})
};

function removetaks(){
    task.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetaks();
    task.push({
        title:title.value ,
        description:description.value
    });

    localStorage.setItem("task",JSON.stringify(task));

    console.log(task);
    smallTasks();
})