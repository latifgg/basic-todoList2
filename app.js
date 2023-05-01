// Boş bir dizi oluşturuyoruz
let tasks = [];

// HTML elementlerini seçiyoruz
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Ekleme düğmesine tıklanınca çalışacak fonksiyon
function addTask() {
  // Girdi alanındaki metni alıyoruz
  const newTask = taskInput.value;
  
  // Metni diziye ekliyoruz
  tasks.push(newTask);
  
  // Listeyi güncelliyoruz
  updateTaskList();
  
  // Girdi alanını temizliyoruz
  taskInput.value = "";
}

// Görev listesini güncelleyen fonksiyon
function updateTaskList() {
  // Listeyi boşaltıyoruz
  taskList.innerHTML = "";
  
  // Her bir görev için bir öğe oluşturuyoruz
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    listItem.textContent = task;
    
    // Listeye öğeyi ekliyoruz
    taskList.appendChild(listItem);
  }
}

// Ekleme düğmesine tıklama olayı ekliyoruz
addButton.addEventListener("click", addTask);
