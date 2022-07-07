function solve() {
    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    let addButtonElement = document.getElementById('add');
    let resetButtonElement = document.getElementById('reset');
    let listEmailsElement = document.getElementById('list');
    let sentListElement = document.querySelector('.sent-list');
    let deleteListElement = document.querySelector('.delete-list')

    resetButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    })
    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        e.preventDefault();

        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (recipientName !== '' && title !== '' && message !== '') {
            let newLiElement = document.createElement('li');
            let newh4TitleElement = document.createElement('h4');
            let newh4RecipientElement = document.createElement('h4');
            let newMessageElement = document.createElement('span');
            let buttonDivElement = document.createElement('div');
            let sendButtonElement = document.createElement('button');
            let deleteButtonElement = document.createElement('button');

            newh4RecipientElement.textContent = 'Recipient Name: ';
            newh4RecipientElement.textContent += recipientName;
            newh4TitleElement.textContent = 'Title: ';
            newh4TitleElement.textContent += title;
            newMessageElement.textContent = message;

            buttonDivElement.id = 'list-action'
            sendButtonElement.addEventListener('click', (e) => {
                let newLiTag = document.createElement('li');
                let newTitleSpanTag = document.createElement('span');
                let newRecipeSpanTag = document.createElement('span');
                let newButtonDivTag = document.createElement('div');
                let newButtonTag = document.createElement('button');

                newRecipeSpanTag.textContent = 'To: ';
                newRecipeSpanTag.textContent += recipientName;
                newTitleSpanTag.textContent = 'Title: ';
                newTitleSpanTag.textContent += title;

                newButtonDivTag.classList.add('btn');
                newButtonTag.type = 'submit';
                newButtonTag.classList.add('delete');
                newButtonTag.textContent = 'Delete';
                newButtonTag.addEventListener('click', (e) => {

                    let deletedLiTag = document.createElement('li');
                    let deletedSpanTitle = document.createElement('span');
                    let deletedSpanRecipient = document.createElement('span');

                    deletedSpanTitle.textContent = 'Title: ';
                    deletedSpanTitle.textContent += title;
                    deletedSpanRecipient.textContent = 'To: ';
                    deletedSpanRecipient.textContent += recipientName;

                    deletedLiTag.appendChild(deletedSpanRecipient);
                    deletedLiTag.appendChild(deletedSpanTitle);

                    deleteListElement.appendChild(deletedLiTag);
                    sentListElement.removeChild(newLiTag);
                })
                newButtonDivTag.appendChild(newButtonTag);

                newLiTag.appendChild(newRecipeSpanTag);
                newLiTag.appendChild(newTitleSpanTag);
                newLiTag.appendChild(newButtonDivTag);

                sentListElement.appendChild(newLiTag);
                listEmailsElement.removeChild(newLiElement);
            })
            deleteButtonElement.addEventListener('click', (e) => {
                let deletedLiTag = document.createElement('li');
                let deletedSpanTitle = document.createElement('span');
                let deletedSpanRecipient = document.createElement('span');

                deletedSpanTitle.textContent = 'Title: ';
                deletedSpanTitle.textContent += title;
                deletedSpanRecipient.textContent = 'To: ';
                deletedSpanRecipient.textContent += recipientName;

                deletedLiTag.appendChild(deletedSpanRecipient);
                deletedLiTag.appendChild(deletedSpanTitle);

                deleteListElement.appendChild(deletedLiTag);
                listEmailsElement.removeChild(newLiElement);

            })
            sendButtonElement.id = 'send';
            sendButtonElement.type = 'submit'
            sendButtonElement.textContent = 'Send';
            deleteButtonElement.id = 'delete';
            deleteButtonElement.type = 'submit'
            deleteButtonElement.textContent = 'Delete';
            buttonDivElement.appendChild(sendButtonElement);
            buttonDivElement.appendChild(deleteButtonElement);

            newLiElement.classList.add('list-mails');
            newLiElement.appendChild(newh4TitleElement);
            newLiElement.appendChild(newh4RecipientElement);
            newLiElement.appendChild(newMessageElement);
            newLiElement.appendChild(buttonDivElement);
            listEmailsElement.appendChild(newLiElement);
        };
    })
}
