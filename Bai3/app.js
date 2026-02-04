const model = document.querySelector(".model");
const openModelBtn = document.querySelector(".open_model_btn");
const closeModelBtn = document.querySelector(".close_model_btn");
const iconCloseModel = document.querySelector(".model_header i");

function toggleModel() {
  model.classList.toggle("hide");
}

openModelBtn.addEventListener("click", toggleModel);
iconCloseModel.addEventListener("click", toggleModel);
closeModelBtn.addEventListener("click", toggleModel);

model.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModel();
});
