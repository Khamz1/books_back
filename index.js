const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use(require('./routes/books.routes'));
app.use(require('./routes/author.routes'));
app.use(require('./routes/genre.routes'));
app.use(require('./routes/critic.routes'))

mongoose.connect('mongodb+srv://khamzzaty:intocode@cluster0.hawdzkl.mongodb.net/book_shop', {
}).then(() => console.log('Успешно соеденились с MongoDB'))
    .catch(() => console.log('something going wrong'));

app.listen(3000, () => {
    console.log("server go on ")
})  
