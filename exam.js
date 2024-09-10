function myFunction1(){
    var se1 = document.getElementById("se1").value;
    se1 = parseFloat(se1);
    var se2 = document.getElementById("se2").value; 
    se2 = parseFloat(se2);
    var c = document.getElementById("select");
    var year = c.value;
    year = parseInt(year);
    var sum;

    switch (year){
        case 1:{
            sum= (se1 + se2)/2;
            sum= parseFloat(sum);
            document.getElementById("result").value = sum;
            break;
        }
        case 2:{
            sum= (se1 + se2*2)/3;
            sum= parseFloat(sum);
            document.getElementById("result").value = sum;
            break;
        }
        case 3:{
            sum= (se1 + se2*3)/4;
            sum= parseFloat(sum);
            document.getElementById("result").value = sum;
            break;
        }
    }
    if(sum >9){
        document.getElementById('display').innerHTML = "Hoc sinh xuat sac";
        document.getElementById('display').style.color = "red";
        document.getElementById('display').style=`padding:30px, size:30px`;

    } else if (sum >8)
    {
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "blue"
    }
    else if (sum >6.5 )
    {
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "orange"
    }
    else if (sum >5 )
    {
        document.getElementById('display').innerHTML = "Hoc sinh trung binh";
        document.getElementById('display').style.color = "yellow"
    } else
    {
        document.getElementById('display').innerHTML = "Hoc sinh yeu";
        document.getElementById('display').style.color = "black"
    }
}

function myFunction2(){
    document.getElementById('se1').value = "";
    document.getElementById('se2').value = "";
}