
function newItem() {

    // Use jQuery to add a new item to a list
       let li = $("<li></li>");
       let inputValue = $("#input").val();
       li.append(inputValue);

    // Must be an input to add to list, String can not be blank
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }
    

     // Function to cross out a function from current list of functions
       function crossOut() {
            li.toggleClass("strike");
         }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    
     // use jQuery to add cross out button
       let crossOutButton = $("<crossOutButton></crossOutButton>");
        crossOutButton.append(document.createTextNode("X"));
         li.append(crossOutButton);
    
     // jQuery delete item from list by clicking "X"
       $(crossOutButton).on("click", function(){
        $(this).parent().remove();
       });


     // jQuery function that allows the list to be sortable
       $('#list').sortable();
    
    }
    
     