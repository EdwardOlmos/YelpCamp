const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/220381",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis nam, animi facere possimus quam beatae cupiditate, maxime molestias, blanditiis officia hic non necessitatibus dignissimos tempora amet modi aut dolore? Obcaecati, illum consequatur. Nulla ab, doloremque assumenda qui sunt quod, cupiditate accusantium facere numquam veniam laborum reiciendis fugit distinctio obcaecati alias earum. Iste facere eos dolores beatae quis rem molestiae?",
      price: price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
