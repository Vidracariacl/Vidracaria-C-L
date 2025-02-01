document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Exibe a mensagem de sucesso após o envio do formulário
      Swal.fire({
        title: 'Obrigado!',
        text: 'Recebemos sua solicitação. Em breve, nossa equipe entrará em contato.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      // Aqui é feito o reset do formulário (opcional)
      form.reset();
    });
  });
});

// Adiciona Sweet Alert via CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);
