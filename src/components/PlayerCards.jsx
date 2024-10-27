/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, funFact, flipSound, cardNumber }) { 
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          bg="white" 
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            borderColor="#005A9C"
            borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Text
              bg="transparent"
              w="100%"
              color="#005A9C"
              fontSize="2xl"
              fontFamily="'Pacifico', cursive"
              textAlign="center"
              p={2}
              borderBottomRadius="12px"
            >
              Damia McGarity #{cardNumber} 
            </Text>
          </Box>
        </Box>

        {/* Back Side */}
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#005A9C"
          borderWidth="3px" 
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          bgGradient="linear(to-br, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))" 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          {/* Team Logo */}
          <Box mb={2}>
            <img src="/texas-logo.png" alt="Team Logo" style={{ width: '50px', height: 'auto' }} />
          </Box>

          {/* Player Stats */}
          <Text mt={2} color="#F8F8F8" fontFamily="'Roboto Condensed', system-ui" fontWeight="bold" fontSize="lg" textAlign="center">
            Batting Average: .350
          </Text>
          <Text color="#F8F8F8" fontFamily="'Roboto Condensed', system-ui" fontWeight="bold" fontSize="lg" textAlign="center">
            Home Runs: 15
          </Text>
          <Text mt={4} color="#F8F8F8" fontFamily="'Roboto Condensed', system-ui" fontWeight="bold" fontSize="lg" textAlign="center">
            Card #{cardNumber} 
          </Text>
          <Text mt={4} color="#F8F8F8" fontFamily="'Roboto Condensed', system-ui" fontWeight="bold" fontSize="xl" textAlign="center">
            {bio}
          </Text>
          <Text mt={2} color="#F8F8F8" fontFamily="'Roboto Condensed', system-ui" fontWeight="bold" fontSize="lg" textAlign="center">
            Fun Fact: {funFact}
          </Text>
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="12px"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            opacity="0.5"
            pointerEvents="none" 
          />
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');
  const players = [
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a powerhouse on the field, known for her home run swings.",
      funFact: "Loves to play the guitar in her free time.",
      cardNumber: 1
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is an outstanding pitcher with a knack for striking out batters.",
      funFact: "Enjoys baking and making desserts for the team.",
      cardNumber: 2 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a quick outfielder known for her incredible speed.",
      funFact: "A huge fan of outdoor adventures and hiking.",
      cardNumber: 3 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a versatile player, excelling both infield and outfield.",
      funFact: "Collects vintage sports memorabilia.",
      cardNumber: 4 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a solid infielder with exceptional fielding skills.",
      funFact: "Loves photography and capturing team moments.",
      cardNumber: 5 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is known for her powerful batting and strong leadership.",
      funFact: "Enjoys volunteering at local shelters.",
      cardNumber: 6 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a talented catcher with a strong arm.",
      funFact: "Plays piano and has a passion for music.",
      cardNumber: 7 
    },
    {
      frontImg: "softball-placeholder.png",
      bio: "Damia McGarity is a dynamic player with a keen sense of the game.",
      funFact: "Avid traveler who loves exploring new cultures.",
      cardNumber: 8 
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      minH="100vh" 
      bg="white" 
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="3xl" color="#EF3E42">
        Player Cards
      </Text>
      <Text fontSize="xl" fontWeight="bold" fontFamily="'Roboto+Condensed', system-ui" color="#EF3E42" mb={4}>
        Click on a card to see more info
      </Text>
      <SimpleGrid columns={columns} spacing={10}>
        {players.map((player, index) => (
          <Card
            key={index}
            frontImg={player.frontImg}
            bio={player.bio}
            funFact={player.funFact}
            flipSound={flipSound}
            cardNumber={player.cardNumber} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
