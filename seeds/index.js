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
      author: "60d4c7ef25c0125f64b9a784",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet consectetur adipiscing elit. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Maecenas sed enim ut sem viverra aliquet eget. Tortor condimentum lacinia quis vel eros donec. Neque ornare aenean euismod elementum nisi. Consequat semper viverra nam libero justo laoreet sit.",
      price: price,
      geometry: {
        type: "Point",
        coordinates: [-80.2700525, 25.3252141],
      },
      image: [
        {
          url: "https://res.cloudinary.com/drzazgxlw/image/upload/v1624902148/YelpCamp/zmttfvfacjl7cwm9vujd.jpg",
          filename: "YelpCamp/zmttfvfacjl7cwm9vujd",
        },
        {
          url: "https://res.cloudinary.com/drzazgxlw/image/upload/v1624903936/YelpCamp/uiyclbcioykid7bbljfx.jpg",
          filename: "YelpCamp/uiyclbcioykid7bbljfx",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
