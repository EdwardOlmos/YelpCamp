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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cupiditate quia iure, distinctio animi aliquam modi doloremque architecto explicabo possimus autem voluptas iusto exercitationem reprehenderit illo sapiente quis. Alias, quisquam. Reiciendis officiis recusandae quas minus blanditiis. Explicabo neque esse eos eum, consectetur, eligendi, exercitationem qui aut animi recusandae illo labore quo? Sequi accusantium suscipit quia similique minus deserunt, repellat ea. Corrupti esse ipsa est totam vero debitis nisi tempora ipsam eveniet accusamus recusandae ut quis molestias perspiciatis asperiores laboriosam quibusdam repudiandae, dolore explicabo minima maxime tenetur veniam commodi quos. Exercitationem. Molestiae at tenetur ex ab, neque quisquam quam maiores vitae reiciendis impedit deserunt eum enim fugiat, ullam, optio consequuntur nulla dolorum ipsum. Sint ipsam eveniet numquam non quo reiciendis sit. A nesciunt distinctio alias soluta aspernatur enim consectetur eum, temporibus eaque sequi pariatur eveniet. Eaque, adipisci, porro odio voluptatibus nesciunt assumenda facilis omnis nulla natus nemo sunt ipsam quis maiores. Sit temporibus, nobis quia expedita, rerum nihil quis doloremque obcaecati quasi voluptatum debitis dolorum iusto hic quae dolorem numquam atque. Praesentium repudiandae cum dolorem fuga nostrum sequi, saepe modi possimus.",
      price: price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
