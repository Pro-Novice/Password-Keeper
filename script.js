const API = "https://crudcrud.com/api/fad65dfbc4fe4e7195a2bfbb2f9fb32e/passwordKeeper";

const form = document.getElementById("passwordForm");
const titleInput = document.getElementById("title");
const passwordInput = document.getElementById("password");
const list = document.getElementById("list");
const total = document.getElementById("total");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

// Load existing on start
window.addEventListener("DOMContentLoaded", loadPasswords);

// Submit form
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const obj = {
    title: titleInput.value.trim(),
    password: passwordInput.value.trim()
  };

  if (!obj.title || !obj.password) return;

  const res = await axios.post(API, obj);
  addToList(res.data);

  titleInput.value = "";
  passwordInput.value = "";
});

// Load from CrudCrud
async function loadPasswords() {
  list.innerHTML = "";
  const res = await axios.get(API);
  res.data.forEach(addToList);
}

// Display entry
function addToList(user) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.setAttribute("data-id", user._id);

  li.innerHTML = `
    <span>
      <strong>${user.title}</strong> — ${user.password}
    </span>
    <span>
      <button class="btn btn-warning btn-sm me-2 edit">Edit</button>
      <button class="btn btn-danger btn-sm delete">Delete</button>
    </span>
  `;

  list.appendChild(li);
  updateCount();
}

// Delete
list.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.closest("li");
    const id = li.dataset.id;

    await axios.delete(`${API}/${id}`);
    li.remove();
    updateCount();
  }

  // Edit
  if (e.target.classList.contains("edit")) {
    const li = e.target.closest("li");
    const id = li.dataset.id;

    titleInput.value = li.querySelector("strong").textContent;
    passwordInput.value = li.textContent.split("—")[1].trim();

    await axios.delete(`${API}/${id}`);
    li.remove();
    updateCount();
  }
});

// Update count
function updateCount() {
  total.textContent = list.getElementsByTagName("li").length;
}

/* ============================
          SEARCH FEATURE
============================ */
search.addEventListener("input", filterList);
searchBtn.addEventListener("click", filterList);

search.addEventListener("keydown", e => {
  if (e.key === "Enter") filterList();
});

function filterList() {
  let filter = search.value.toLowerCase();
  let items = list.getElementsByTagName("li");

  Array.from(items).forEach(item => {
    const title = item.querySelector("strong").textContent.toLowerCase();
    item.style.display = title.includes(filter) ? "" : "none";
  });
}