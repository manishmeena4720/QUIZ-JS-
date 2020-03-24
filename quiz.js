run=0;
        $(document).ready(function(){
            $('#start').click(function(){
                var name=$('#input').val();
                $('#name').text(name);
                $('#side').css("visibility","visible");
                $('#1').css("visibility","visible");
                $('#0').css("visibility","hidden");
            })
            $('#name').click(function(){
                if($('#score').text()=="")
                $('#score').text("Your Score: "+run+"/"+5);
                else
                $('#score').text("");
            })
            $('.true').click(function(){
                run=run+1;
                score=run+"/"+5;
                if($('#score').text()!="")
                $('#score').text("Your Score: "+run+"/"+5);
                alert("Correct Answer");
                if($(this).parent().parent().attr("id")=="5")
                $('#side').css("visibility","hidden");
                //$(this).css("background-color","Green");
                $(this).parent().parent().css("visibility","hidden");
                $(this).parent().parent().next().css("visibility","visible");
                $('p').last().text("Your Score: "+score);
                var name=$('#input').val();
                $('#id').text(name);
            })
            $('.false').click(function(){
                alert("**wrong answer**");
                score=run+"/"+5;
                if($(this).parent().parent().attr("id")=="5")
                $('#side').css("visibility","hidden");
                //$(this).css("background-color","red");
                $(this).parent().parent().css("visibility","hidden");
                $(this).parent().parent().next().css("visibility","visible");
                $('p').last().text("Your Score: "+score);
                var name=$('#input').val();
                $('#id').text(name);
            })
        })