$(function ()
{

    $(document).ready(
        function  () {
            $('#guoji').click(
                function () {

                    $.post
                    (
                        "http://localhost:8080/guoji/selectall",
                        {
                            company:'guoji'
                        },
                        function (data) {

                            var data1=JSON.parse(data);
                            var leveltable={"1":"头等舱","2":"商务舱","3":"普通舱"}
                            $('#biao').html("");
                            for(i=0;i<data1.length;i++){

                                start=data1[i].start;
                                end=data1[i].end;
                                level=data1[i].level;
                                level1=leveltable[level];
                                money=data1[i].money;
                                flightnumber=data1[i].flightnumber;
                                company=data1[i].name;
                                time=data1[i].time;
                                amount=data1[i].amount;


                                var str="<tr><td>"+data1[i].start+"</td><td>"+end+"</td><td>"+level1+"</td><td>"+money+"</td><td>"+flightnumber+"</td><td>"+time+"</td><td>"+amount+"</td><tr>";
                                $('#biao').append(str);

                            }
                        }
                    ).error(function () {
                        alert("抱歉，中国国际航空平台维护中！");
                    })

                }
            )
        }
    )
});