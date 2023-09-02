var boxes=document.querySelectorAll('.box')
var target=document.querySelector('.target')

boxes.forEach(box=>{
    box.addEventListener('dragover',function(e){
        e.preventDefault()
        this.appendChild(target)
    })
    box.addEventListener('drop',function(e){
        this.appendChild(target)
    })
})