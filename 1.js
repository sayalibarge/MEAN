const parent = document.querySelector("#parentBlock");
console.log(parent);





window.addEventListener("load", () => {

    console.log("ON.LOAD");

    const parent = document.querySelector("#parentBlock");
    console.log("INSIDE.LOAD", parent);

    //iteration
    for (let i = 0; i < 10; i++) {


        //first child
        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";


        //append to parent block

        parent.insertBefore(newElement, parent.firstchild);
    }


});