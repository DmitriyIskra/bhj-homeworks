
const chatWidget = document.querySelector('.chat-widget');
const chatInput = chatWidget.querySelector('.chat-widget__input');
const messagesArea = chatWidget.querySelector('.chat-widget__messages-container');
let messages = chatWidget.querySelector('.chat-widget__messages');

const firstMessageFromRobot = chatWidget.querySelector('.message__time');
firstMessageFromRobot.textContent = `${new Date().getHours()}:${new Date().getMinutes()}`; // Актуальное время для первого сообщения бота

const collectionMessagesBot = [
    'Здрасти, досвиданья',
    'Я есть Груд',
    'Для вАС все операторы заняты',
    'Если у вас есть наш номер телефона удалите его',
    'Ты кто?',
    'Хотеть не вредно'
];

let counter = 0;
let idTimeout = null;
let heightLastMessage;
let heightPreLastMessage;



document.addEventListener('click', (e) => {         // активация чата
    if(e.target.closest('.chat-widget') && !chatWidget.classList.contains('chat-widget_active')) {
        chatWidget.classList.add('chat-widget_active');
        startTimeout();
        console.log('dfv')
    }
    else if(!e.target.closest('.chat-widget')) {
        chatWidget.classList.remove('chat-widget_active');
        clearTimeout(idTimeout);
    };
});


/// *************   Функции для вывода сообщения при простое чата
function startTimeout() {    // Активация или перезапуск таймаута
    if(idTimeout) {
        clearTimeout(idTimeout);
        idTimeout = null;
    };

    idTimeout = setTimeout( () => {
        askFromBotAfterTimeout();
        idTimeout = null;
    }, 30000);
};

function askFromBotAfterTimeout() {  // Вопрос от бота при простое чата
messages.innerHTML += `
    <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">Ну и...?</div>
    </div>
`;

heightLastMessage = messages.lastElementChild.getBoundingClientRect().height + 10;

scrollChat(heightLastMessage, 0)
};
/// *************   ****************   **********************


/// *************   Функции добавления в чат сообщений
function setMessageFromClient(text, time) {  // формирование и отправка сообщения клиента
   messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${text}</div>
  </div>
`;
};


function messageSelectionBot(time) {    // Выбор сообщения от бота
    let messageBot = collectionMessagesBot[counter];
    counter = (counter + 1) % collectionMessagesBot.length === 0 ? 0 : counter + 1;

    setMessageFromBot(messageBot, time)
};

function setMessageFromBot(text, time) {  // формирование и отправка сообщения бота
    messages.innerHTML += `
   <div class="message">
     <div class="message__time">${time}</div>
     <div class="message__text">${text}</div>
   </div>
 `;
 };
/// *************   ****************   **********************



/// *************   Функции добавления в чат сообщений
function scrollChat(heightEl1, heightEl2) {    // Скрол чата вслед за с сообщениями
    messagesArea.scrollBy(0, heightEl1 + heightEl2);
};
/// *************   ****************   **********************



chatInput.addEventListener('keydown', e => {
    if(e.code === 'Enter' && chatInput.value) {
        let valueInput = chatInput.value;
        let timeInput = `${new Date().getHours()}:${new Date().getMinutes()}`;

        setMessageFromClient(valueInput, timeInput);
        messageSelectionBot(timeInput);

        chatInput.value = '';
        
        startTimeout();

        if(messages.getBoundingClientRect().height > messagesArea.getBoundingClientRect().height) {
            heightLastMessage = messages.lastElementChild.getBoundingClientRect().height + 10;
            heightPreLastMessage = messages.lastElementChild.previousElementSibling.getBoundingClientRect().height + 10;
            scrollChat(heightLastMessage, heightPreLastMessage);
        };
    };
});


