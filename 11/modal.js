const modal = () => {
  const createModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.25); display: flex; justify-content: center; align-items: center; 
      `;

    const body = document.createElement('div');
    body.style.cssText = `
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
      `;
    body.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    const close = document.createElement('div');
    close.classList.add('close');
    close.textContent = 'X';
    close.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
      `;
    close.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    const content = document.createElement('div');
    content.classList.add('content');
    content.style.cssText = `
          width: 300px;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
      `;

    content.textContent = '안녕하세요';

    body.appendChild(close);
    body.appendChild(content);
    modal.appendChild(body);

    document.body.appendChild(modal);
  };

  return { createModal };
};

export default modal;
