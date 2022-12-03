/* == Функція для взяття елемента з index.html == */
const select = e => { return document.querySelector(e); }
/* == В answers зберігаються відповіді == */
/* == Щоб генератор не видавав однакові відповіді == */
/* == Взяття input-ів з параметрами == */
let answers = [], fromi = select(".from"), toi = select(".to");
/* == Функція для генерування випадкового числа == */
const get = (from, to) => { return (Math.round(Math.random() * (to - from)) + from) };
/* == Функція для присвоювання елементу анімації == */
const animate = (e, a) => { select(e).style.animation = a; }

/* == Кожні 150 мс генеруємо нове число == */
/* == та вставляємо його в коробку == */
const intr = (n, from, to) => {
	if (!n) return;
	setTimeout(() => { select(".square").innerHTML = get(from, to); intr(n - 1, from, to)}, 300);
}

/* == Функція, яка виконується == */
/* == після натискання кнопки == */
const generate = m => {
	/* == Берем значення input-ів == */
	let from = +(fromi.value), to = +(toi.value), num = get(from, to);	
	/* == Якщо значення "від" більше за "до" == */
	/* == свапаєм їх == */
	if (from > to) [from, to] = [to, from];
	/* == Якщо рандомайзер згенерував усі можливі == */
	/* == числа в проміжку, або якщо числа в == */
	/* == історії не належать проміжку включно == */
	/* == від from  до to, очищуємо історію == */
	if (
		(answers.length >= (to - from + 1)) ||
		(Math.min(...answers) < from || Math.max(...answers) > to)
	) answers.length = 0;
	/* == Якщо рандомайзер згенерував число, яке == */
	/* == є в історії, генеруємо заново == */
	while(answers.includes(num)) num = get(from, to);
	/* == Додаємо відповідь у історію == */
	answers.push(num);
				
	/* == Ставимо анімацію затухання для == */
	/* == основного меню та коробки == */
	animate(".number", "0.3s ease 0s normal both fadeOff");
	animate(".bottom", "0.3s ease 0s normal both fadeOff");

	/* == Після затухання забираємо елементи == */
	setTimeout(() => {
		select(".number").style.display = "none";
		select(".bottom").style.display = "none";
	}, 301);

	/* == === ІНТРИГА === == */
	/* == повертраємо коробку == */
	/* == 15 разів міняємо в ній число == */
	/* == та запускаємо анімацію появи == */
	/* == через 6 секунд запускаємо анімацію приближення == */
	setTimeout(() => {
		intr(15, from, to);
		select(".number").removeAttribute("style");
		animate(".number", "2s cubic-bezier(1, 0, 0, 1) 6s normal both zoom");
		animate(".square", "1s ease 0s normal both fadeIn");
	}, 2000)
	
	/* == звужуємо коробку == */
	setTimeout(() => animate(".square", "1.7s cubic-bezier(1, 0, 0, 1) 0s normal both push"), 6000)
	/* == на половині звуження підставляємо раніше згенероване число == */
	setTimeout(() => select(".square").innerHTML = num, 6850);
	/* == на половині приближення показуємо меню == */
	setTimeout(() => select(".bottom").removeAttribute("style"), 9000);

	/* == якщо анімація програється вперше == */
	if (m) {
		/* == Міняємо вміст кнопки на "Щераз" == */
		/* == Атрибут онклік в кнопці більше == */
		/* == генерувати випадкове число "вперше" == */
		/* == міняємо стиль меню (indxe.html:16) == */
		setTimeout(() => {
			select(".start").innerHTML = "Щераз";
			select(".start").setAttribute("onclick", "generate(0)");
			select("style").innerHTML = `
				body {
					display: grid;
					place-items: center;
					height: 100vh;
					position: relative;
				}

				.bottom {
					bottom: 50px;
					position: absolute;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 20px;
				}

				.params { gap: 16px; } 
				.number { font-size: 150px; }
				.gap { width: 25px; height: 4px; }
				input { font-size: 50px; width: 100px; }
			`;
		}, 300)
	}
}

/* == Оперування зі значеннями в input-ах == */
echarts = () => {
	/* == Різниця кількості символів в input-ах == */
	let difference = `${+fromi.value}`.length - `${+toi.value}`.length

	/* == Якщо в input.from мнеше символів == */
	/* == Додаємо до початку стільки нулів == */
	/* == Скільки вказано в різниці == */
	if (difference < 0) {
		fromi.value = "0".repeat(Math.abs(difference)) + +fromi.value;
		toi.value = +toi.value;
	}

	/* == Те саме тільки з input.to == */
	else if (difference > 0) {
		toi.value = "0".repeat(difference) + +toi.value;
		fromi.value = +fromi.value;
	}

	/* == Якщо ж різниці немає, забираєм нулі == */
	else {
		toi.value = +toi.value;
		fromi.value = +fromi.value;
	}

	/* == Якщо значення input-ів однакові == */
	/* == деактивуєм кнопку запуску == */
	if (fromi.value == toi.value) {
		select(".start").style.setProperty("pointer-events", "none");
		select(".start").style.opacity = "0.2";
	}

	/* == Інакше забираєм стилі для деактивації == */
	else select(".start").removeAttribute("style");
}

/* == Виконуєм echarts при зміні в input-ах == */
fromi.addEventListener("input", echarts);
toi.addEventListener("input", echarts);