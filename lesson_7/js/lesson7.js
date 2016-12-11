
// scripts .js

$(function () {

    var data = JSON.parse(localStorage.getItem("todoData"));
    data = data || [[],[],[],[],[],[],[],[]];

    $.each( data, function (index, params) {
        $.each( params, function (indexItem, item) {
            $('#'+index).append('<li id="Bullet">' + item + '</li>');
        });
    });

     $('#todoList ul').sortable({

         items: "li:not('.listTitle, .addItem')",
         connectWith:"ul",
         dropOnEmpty:true,
         placeholder:"emptySpace",

         receive:function(event,ui) {
            console.log(ui);
            if (ui.item.parent().length == 0) return;
             var id = +(ui.item.parent()[0].id);
             var data = JSON.parse(localStorage.getItem("todoData"));
             data = data || [[],[],[],[],[],[],[],[]];
             data[id].push(ui.item[0].innerText);

             var id = +(ui.sender[0].id);
             for (var i=0; i<data[id].length; i++) {
                 if (data[id][i]==ui.item[0].innerText) {break;}
             }

             data[id].splice([i],1);

             localStorage.setItem("todoData", JSON.stringify(data));

         }
     });

    $('input').keydown(function(e) {

        if (e.keyCode == 13) {

            var item = $(this).val();
            var id = +($(this).parent().parent()[0].id);
            var data = JSON.parse(localStorage.getItem("todoData"));
            data = data || [[],[],[],[],[],[],[],[]];
            data[id].push(item);
            localStorage.setItem("todoData", JSON.stringify(data));

            $(this).parent().parent().append('<li id="Bullet">' + item + '</li>');
            $(this).val('');
        }

    });

    $('#trash').droppable({

        drop:function(event,ui) {

            var id = +(ui.draggable.parent()[0].id);
            var data = JSON.parse(localStorage.getItem("todoData"));
            data = data || [[],[],[],[],[],[],[],[]];

            for (var i=0; i<data[id].length; i++) {
                if (data[id][i]==ui.draggable[0].innerText) {break;}
            }

            data[id].splice([i],1);

            localStorage.setItem("todoData", JSON.stringify(data));

            ui.draggable.remove();
        }

    });

});