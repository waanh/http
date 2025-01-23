export function renderTickets(tickets) {
    const list = document.getElementById('ticket-list');
    list.innerHTML = '';
    tickets.forEach((ticket) => {
      const item = document.createElement('li');
      item.innerHTML = `
        <div>
          <span>${ticket.name}</span>
          <button class="edit" data-id="${ticket.id}">✎</button>
          <button class="delete" data-id="${ticket.id}">x</button>
        </div>`;
      list.appendChild(item);
    });
  }
  
  export function showModal(content) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `<div>${content}<button id="close-modal">Закрыть</button></div>`;
    document.body.appendChild(modal);
  
    document.getElementById('close-modal').addEventListener('click', () => {
      modal.remove();
    });
  }
  