const sections = [
    {
        color1: 'thistle',
        color2: 'black',
        image: '11.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Ceruledge',
            h1FontSize: '4vw',
            p2: 'Ceruledge dons an old set of armor steeped in grudges and wields blades made of fire and ghost energy. In battle, these blades transform into great swords to increase Ceruledge’s power. Cuts from these great swords leave wounds from which life energy will flow.',
            p2FontSize: '1.5vw',
            bottomH1: 'Ceruledge',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'brightness(1.2)',
        clickAnimation: 'scale(1.1)'  // Example on-click animation
    },
    {
        color1: '#feca57',
        color2: '#54a0ff',
        image: '2.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Snorlax',
            h1FontSize: '4vw',
            p2: "Snorlax’s typical day consists of nothing more than eating and sleeping. It is such a docile POKéMON that there are children who use its big belly as a place to play.",
            p2FontSize: '1.5vw',
            bottomH1: 'Snorlax',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'sepia(1)',
        clickAnimation: 'rotate(10deg)'  // Example on-click animation
    },
    {
        color1: 'LimeGreen',
        color2: 'jackfruityellow',
        image: '3.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Bellibot',
            h1FontSize: '4vw',
            p2: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
            p2FontSize: '1.5vw',
            bottomH1: 'Bellibot',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'contrast(150%)',
        clickAnimation: 'translateY(-10px)'  // Example on-click animation
    },
    {
        color1: '#48dbfb',
        color2: '#f368e0',
        image: '4.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Farigiraf',
            h1FontSize: '4vw',
            p2: "Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig’s.",
            p2FontSize: '1.5vw',
            bottomH1: 'Farigiraf',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'grayscale(100%)',
        clickAnimation: 'skewX(5deg)'  // Example on-click animation
    },
    {
        color1: '#1dd1a1',
        color2: '#ff6b6b',
        image: '7.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Bellossom',
            h1FontSize: '4vw',
            p2: "When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon’s dancing is renowned in the southern lands.",
            p2FontSize: '1.5vw',
            bottomH1: 'Bellossom',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'invert(1)',
        clickAnimation: 'scale(1.1) rotate(-5deg)'  // Example on-click animation
    },
    {
        color1: 'Purple',
        color2: 'Black',
        image: '6.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Gengar',
            h1FontSize: '4vw',
            p2: "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a GENGAR running past you, pretending to be your shadow.",
            p2FontSize: '1.5vw',
            bottomH1: 'Gengar',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'blur(2px)',
        clickAnimation: 'rotate(15deg)'  // Example on-click animation
    },
    // New 8th slider
    {
        color1: 'DarkOrange',
        color2: 'Navy',
        image: '8.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Pikachu',
            h1FontSize: '4vw',
            p2: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
            p2FontSize: '1.5vw',
            bottomH1: 'Pikachu',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'saturate(2)',
        clickAnimation: 'scale(1.2)'  // Example on-click animation
    },
    // New 9th slider
    {
        color1: 'MediumPurple',
        color2: 'Teal',
        image: '9.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Charizard',
            h1FontSize: '4vw',
            p2: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything.",
            p2FontSize: '1.5vw',
            bottomH1: 'Charizard',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'hue-rotate(90deg)',
        clickAnimation: 'translateX(-10px)'  // Example on-click animation
    },
    // New 10th slider
    {
        color1: 'Pink',
        color2: 'LightSeaGreen',
        image: '10.png',
        text: {
            p1: "Who's that Pokemon?",
            p1FontSize: '2vw',
            h1: 'Mewtwo',
            h1FontSize: '4vw',
            p2: "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
            p2FontSize: '1.5vw',
            bottomH1: 'Mewtwo',
            bottomH1FontSize: '5vw'
        },
        hoverEffect: 'brightness(0.7)',
        clickAnimation: 'translateY(10px) scale(1.1)'  // Example on-click animation
    }
];

// Function to switch to the landing page (index 0)
function showLandingPage() {
    document.getElementById('section1').style.backgroundColor = '#D10000';  // Default color
    document.getElementById('section2').style.backgroundColor = 'white';  // Default color

    const imgElement = document.querySelector('.image-overlay img');
    imgElement.src = '5.png';  // Landing page image
    imgElement.style.width = '100%';
    imgElement.style.height = 'auto';
    imgElement.style.transition = 'filter 0.5s ease, transform 0.3s ease';

    // Apply hover effect to the landing page image
    imgElement.onmouseover = function() {
        imgElement.style.filter = 'brightness(0.8)';  // Example hover effect
    };
    imgElement.onmouseout = function() {
        imgElement.style.filter = 'none';
    };

    // Apply click animation to the landing page image
    imgElement.onclick = function() {
        imgElement.style.transform = 'scale(1.1)';
        setTimeout(() => imgElement.style.transform = 'none', 300);
    };

    const p1Element = document.querySelector('.text-content p:first-of-type');
    const h1Element = document.querySelector('.text-content h1');
    const p2Element = document.querySelector('.text-content p:last-of-type');
    const bottomH1Element = document.querySelector('.bottom-heading h1');

    p1Element.textContent = 'Welcome to the Pokemon Slider!';
    p1Element.style.fontSize = '3vw';

    h1Element.textContent = 'Explore the World of Pokemon';
    h1Element.style.fontSize = '6vw';

    p2Element.textContent = 'Use the slider to discover more about your favorite Pokemon.';
    p2Element.style.fontSize = '2vw';

    bottomH1Element.textContent = 'Start Your Journey';
    bottomH1Element.style.fontSize = '4vw';
}

function changeSlide(index) {
    if (index === 0) {
        showLandingPage();  // Show landing page if index 0
        return;
    }

    // Update background colors
    document.getElementById('section1').style.backgroundColor = sections[index - 1].color1;
    document.getElementById('section2').style.backgroundColor = sections[index - 1].color2;
    
    // Update image and its size
    const imgElement = document.querySelector('.image-overlay img');
    imgElement.src = sections[index - 1].image;
    imgElement.style.width = '100%';
    imgElement.style.height = 'auto';
    imgElement.style.transition = 'filter 0.5s ease, transform 0.3s ease';  // Smooth transition for hover and click effects

    // Apply unique hover effect
    imgElement.onmouseover = function() {
        imgElement.style.filter = sections[index - 1].hoverEffect;
    };
    imgElement.onmouseout = function() {
        imgElement.style.filter = 'none';
    };

    // Apply click animation
    imgElement.onclick = function() {
        imgElement.style.transform = sections[index - 1].clickAnimation;
        setTimeout(() => imgElement.style.transform = 'none', 300);
    };

    // Update text content and font sizes
    const p1Element = document.querySelector('.text-content p:first-of-type');
    const h1Element = document.querySelector('.text-content h1');
    const p2Element = document.querySelector('.text-content p:last-of-type');
    const bottomH1Element = document.querySelector('.bottom-heading h1');

    p1Element.textContent = sections[index - 1].text.p1;
    p1Element.style.fontSize = sections[index - 1].text.p1FontSize;

    h1Element.textContent = sections[index - 1].text.h1;
    h1Element.style.fontSize = sections[index - 1].text.h1FontSize;

    p2Element.textContent = sections[index - 1].text.p2;
    p2Element.style.fontSize = sections[index - 1].text.p2FontSize;

    bottomH1Element.textContent = sections[index - 1].text.bottomH1;
    bottomH1Element.style.fontSize = sections[index - 1].text.bottomH1FontSize;
}

// Initialize landing page on load
showLandingPage();
