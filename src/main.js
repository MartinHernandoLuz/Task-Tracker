import './style.css';

document.querySelectorAll('.task_delete').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log("lala");
        e.target.parentElement.remove();
    });
});

function createTask(button, input) {
    const createNote_button = () => {
        // campo de texto para crear la tarea
        let value = input.value.trim();
        if (!value) return;  // Evita tareas vacías

        const tasks = document.querySelector('#tasks');

        const task = document.createElement('div');
        task.classList.add("task");
        const content = `
          <input type="checkbox" class="task_check">
          <h4 class="task_name">${value}</h4>
          <button class="task_delete">🗑️</button>
        `;
        task.innerHTML = content;






        // Evento para eliminar la tarea
        task.querySelector('.task_delete').addEventListener('click', (e) => {
            console.log("lala");
            e.target.parentElement.remove();
        });

        // Evento para tachar texto y hacer transparente la tarea
        const checkbox = task.querySelector('.task_check');
        const taskName = task.querySelector('.task_name');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskName.style.textDecoration = 'line-through';
                task.style.opacity = '0.5';
                task.style.order = "10"
            } else {
                taskName.style.textDecoration = 'none';
                task.style.opacity = '1';
                task.style.order = "0"
            }
        });






        tasks.appendChild(task);

        // Reset input
        input.placeholder = 'add another task';
        input.value = '';
    };

    // botón de crear tareas
    button.addEventListener('click', () => createNote_button());
}

createTask(document.querySelector('#enter'), document.querySelector('#inputTask'));





