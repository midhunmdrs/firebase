//alert('connected')
var ul = document.getElementById('list')
var li ;

var h = document.createElement('h1')
var myValue = document.createTextNode('Hello World!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);

var addButton = document.getElementById('add').addEventListener('click',addItem)

var removeButton = document.getElementById('remove').addEventListener('click',removeItem)




function addItem(){
    //console.log("This is for add item")
    var it = document.getElementById('input')
    var item = it.value


    if(item === ''){
        return false
    }else{
        let textnode= document.createTextNode(item)
       li =document.createElement('li')
       var input =document.createElement('input')
       input.type = 'checkbox'
       input.setAttribute('id','check')
       var label = document.createElement('label')
       //label.setAttribute('for','item')

       ul.appendChild(label)
       li.appendChild(input)
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li,ul.childNodes[0])
       li.className = 'visual'
       


    }


}


function removeItem(){
    console.log("This is for Remove Item")
    li= ul.children
   for(let index=0;index< li.length;index++){
       while((li[index].children[0].checked)){
          ul.removeChild(li[index])
       
   
       
   }
}
}
