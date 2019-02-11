$( function() {

    $(document).on("submit", "#b-form" ,e => {
        e.preventDefault();
        
        $.post("/", 
            {
                data:  $("#b-form input[name=name]").val()
            },
            result => {
                
                $("#burgerz").append(
                    '<div class="bg-light rounded p-1 mt-1 mb-1">' +
                        '<h6>' + result + '</h6>' +
                        '<button class="eat">eat</button>' +
                    '</div>'
                );
                
        });
    });

    $("#burgerz").find(".eat").click(function () {
        $.ajax({
            url:'/',
            type:'PUT',
            data: { data: $(this).attr('id') },
            success: result => {

                $("#ateit").append(
                    '<div class="bg-light rounded p-1 mt-1 mb-1">' +
                        $(this).parent().find('h6').html() +
                    '</div>'
                );

                $(this).parent().remove();
            }
        })
    });
})
