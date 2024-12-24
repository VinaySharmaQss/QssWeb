document.getElementById("changeTextButton").addEventListener("click", ()=>{
    let para= document.getElementById("myParagraph");
    para.textContent=  "The paragraph content is changed by the DOM Manipulation"
})

document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let para = document.getElementById('citiesList')
    para.firstElementChild.classList.add("highlight");
})

document.getElementById("changeOrder").addEventListener("click",function(){
    let num= document.getElementById("coffeeType")
    num.textContent= "Expresso";
    num.style.background= "red";
})

document.getElementById("addNewItem").addEventListener("click",()=>{
    let newEle= document.createElement("li");
    newEle.textContent ="Maggie",
    document.getElementById("shoppingList").appendChild(newEle);
})

document.getElementById("removeLastTask").addEventListener("click",()=>{
    document.getElementById("taskList").lastElementChild.remove();
})


document.getElementById("teaList").addEventListener("click", (event) => {
    if (event.target && event.target.matches(".teaItem")) {
        alert(`You selected the ${event.target.textContent}`);
    }
});

document.getElementById("feedbackForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    alert(feedback);
})

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("domStatus").textContent="DOM is loaded successfully"
})

