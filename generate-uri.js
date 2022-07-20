const fs = require("fs");

const NAMES = [
  "Oliver",
  "Declan",
  "Theodore",
  "Jasper",
  "Silas",
  "Charlotter",
  "Aurora",
  "Violet",
  "Hazel",
  "Luna",
];

const IMAGES = [
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/1657555751410693_c5_720x720.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/1f7ef214fa9f9155047a727cadbf2f19.jpg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/7f756bcb3481db56650768cc5fc0cf50.jpg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/Minions-despicable-me-cliparts.jpg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/c6de4fbc92c32c25dd90c41884968d63--die-minions-minion-s.jpg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/download.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/images%20%281%29.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/images%20%282%29.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/images.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmeanVufwqQkgNymH2arAX7P1NrPxB9xySCQdukpwMpxQs/latest-minion-facebook-dp-profile-picture.png",
];

const generateURI = (folder_name) => {
  fs.mkdirSync(folder_name);

  for (let i = 1; i <= 10; i++) {
    let name_idx = Math.round(Math.random() * 10 - 0.5);
    let image_idx = Math.round(Math.random() * 10 - 0.5);

    let content = {
      name: NAMES[name_idx],
      image: IMAGES[image_idx],
      attributes: [],
    };

    fs.writeFileSync(`${folder_name}/${i}`, JSON.stringify(content));
  }
};

for (let i = 1; i <= 10; i++) {
  generateURI(`base-uri-${i}`);
}
