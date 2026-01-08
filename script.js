let goal = "cut";

function selectGoal(g) {
  goal = g;
}

function buildPlan() {
  const w = +weight.value;
  const h = +height.value;
  const a = +age.value;
  const act = +activity.value;

  if (!w || !h || !a) {
    alert("أدخل كل البيانات");
    return;
  }

  // BMR
  let bmr = 10*w + 6.25*h - 5*a + 5;
  let calories = Math.round(bmr * act);

  if (goal === "cut") calories -= 500;
  if (goal === "bulk") calories += 500;

  caloriesEl(calories);
  mealsEl();
  alternativesEl();
  tipsEl();

  document.getElementById("dashboard").classList.remove("hidden");
}

function caloriesEl(c) {
  document.getElementById("calories").innerText = c + " kcal";
}

function mealsEl() {
  const meals =
    goal === "cut"
    ? [
        "08:00 فطار: بيض + شوفان",
        "13:00 غداء: فراخ + رز",
        "19:00 عشاء: زبادي + فاكهة"
      ]
    : [
        "08:00 فطار: بيض + شوفان + موز",
        "13:00 غداء: لحمة + مكرونة",
        "16:00 سناك: مكسرات",
        "19:00 عشاء: تونة + بطاطس"
      ];

  document.getElementById("meals").innerHTML =
    meals.map(m => "• " + m).join("<br>");
}

function alternativesEl() {
  document.getElementById("alternatives").innerHTML = `
    بدل الفراخ → سمك<br>
    بدل الرز → بطاطس<br>
    بدل الشوفان → عيش أسمر
  `;
}

function tipsEl() {
  const tips = [
    "اشرب 2–3 لتر مياه",
    "نام 7–8 ساعات",
    "امشي 20 دقيقة",
    "ما تفوتش وجبة"
  ];
  document.getElementById("tips").innerHTML =
    tips[Math.floor(Math.random()*tips.length)];
}
