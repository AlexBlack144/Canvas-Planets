document.addEventListener('DOMContentLoaded', () =>{
    const canvas = document.getElementById("myCanvas");
    let text_sun = canvas.getContext('2d');
    let text_mercury = canvas.getContext('2d');
    let text_venus = canvas.getContext('2d');
    let text_earth = canvas.getContext('2d');
    let text_mars = canvas.getContext('2d');
    let text_jupiter = canvas.getContext('2d');
    let text_saturn = canvas.getContext('2d');
    let text_uran = canvas.getContext('2d');
    let text_neptun = canvas.getContext('2d');
    let text_pluton = canvas.getContext('2d');
    let text_earth_raketa = canvas.getContext('2d');
    
    let sun2 = canvas.getContext('2d');
    let mercury2 = canvas.getContext('2d');
    let venus2 = canvas.getContext('2d');
    let earth2 = canvas.getContext('2d');
    let mars2 = canvas.getContext('2d');
    let jupiter2 = canvas.getContext('2d');
    let saturn2 = canvas.getContext('2d');
    let uran2 = canvas.getContext('2d');
    let neptun2 = canvas.getContext('2d');
    let pluton2 = canvas.getContext('2d');

    let sun = canvas.getContext('2d');
    let mercury = canvas.getContext('2d');
    let venus = canvas.getContext('2d');
    let earth = canvas.getContext('2d');
    let mars = canvas.getContext('2d');
    let jupiter = canvas.getContext('2d');
    let saturn = canvas.getContext('2d');
    let uran = canvas.getContext('2d');
    let neptun = canvas.getContext('2d');
    let pluton = canvas.getContext('2d');
  
    let earth_raketa = canvas.getContext('2d');
    let earth_raketa2 = canvas.getContext('2d');

    let select_planet = document.getElementById("select_planet");

    let button_pusk = document.getElementById("pusk");
    let button_minus_speed = document.getElementById("minus_speed");
    let button_plus_speed = document.getElementById("plus_speed");
    let button_prezemlenie = document.getElementById("prezemlenie");

    let labelw = document.getElementById("labelw");
    let speed_raket = document.getElementById('speed_raket');
    let speed_planet = document.getElementById('speed_planet');
    let toplivo_html = document.getElementById('toplivo');
    let days = document.getElementById('days');
   
    let orbita_pluton = canvas.getContext('2d');
    let orbita_neptun = canvas.getContext('2d');
    let orbita_uran = canvas.getContext('2d');
    let orbita_saturn = canvas.getContext('2d');
    let orbita_jupiter = canvas.getContext('2d');
    let orbita_mars = canvas.getContext('2d');
    let orbita_earth = canvas.getContext('2d');
    let orbita_venus = canvas.getContext('2d');
    let orbita_mercury = canvas.getContext('2d');


    button_minus_speed.disabled = true;
    button_plus_speed.disabled = true;
    button_prezemlenie.disabled = true;
    
    let angel_pluton = 0;
    let angel_neptun = 0;
    let angel_uran = 0;
    let angel_saturn = 0;
    let angel_jupiter = 0;
    let angel_mars = 0;
    let angel_earth = 0;
    let angel_venus = 0;
    let angel_mercury = 0;
    let angel_raketa = 0;

    

    let from_earth_to_mercury = 149500000;
    let from_earth_to_venus = 100000000;
    let from_earth_to_mars = 228400000;
    let from_earth_to_jupiter = 777500000;
    let from_earth_to_saturn = 1427500000;
    let from_earth_to_uran = 2875000000;
    let from_earth_to_neptun = 4320000000;
    let from_earth_to_pluton = 5900000000;

    let toplivo = 0;

    let i = 50;
    let x = 18;
    let y = 20;

    let pi = Math.PI;
    let whith_line = 0.2;
    let cord_x = 680;
    let cord_y = 310;

    let time = 0;
   
    setInterval(tick,1000)
    function tick()
    {
        time++;
    }
    animation({
        clear () {
            pluton.clearRect(0, 0, canvas.width, canvas.height);
            neptun.clearRect(0, 0, canvas.width, canvas.height);
            uran.clearRect(0, 0, canvas.width, canvas.height);
            saturn.clearRect(0, 0, canvas.width, canvas.height);
            jupiter.clearRect(0, 0, canvas.width, canvas.height);
            mars.clearRect(0, 0, canvas.width, canvas.height);
            earth.clearRect(0, 0, canvas.width, canvas.height);
            venus.clearRect(0, 0, canvas.width, canvas.height);
            mercury.clearRect(0, 0, canvas.width, canvas.height);
        },
        update () { 
            angel_pluton += Math.PI * 0.000475;
            angel_neptun += Math.PI * 0.000548;
            angel_uran  += Math.PI * 0.000684;
            angel_saturn += Math.PI * 0.000967;
            angel_jupiter += Math.PI * 0.001307;
            angel_mars  += Math.PI * 0.002413;
            angel_earth += Math.PI * 0.002976;
            angel_venus += Math.PI * 0.003502;
            angel_mercury  += Math.PI * 0.004787;
            angel_raketa += Math.PI * 0.002976;
        },
        render () {
            rend(pluton, "#73deff",2, 300,300,0,0, angel_pluton);
            rend(neptun, "#00aeff", 6, 250,250,30,30, angel_neptun);
            rend(uran, "#8bdbd7", 6.5, 190,190,30,30, angel_uran);
            rend3(saturn, "#e0bc6e" ,"black","#e0bc6e", 8.5, 150,150,15,30, angel_saturn,4,8,9);
            rend2(jupiter, "#e0e781", "#772000", 10, 100,100,20,20, angel_jupiter, 1,11);
            rend(mars, "#ff6435", 4, 70,70,20,15, angel_mars);
            rend2(earth, "#6fda3e", "#00a2ff", 5, 50,50,18,20, angel_earth, 3,6)
            rend2(venus, "#fffeca", "#ffc401", 4.8, 33,33,18,20, angel_venus, 2,5);
            rend(mercury, "#8d8d8b", 2, 20,20,17,22, angel_mercury);
            load_path_and_planets();    
        }
    })
    function draw_text(obj, text, x, y) {
        obj.font = "36px serif";
        obj.fillStyle = "white";
        obj.strokeText(text, x, y);
    }
    function draw_planet(obj,color, color2,radius, x,y,innerRadius, outerRadius) {
        let gradient = sun2.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color2);
        obj.beginPath();
        obj.arc(x,y,radius,0, 2*pi, false);
        obj.fillStyle = gradient;
        obj.stroke();
        obj.fill();
    }
    function draw_planet2(obj,color, color2,color3,radius, x,y,innerRadius, outerRadius, outerRadius2) {
        let gradient = sun2.createRadialGradient(x, y, innerRadius, x, y, outerRadius,  x, y, outerRadius2);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);
        obj.beginPath();
        obj.arc(x,y,radius,0, 2*pi, false);
        obj.fillStyle = gradient;
        obj.stroke();
        obj.fill();
    }
    function load_path_and_planets(){
        draw_text(text_earth_raketa," - Ракета", 290, 60);
        draw_planet(earth_raketa2, 'red', 'red',5, 280, 50,  4, 6);

        draw_text(text_sun," - Солнце", 90, 60);
        draw_planet(sun2, 'yellow', 'red',40, 50, 50,  30, 41);

        draw_text(text_mercury,"- Меркурий", 90, 120);
        draw_planet(mercury2, "#8d8d8b" , "#8d8d8b", 10,49,115,10,21);

        draw_text(text_venus,"- Венера", 90, 170);
        draw_planet(venus2, "#fffeca", "#ffc401",20 , 50,165 , 8,21);

        draw_text(text_earth,"- Земля", 90, 225);
        draw_planet(earth2, "#6fda3e", "#00a2ff",22 , 50,220 , 15,23);

        draw_text(text_mars,"- Марс", 90, 275);
        draw_planet(mars2, "#ff6435", "#ff6435",15 , 50,270 , 15,23);

        draw_text(text_jupiter,"- Юпитер", 90, 340);
        draw_planet(jupiter2, "#e0e781", "#772000",35 , 50,330 , 10,36);

        draw_text(text_saturn,"- Сатурн", 90, 415);
        draw_planet2(saturn2, "#e0bc6e" ,"black","#e0bc6e",30 , 50,410 , 14,28,31);

        draw_text(text_uran,"- Уран", 90, 480);
        draw_planet(uran2, "#8bdbd7" ,"#8bdbd7",25 , 50,475 , 14,26);

        draw_text(text_neptun,"- Нептун", 90, 540);
        draw_planet(neptun2, "#00aeff","#00aeff",20 , 50,535 , 14,26);

        draw_text(text_pluton,"- Плутон", 90, 590);
        draw_planet(pluton2, "#73deff","#73deff",10 , 50,585 , 14,26);
       
       
        let innerRadius = 8;
        let outerRadius = 15;
        let gradient = sun.createRadialGradient(cord_x-20, cord_y+20, innerRadius, cord_x-20, cord_y+20, outerRadius);
        gradient.addColorStop(0, 'yellow');
        gradient.addColorStop(1, 'red');
        sun.beginPath();
        sun.arc(cord_x-20,cord_y+20,14,0, 2*pi, false);
        sun.fillStyle = gradient;
        sun.stroke();
        sun.fill();

        orbita_pluton.beginPath();
        orbita_pluton.lineWidth = whith_line; // толщина обводки
        orbita_pluton.strokeStyle = "white"; // цвет обводки
        orbita_pluton.arc(cord_x,cord_y,150*2,0, 2*pi, false);
        orbita_pluton.stroke();

        orbita_neptun.beginPath();
        orbita_neptun.lineWidth = whith_line; // толщина обводки
        orbita_neptun.strokeStyle = "white"; // цвет обводки
        orbita_neptun.arc(cord_x-30,cord_y+30,125*2,0, 2*pi, false);
        orbita_neptun.stroke();

        orbita_uran.beginPath();
        orbita_uran.lineWidth = whith_line; // толщина обводки
        orbita_uran.strokeStyle = "white"; // цвет обводки
        orbita_uran.arc(cord_x-30,cord_y+30,95*2,0, 2*pi, false);
        orbita_uran.stroke();

        orbita_saturn.beginPath();
        orbita_saturn.lineWidth = whith_line; // толщина обводки
        orbita_saturn.strokeStyle = "white"; // цвет обводки
        orbita_saturn.arc(cord_x-15,cord_y+30,75*2,0, 2*pi, false);
        orbita_saturn.stroke();

        orbita_jupiter.beginPath();
        orbita_jupiter.lineWidth = whith_line; // толщина обводки
        orbita_jupiter.strokeStyle = "white"; // цвет обводки
        orbita_jupiter.arc(cord_x-20,cord_y+20,50*2,0, 2*pi, false);
        orbita_jupiter.stroke();

        orbita_mars.beginPath();
        orbita_mars.lineWidth = whith_line; // толщина обводки
        orbita_mars.strokeStyle = "white"; // цвет обводки
        orbita_mars.arc(cord_x-20,cord_y+15,35*2,0, 2*pi, false);
        orbita_mars.stroke();

        orbita_earth.beginPath();
        orbita_earth.lineWidth = whith_line; // толщина обводки
        orbita_earth.strokeStyle = "white"; // цвет обводки
        orbita_earth.arc(cord_x-18,cord_y+20,25*2,0, 2*pi, false);
        orbita_earth.stroke();

        orbita_venus.beginPath();
        orbita_venus.lineWidth = whith_line; // толщина обводки
        orbita_venus.strokeStyle = "white"; // цвет обводки
        orbita_venus.arc(cord_x-18,cord_y+20,17*2,0, 2*pi, false);
        orbita_venus.stroke();

        orbita_mercury.beginPath();
        orbita_mercury.lineWidth = whith_line; // толщина обводки
        orbita_mercury.strokeStyle = "white"; // цвет обводки
        orbita_mercury.arc(cord_x-17,cord_y+22,10*2,0, 2*pi, false);
        orbita_mercury.stroke();
    };
    
    function rend(obj, color, size, x, y, z1, z2, angel){
        obj.beginPath();
        obj.arc(
            (cord_x-z1) + x * Math.cos(angel),
            (cord_y+z2) + y * Math.sin(angel),
            size,
            0,
            pi * 2
        );
        obj.fillStyle = color;
        obj.fill();
    }
    function rend2(obj, color, color2, size, x, y, z1, z2, angel, innerRadius, outerRadius){
        obj.beginPath();

        let gradient = obj.createRadialGradient((cord_x-z1) + x * Math.cos(angel), (cord_y+z2) + y * Math.sin(angel), innerRadius,  (cord_x-z1) + x * Math.cos(angel), (cord_y+z2) + y * Math.sin(angel), outerRadius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color2);

        obj.arc(
            (cord_x-z1) + x * Math.cos(angel),
            (cord_y+z2) + y * Math.sin(angel),
            size,
            0,
            pi * 2
        );
        obj.fillStyle = gradient;
        obj.fill();
    }
    function rend3(obj, color, color2, color3, size, x, y, z1, z2, angel, innerRadius, outerRadius, outerRadius2){
        obj.beginPath();

        let gradient = obj.createRadialGradient((cord_x-z1) + x * Math.cos(angel), (cord_y+z2) + y * Math.sin(angel), innerRadius,  (cord_x-z1) + x * Math.cos(angel), (cord_y+z2) + y * Math.sin(angel), outerRadius, (cord_x-z1) + x * Math.cos(angel), (cord_y+z2) + y * Math.sin(angel), outerRadius2);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);

        obj.arc(
            (cord_x-z1) + x * Math.cos(angel),
            (cord_y+z2) + y * Math.sin(angel),
            size,
            0,
            pi * 2
        );
        obj.fillStyle = gradient;
        obj.fill();
    }

    button_pusk.addEventListener('click',(e=>{
        labelw.textContent = "Вы не выбрали планету!";
        console.log("pusk");
        switch (select_planet.value) {
            case "Меркурий":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_mercury*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_mercury/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_mercury/time)*100*0.6)} км/сек`
                        if(i<=20)
                        {
                            i=20;
                        }else{
                            i -= 1/100; 
                        }

                        if(x<=17)
                        {
                            x = 17;
                        }else{
                            x -= 1/1000
                        }

                        if(y>=22)
                        {
                            y = 22;
                        }else{
                            y += 1/100
                        }
                        console.log(i,x,y);
                        if(i==20 && x==17 && y==22)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mercury/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_mercury;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mercury/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_mercury;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mercury/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_mercury;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Венера":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent= `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_venus*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_venus/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_venus/time)*100*0.6)} км/сек`
                        if(i<=33)
                        {
                            i=33;
                        }else{
                            i -= 1/100; 
                        }

                        if(x<=18)
                        {
                            x = 18;
                        }else{
                            x -= 1/1000
                        }

                        if(y<=20)
                        {
                            y = 20;
                        }else{
                            y -= 1/100
                        }

                        if(i==33 && x==18 && y==20)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_venus/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_venus;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_venus/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_venus;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_venus/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_venus;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Марс":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_mars*0.000001)} млн.км.`;
                toplivo = (from_earth_to_mars/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_mars/time)*100*0.6)} км/сек`
                        if(i>=70)
                        {
                            i=70;
                        }else{
                            i += 1/100; 
                        }

                        if(x>=20)
                        {
                            x = 20;
                        }else{
                            x += 1/1000
                        }

                        if(y<=15)
                        {
                            y = 15;
                        }else{
                            y -= 1/100
                        }

                        if(i==70 && x==20 && y==15)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mars/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_mars;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mars/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_mars;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_mars/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_mars;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Юпитер":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_jupiter*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_jupiter/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_jupiter/time)*100*0.6)} км/сек`
                        if(i>=100)
                        {
                            i=100;
                        }else{
                            i += 1/100; 
                        }

                        if(x>=20)
                        {
                            x = 20;
                        }else{
                            x += 1/1000
                        }

                        if(y<=20)
                        {
                            y = 20;
                        }else{
                            y -= 1/100
                        }

                        if(i==100 && x==20 && y==20)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_jupiter/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_jupiter;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_jupiter/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_jupiter;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_jupiter/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_jupiter;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Сатурн":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_saturn*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_saturn/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_saturn/time)*100*0.6)} км/сек`
                        if(i>=150)
                        {
                            i=150;
                        }else{
                            i += 1/100; 
                        }

                        if(x<=15)
                        {
                            x = 15;
                        }else{
                            x -= 1/1000
                        }

                        if(y>=30)
                        {
                            y = 30;
                        }else{
                            y += 1/100
                        }

                        if(i==150 && x==15 && y==30)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_saturn/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_saturn;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_saturn/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_saturn;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_saturn/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_saturn;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Уран":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_uran*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_uran/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_uran/time)*100*0.6)} км/сек`
                        if(i>=190)
                        {
                            i=190;
                        }else{
                            i += 1/100; 
                        }

                        if(x>=30)
                        {
                            x = 15;
                        }else{
                            x += 1/1000
                        }

                        if(y>=30)
                        {
                            y = 30;
                        }else{
                            y += 1/100
                        }

                        if(i==190 && x==30 && y==30)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_uran/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_uran;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_uran/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_uran;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_uran/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_uran;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Нептун":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_neptun*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_neptun/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_neptun/time)*100*0.6)} км/сек`
                        if(i>=250)
                        {
                            i=250;
                        }else{
                            i += 1/100; 
                        }

                        if(x>=30)
                        {
                            x = 15;
                        }else{
                            x += 1/1000
                        }

                        if(y>=30)
                        {
                            y = 30;
                        }else{
                            y += 1/100
                        }

                        if(i==250 && x==30 && y==30)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_neptun/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_neptun;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_neptun/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_neptun;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_neptun/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_neptun;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            case "Плутон":
                select_planet.disabled = true;
                button_pusk.disabled = true;
                labelw.textContent = `Вы нажали пуск, ожидайте сейчас вы летите на орбиту планеты: ${select_planet.value}.Среднее растояние состовляет: ${parseInt(from_earth_to_pluton*0.000001)} млн.км.`;
                console.log(select_planet.value);
                toplivo = (from_earth_to_pluton/(((angel_raketa/time)*100*0.6)*60*60*24))*24*60;
                animation({
                    clear () {},
                    update () {
                        days.textContent =`Топливо хватит на ${parseInt(toplivo/1440)} суток`;
                        toplivo_html.textContent =`Топливо: ${parseInt(toplivo)} у.е.`;
                        speed_raket.textContent =`Скорость ракеты: ${parseInt(((angel_raketa/time)*100*0.6))} км/сек`;
                        speed_planet.textContent = `Скорость планеты: ${parseInt((angel_pluton/time)*100*0.6)} км/сек`
                        if(i>=300)
                        {
                            i=300;
                        }else{
                            i += 1/100; 
                        }

                        if(x<=0)
                        {
                            x = 0;
                        }else{
                            x -= 1/1000
                        }

                        if(y<=0)
                        {
                            y = 0;
                        }else{
                            y -= 1/100
                        }

                        if(i==300 && x==0 && y==0)
                        {
                            button_minus_speed.disabled = false;
                            button_plus_speed.disabled = false;
                            console.log("Вы на орбите!");
                            labelw.textContent = `Вы прибыли на орбиту планеты: ${select_planet.value}. Теперь вам надо упровлять скоростью ракеты, выровняте её с планетой!`;
                        }
                        if(parseInt((angel_raketa/time)*1000)==parseInt((angel_pluton/time)*1000))
                        {
                            toplivo -= 0;
                            angel_raketa = angel_pluton;
                            console.log("скорость сравнялась");
                            labelw.textContent = `Вы сравнялись со скоростью планеты: ${select_planet.value}.`;
                            button_prezemlenie.disabled = false;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                labelw.textContent = `У вас закончилось топливо, вы теперь не можете приземлится`;
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                            }
                        }
                        else{
                            toplivo -= 10;
                            if(toplivo<=0)
                            {
                                toplivo=0;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `У вас закончилось топливо, вы теперь блуждаете в открытом космосе!!!`;
                            }
                        }
                       
                    },
                    render () {
                        rend(earth_raketa, "red",  2, i,i,x,y, angel_raketa);
        
                    }
                })
                button_plus_speed.addEventListener('click',(e=>{
                    console.log("plus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_pluton/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_pluton;
                            }else{
                                toplivo -= 1;
                                angel_raketa += 0.0004;
                            }
                        },
                    })
                }));
                button_minus_speed.addEventListener('click',(e=>{
                    console.log("minus");
                    animation({
                        update () { 
                            if(parseInt((angel_raketa/time)*1000)==parseInt((angel_pluton/time)*1000))
                            {
                                toplivo -= 0;
                                angel_raketa = angel_pluton;
                            }else{
                                toplivo -= 1;
                                angel_raketa -= 0.0004;
                            }
                        },
                    })
                }));
                button_prezemlenie.addEventListener('click',(e=>{
                    toplivo -= 10000;
                    if(toplivo<=0)
                    {
                        toplivo=0;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Вам не хватило топливо для приземление, вы сгорели в отмосфере`;
                            },
                        })
                    }
                    else{
                        toplivo = toplivo;
                        animation({
                            update () { 
                                button_prezemlenie.disabled = true;
                                button_plus_speed.disabled = true;
                                button_minus_speed.disabled = true;
                                labelw.textContent = `Поздровляем вы преземлились и вам хватило топлива. Вы прилетели на ${parseInt(toplivo/1440)} суток раньше`;
                            },
                        })
                    }
                }));
                break;
            default:
                break;
        }
     
    }));
});