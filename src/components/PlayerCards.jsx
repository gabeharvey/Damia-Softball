/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
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
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgColor="#FFFFFF"
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#005A9C"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#005A9C"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Pacifico', cursive">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Pacifico', cursive" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
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
      name: "Danica McGarity",
      bio: "Danica McGarity is a powerhouse on the field, known for her home run swings and ability to drive in runs when her team needs it most."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "Danica McGarity's pinpoint pitches and blazing fastball keep batters guessing, consistently striking out opponents in high-pressure moments."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "With an unmatched softball IQ, Danica McGarity reads the game like no other, always positioning herself perfectly for critical plays at shortstop."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "Under pressure, Danica McGarity shines at the plate, delivering clutch hits that drive in the winning runs in the tightest games."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "Danica McGarity’s gold-glove defense in the outfield keeps her team in the game, making diving catches and cutting off extra-base hits with ease."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "A versatile utility player, Danica McGarity can handle any position, whether it’s making game-changing plays in the infield or blasting hits from the batter’s box."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "Known for her ability to rise in the clutch, Danica McGarity delivers high-pressure RBIs and steals bases when her team needs it the most."
    },
    {
      frontImg: "softball-placeholder.png",
      name: "Danica McGarity",
      bio: "Her rocket arm and quick reflexes make Danica McGarity a force behind the plate, picking off runners and framing pitches with precision."
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
      bgImage="url('/softball.png')" 
      bgSize="80%" 
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="3xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive">
        Player Cards    
      </Text>
      <Text fontSize="xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive">
        Click on card for more info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;