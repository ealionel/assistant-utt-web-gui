// Un objet Message contient toutes les informations d'un message envoyé
// id, date, text, isFromSender
export default class Message {
  constructor({ text = '', isFromSender = true }) {
    Message.numberOfInstance = (Message.numberOfInstance || 0) + 1;

    this.id = Message.numberOfInstance;
    this.date = new Date();
    this.text = text;
    this.isFromSender = isFromSender ;
  }
}
