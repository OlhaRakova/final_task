let c = document.createElement('p');
c.innerHTML='<b>Ответ верный</b>';
c.style.cssText = "color: green; font-size: 1em;";

let d = document.createElement('p');
d.innerHTML='<b>Ответ не правильный</b>';
d.style.cssText = "color: red; font-size: 1em;";

function res_1(a){
    a  =  document.getElementById('a').value;
    let b  =  9917;
    if(a==b){
        result_1.append(c);
    }
    else{
        result_1.append(d);
    }
}

function dec_1(){
    let e = "<p>Правильное решение задачи 1: </p><p>Для ответа на вопрос необходимо определить текущую стоимость потока платежей:</p><p>PV = FV /(1+ i)^n= 2000/(1+ 0.08)^1 + 2000/(1+ 0.08)^2 +(2000+6000)/(1+ 0.08)^3 =9917,19</p>";
    document.getElementById('decision_1').innerHTML = e;
}

function res_2(a){
    a  =  document.getElementById('b').value;
    let b  =  5.5;
    if(a==b){
        result_2.append(c);
    }
    else{
        result_2.append(d);
    }
}

function dec_2(){
    let e="<p>Правильное решение задачи 2:</p><p>Предельные издержки МС определяются дополнительным расходом ресурсов в случае изменения объема выпуска продукции на одну единицу</p><p>Средние, или удельные затраты, АС определяют, во что обходится в среднем единица продукции:</p><p>АС = TC/Q , где ТС – общие издержки, Q – объём продукции в натуральном выражении.</p><p>Следовательно, общие издержки производства 9 единиц продукции равны ТС9 = 9*5 = 45 ден. ед. </p><p>Если прибавить к ним издержки на производство 10-й единицы, то получим общие издержки на производство 10 единиц продукции: ТС10 = 45 + 10 = 55 ден. ед.</p><p>Рассчитаем средние валовые издержки производства 10 единиц продукции: АС10 = 55/10 = 5,5 ден. ед.</p>";
    document.getElementById('decision_2').innerHTML = e;
}

function res_3(a){
    a  =  document.getElementById('c').value;
    let b  =  48;
    if(a==b){
        result_3.append(c);
    }
    else{
        result_3.append(d);
    }
}

function dec_3(){
    let e="<p>Правильное решение задачи 3: </p><p>Согласно определению предельного продукта труда в дифференциальной форме () запишем уравнение предельного продукта и рассчитаем значение предельной производительности капитала:</p><p>MPK=(4KL), =4L=4 * 3=12</p><p>Определим величину выпуска продукции фирмы, подставляя значения K и L в уравнение производной функции:Q=TP=4KL=4*4*3=48</p>";
    document.getElementById('decision_3').innerHTML = e;
}