const sections = [
    {
        color1: 'thistle',
        color2: 'black',
        image: '11.png',
        width: '350%',  // Example width
        height: '125%',  // Example height
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '40px',  // Example font size
            h1: 'Ceruledge',
            h1FontSize: '100px',  // Example font size
            p2: 'Ceruledge dons an old set of armor steeped in grudges and wields blades made of fire and ghost energy. In battle, these blades transform into great swords to increase Ceruledge’s power. Cuts from these great swords leave wounds from which life energy will flow.',
            p2FontSize: '26px',  // Example font size
            bottomH1: 'Ceruledge',
            bottomH1FontSize: '200px'  // Example font size
        }
    },
    {
        color1: '#feca57',
        color2: '#54a0ff',
        image: '2.png',
        width: '350%',
        height: 'auto',
        text: {
            p1: "Who's that Pokemon?",
            h1: 'Snorlax',
            p2: "Snorlax’s typical day consists of nothing more than eating and sleeping. It is such a docile POKéMON that there are children who use its big belly as a place to play.",
            bottomH1: 'Snorlax'

        }
    },
    {
        color1: 'LimeGreen',
        color2: 'jackfruityellow',
        image: '3.png',
        width: '350%',
        height: 'auto',
        text: {
            p1: "Who's that Pokemon?",
            h1: 'Bellibot',
            p2: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
            bottomH1: 'Bellibot'
        }
    },
    {
        color1: '#48dbfb',
        color2: '#f368e0',
        image: '4.png',
        width: '500%',
        height: 'auto',
        text: {
            p1: "Who's that Pokemon?",
            h1: 'Farigiraf',
            p2: "Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig’s.",
            bottomH1: 'Farigiraf'
        }
    },
    {
        color1: '#1dd1a1',
        color2: '#ff6b6b',
        image: '7.png',
        width: '500%',
        height: 'auto',
        text: {
            p1: "Who's that Pokemon?",
            h1: 'Bellossom',
            p2: "When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon’s dancing is renowned in the southern lands.",
            bottomH1: 'Bellossom'
        }
    },
    {
        color1: 'Purple',
        color2: 'Black',
        image: '6.png',
        width: '500%',
        height: 'auto',
        text: {
            p1: "Who's that Pokemon?",
            h1: 'Gengar',
            p2: "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a GENGAR running past you, pretending to be your shadow.",
            bottomH1: 'Gengar'
        }
    }
];

function changeSlide(index) {
    // Update background colors
    document.getElementById('section1').style.backgroundColor = sections[index].color1;
    document.getElementById('section2').style.backgroundColor = sections[index].color2;
    
    // Update image and its size
    const imgElement = document.querySelector('.image-overlay img');
    imgElement.src = sections[index].image;
    imgElement.style.width = sections[index].width;
    imgElement.style.height = sections[index].height;

    // Update text content and font sizes
    const p1Element = document.querySelector('.text-content p:first-of-type');
    const h1Element = document.querySelector('.text-content h1');
    const p2Element = document.querySelector('.text-content p:last-of-type');
    const bottomH1Element = document.querySelector('.bottom-heading h1');

    p1Element.textContent = sections[index].text.p1;
    p1Element.style.fontSize = sections[index].text.p1FontSize;

    h1Element.textContent = sections[index].text.h1;
    h1Element.style.fontSize = sections[index].text.h1FontSize;

    p2Element.textContent = sections[index].text.p2;
    p2Element.style.fontSize = sections[index].text.p2FontSize;

    bottomH1Element.textContent = sections[index].text.bottomH1;
    bottomH1Element.style.fontSize = sections[index].text.bottomH1FontSize;
}