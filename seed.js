const mongoose = require("mongoose");
const City = require("./models/city.model");

// version web

mongoose
  .connect(
    "mongodb+srv://jean:123@cluster0-urpjt.gcp.mongodb.net/dymatrip?retryWrites=true&w=majority"
  )
  .then(() => {
    Promise.all([
      new City({
        name: "Bamako",
        image: "http://localhost/assets/images/bamako.jpeg",
        sites: [
          {
            image: "http://localhost/assets/images/sites/louvre.jpg",
            name: "Louvre",
            city: "Bamako",
            price: 12.0,
          },
          {
            image: "http://localhost/assets/images/sites/chaumont.jpg",
            name: "Chaumont",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/dame.jpg",
            name: "Notre Dame",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/defense.jpg",
            name: "La défense",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/effeil.jpg",
            name: "Tour Eiffel",
            city: "Bamako",
            price: 15.0,
          },
          {
            image: "http://localhost/assets/images/sites/luxembourg.jpg",
            name: "Jardin Luxembourg",
            id: "a6",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/mitterrand.jpg",
            name: "Bibliothèque Mitterrand",
            id: "a7",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/montmartre.jpg",
            name: "Montmartre",
            id: "a8",
            city: "Bamako",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/catacombe.jpg",
            name: "Catacombes",
            id: "a9",
            city: "Bamako",
            price: 10.0,
          },
        ],
      }).save(),
      new City({
        name: "Kayes",
        image: "http://localhost/assets/images/kayes.jpeg",
        sites: [
          {
            image: "http://localhost/assets/images/sites/Kayes_opera.jpg",
            name: "Opéra",
            id: "l1",
            city: "Kayes",
            price: 100.0,
          },
          {
            image: "http://localhost/assets/images/sites/Kayes_bellecour.jpg",
            name: "Place Bellecour",
            id: "l2",
            city: "Kayes",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/Kayes_basilique.jpg",
            name: "Basilique St-Pierre",
            id: "l3",
            city: "Kayes",
            price: 10.0,
          },
          {
            image: "http://localhost/assets/images/sites/Kayes_mairie.jpg",
            name: "Mairie",
            id: "l4",
            city: "Kayes",
            price: 0.0,
          },
        ],
      }).save(),
      new City({
        name: "Mopti",
        image: "http://localhost/assets/images/mopti.jpeg",
        sites: [
          {
            image: "http://localhost/assets/images/sites/mopti_orthodox.jpg",
            name: "Eglise Orthodoxe",
            id: "n1",
            city: "Mopti",
            price: 5.0,
          },
          {
            image: "http://localhost/assets/images/sites/mopti_riviera.jpg",
            name: "Riviera",
            id: "n2",
            city: "Mopti",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/mopti_promenade.jpg",
            name: "Promenade des Anglais",
            id: "n3",
            city: "Mopti",
            price: 0.0,
          },
          {
            image: "http://localhost/assets/images/sites/mopti_opera.jpg",
            name: "Opéra",
            id: "n4",
            city: "Mopti",
            price: 100.0,
          },
        ],
      }).save(),
    ]).then((res) => {
      console.log("data installed");
      mongoose.connection.close();
    });
  });

// version avece l'émulateur

// mongoose
//   .connect(
//     "mongodb+srv://jean:123@cluster0-urpjt.gcp.mongodb.net/dymatrip_emu?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     Promise.all([
//       new City({
//         name: "Bamako",
//         image: "http://10.0.2.2/assets/images/Bamako.jpg",
//         sites: [
//           {
//             image: "http://10.0.2.2/assets/images/sites/louvre.jpg",
//             name: "Louvre",
//             city: "Bamako",
//             price: 12.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/chaumont.jpg",
//             name: "Chaumont",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/dame.jpg",
//             name: "Notre Dame",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/defense.jpg",
//             name: "La défense",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/effeil.jpg",
//             name: "Tour Eiffel",
//             city: "Bamako",
//             price: 15.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/luxembourg.jpg",
//             name: "Jardin Luxembourg",
//             id: "a6",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/mitterrand.jpg",
//             name: "Bibliothèque Mitterrand",
//             id: "a7",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/montmartre.jpg",
//             name: "Montmartre",
//             id: "a8",
//             city: "Bamako",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/catacombe.jpg",
//             name: "Catacombes",
//             id: "a9",
//             city: "Bamako",
//             price: 10.0,
//           },
//         ],
//       }).save(),
//       new City({
//         name: "Kayes",
//         image: "http://10.0.2.2/assets/images/Kayes.jpg",
//         sites: [
//           {
//             image: "http://10.0.2.2/assets/images/sites/Kayes_opera.jpg",
//             name: "Opéra",
//             id: "l1",
//             city: "Kayes",
//             price: 100.0,
//           },
//           {
//             image:
//               "http://10.0.2.2/assets/images/sites/Kayes_bellecour.jpg",
//             name: "Place Bellecour",
//             id: "l2",
//             city: "Kayes",
//             price: 0.0,
//           },
//           {
//             image:
//               "http://10.0.2.2/assets/images/sites/Kayes_basilique.jpg",
//             name: "Basilique St-Pierre",
//             id: "l3",
//             city: "Kayes",
//             price: 10.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/Kayes_mairie.jpg",
//             name: "Mairie",
//             id: "l4",
//             city: "Kayes",
//             price: 0.0,
//           },
//         ],
//       }).save(),
//       new City({
//         name: "Mopti",
//         image: "http://10.0.2.2/assets/images/nice.jpg",
//         sites: [
//           {
//             image: "http://10.0.2.2/assets/images/sites/mopti_orthodox.jpg",
//             name: "Eglise Orthodoxe",
//             id: "n1",
//             city: "Mopti",
//             price: 5.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/mopti_riviera.jpg",
//             name: "Riviera",
//             id: "n2",
//             city: "Mopti",
//             price: 0.0,
//           },
//           {
//             image:
//               "http://10.0.2.2/assets/images/sites/mopti_promenade.jpg",
//             name: "Promenade des Anglais",
//             id: "n3",
//             city: "Mopti",
//             price: 0.0,
//           },
//           {
//             image: "http://10.0.2.2/assets/images/sites/mopti_opera.jpg",
//             name: "Opéra",
//             id: "n4",
//             city: "Mopti",
//             price: 100.0,
//           },
//         ],
//       }).save(),
//     ]).then((res) => {
//       console.log("data installed");
//       mongoose.connection.close();
//     });
//   });
