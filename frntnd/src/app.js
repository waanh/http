import { getTickets, createTicket, deleteTicket } from '../../bcknd/server';
import { renderTickets, showModal } from './ui';

document.addEventListener('DOMContentLoaded', async () => {
  const tickets = await getTickets();
  renderTickets(tickets);

  document.getElementById('add-ticket-btn').addEventListener('click', () => {
    showModal('Добавить тикет: <input type="text" id="new-ticket-name"><button id="save-ticket">Сохранить</button>');

    document.getElementById('save-ticket').addEventListener('click', async () => {
      const name = document.getElementById('new-ticket-name').value;
      await createTicket({ name, description: '', status: false });
      const updatedTickets = await getTickets();
      renderTickets(updatedTickets);
      document.getElementById('modal').remove();
    });
  });

  document.getElementById('ticket-list').addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const id = e.target.dataset.id;
      await deleteTicket(id);
      const updatedTickets = await getTickets();
      renderTickets(updatedTickets);
    }
  });
});
