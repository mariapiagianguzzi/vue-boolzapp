/* Milestone 3
● Aggiunta di un messaggio : l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo. */

let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    message: "",
    contacts: [
      {
        name: "Michele",
        avatar: "./assets/img/avatar_4.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "./assets/img/avatar_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "./assets/img/avatar_6.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "./assets/img/avatar_8.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Luca",
        avatar: "./assets/img/avatar_5.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Che film vuoi vedere questa sera?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ci vediamo tutta la saga di Harry Potter",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    activeMessage(index) {
      this.counter = index;
      console.log(index);
    },
    sendMessage() {
      if (this.message.length >= 0) {
        this.contacts[this.counter].messages.push({
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: this.message,
          status: "sent",
        });
        this.message = "";
      }
      setTimeout(this.receivedMessage, 1000);
    },
    receivedMessage() {
      this.contacts[this.counter].messages.push({
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: "ok",
        status: "received",
      });
    },
  },
});
