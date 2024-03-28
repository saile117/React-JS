import AnimalCard from "./AnimalCard";

function AnimalsList() {
    const animals = [
        {
            name: "Leo",
            emoji: ":tête_de_lion:",
            age: 5, specie: "Lion",
            description: "Majestic creature with a golden mane, king of the jungle."
        },
        {
            name: "Ella",
            emoji: ":éléphant:",
            age: 10,
            specie: "Elephant",
            description: "Gentle giant with a long trunk, known for its intelligence."
        },
        {
            name: "Max",
            emoji: ":chien:",
            age: 3, specie: "Dog",
            description: "Loyal companion, playful and friendly, man's best friend."
        },
        {
            name: "Simba",
            emoji: ":tête_de_tigre:",
            age: 2, specie: "Tiger",
            description: "Striped predator, powerful and agile, roams the jungle."
        },
        {
            name: "Milo",
            emoji: ":chat:",
            age: 4,
            specie: "Cat",
            description: "Independent hunter, graceful and mysterious, loves to nap."
        },
        {
            name: "Gus",
            emoji: ":tête_de_girafe:",
            age: 7, specie: "Giraffe",
            description: "Tall herbivore with a long neck, peacefully grazing."
        },
        { name: "Sophie", emoji: ":serpent:", age: 8, specie: "Snake", description: "Slithery reptile, often misunderstood, vital to ecosystems." },
        { name: "Charlie", emoji: ":ours:", age: 6, specie: "Bear", description: "Furry omnivore, strong and cuddly, hibernates in winter." },
        { name: "Luna", emoji: ":lapin:", age: 1, specie: "Rabbit", description: "Small herbivore, quick and timid, with long ears." },
        { name: "Oscar", emoji: ":oiseau:", age: 2, specie: "Bird", description: "Feathered flyer, sings sweet melodies, migrates yearly." },
    ];

    return(
    <>

        <AnimalCard animal={animals[4]} />
        <AnimalCard animal={animals[3]} />
        <AnimalCard animal={animals[6]} />

    </>
    );
}

export default AnimalsList;