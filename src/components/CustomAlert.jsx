import Swal from 'sweetalert2';

export const customAlert = ({ icon = 'error', title = 'Oops...', text = 'Algo malir sal', footer = '' }) => {
  Swal.fire({
    icon,
    title,
    text,
    footer
  })
}