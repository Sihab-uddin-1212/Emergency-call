### getElementById :
- it is get only a single unique**id**value that you want .
### getElementsByClassName :
- It returns a live HTMLCollection of all descendant elements that have the specified class name 
### querySelector :
- it will wark when there are  multiple element matched with a single selector and it take only 1st document or  element .
### querySelectorAll :
- it will wark when there are  multiple element matched with a single selector and it take all document or  element. 


### create and insert a new element into the DOM
  
- let div = document.createElement("div");
    div.className =
      "history-containar flex justify-between items-center m-3 p-3 bg-[#D9D9D9] rounded-lg";
    div.innerHTML = `
      <div class="name-container">
        <h2 class="font-bold">${serviceName}</h2>
        <p>${serviceNumber}</p>
      </div>
      <div class="time">
        <p>${now}</p>
      </div>
    `;
    historyContainer.appendChild(div);   
    
   

 ### Event Bubbling 
 - this is a mechanism where an event  triggered on a specific  element and go  upwards through its ancestors in the Document Object Model tree .

 ### Event Delegation 
 - A single event listener is added to a common ancestor element, like a div or ul, instead of to each individual child element .

 # different between  preventDefault() and stopPropagation()
 1.  **preventDefault()** It is used to stop the default action associated with an event from occurring.
 2. **stopPropagation()**  you prevent the event from continuing its journey up or down the DOM tree . thus stopping it from triggering any more event listeners on parent or child elements in the propagation path.




