/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#005A9C"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#005A9C"
        bgImage="linear-gradient(-45deg, #005A9C 25%, transparent 25%, transparent 50%, #005A9C 50%, #005A9C 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="xl" fontWeight="semibold" color="#38393d" fontFamily="'Pacifico', cursive">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#38393d" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function SoftballFilm() {
    const videos = [
        {
          videoSrc: "Damia-softball-1.MOV",
          title: "Damia's Game-Winning Home Run",
          description: "Walk-Off Victory",
        },
        {
          videoSrc: "Damia-softball-2.mov",
          title: "Damia Pitching Practice",
          description: "Perfecting the Curveball",
        },
        {
          videoSrc: "Damia-softball-3.MOV",
          title: "Damia's Perfect Pitch",
          description: "Fast and Accurate Pitching",
        },
        {
          videoSrc: "Damia-softball-4.MOV",
          title: "Damia's Quick Fielding",
          description: "Flawless Defense in the Infield",
        },
        {
          videoSrc: "Damia-softball-5.MOV",
          title: "Damia's Diving Catch",
          description: "Spectacular Catch in the Outfield",
        },
        {
          videoSrc: "../softball-video6.mp4",
          title: "Damia's Double Play",
          description: "Smooth Coordination to Turn Two",
        },
        {
          videoSrc: "../softball-video7.mp4",
          title: "Damia Championship Match",
          description: "Highlights from the Finals",
        },
        {
          videoSrc: "../softball-video8.mp4",
          title: "Damia's Tournament Highlights",
          description: "Top Plays from the Season",
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
        Softball Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default SoftballFilm;